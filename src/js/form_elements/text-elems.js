var forms = document.getElementsByTagName('form');
for(var i = 0; i < forms.length; i++){
    forms[i].addEventListener('submit', validator);
}
var rules = {
    required: function(el){
        if(el.value != ''){
            return true;
        }
        return false;
    },
    email: function(el){
        var reg = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$");
        return reg.test(el.value);
    },
    name: function(el){
        var reg = new RegExp("^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\\s[А-ЯЁ][а-яё]");
        return reg.test(el.value);
    }
}
//**************************
//*****ПРОВЕРЯЕМ ФОРМУ******
//**************************
function validator (e) {
    //e.preventDefault();
    var errors =[];
    var inputs = this.elements;
    for(var i = 0; i < inputs.length; i++){
        if (inputs[i].tagName != 'BUTTON') {
            var rulesList = inputs[i].dataset.rule;
            if (rulesList !== undefined){
                rulesList = rulesList.split(' ');
                for(var j = 0; j < rulesList.length; j++){
                    if (rulesList[j] in rules) {
                        if(!rules[rulesList[j]](inputs[i])){
                            errors.push({
                                name: inputs[i].name,
                                error: rulesList[j]
                            });
                        }
                    }
                }
            }
        }
    }
    if(errors.length > 0){
        e.preventDefault();
    }
}
//**************************
//*****ПРОВЕРЯЕМ ИНПУТЫ*****
//**************************
for (var k = 0; k < forms.length; k++){
    var formElems = forms[k].elements;
    formElems = Array.prototype.slice.call(formElems);
    for (var t = 0; t < formElems.length; t++){
        if (formElems[t].tagName !== "INPUT"){
            formElems.splice(t);
        }
    }
}
formElems.forEach(function(formInput) {
    formInput.onchange = function () {
        var rulesList = formInput.dataset.rule;
        if (rulesList !== undefined){
            rulesList = rulesList.split(' ');
            for(var i = 0; i < rulesList.length; i++){
                if (rulesList[i] in rules) {
                    if(!rules[rulesList[i]](formInput)){
                        if(formInput.nextElementSibling.classList.contains('form__indicator_valid')){
                            formInput.nextElementSibling.classList.remove('form__indicator_valid');
                        }
                        if(formInput.nextElementSibling.classList.contains('form__indicator_invalid')){
                            formInput.nextElementSibling.classList.remove('form__indicator_invalid');
                        }
                        formInput.nextElementSibling.classList.add('form__indicator_invalid');
                        formInput.nextElementSibling.innerHTML = "eror";
                    }
                    else {
                        if(formInput.nextElementSibling.classList.contains('form__indicator_valid')){
                            formInput.nextElementSibling.classList.remove('form__indicator_valid');
                        }
                        if(formInput.nextElementSibling.classList.contains('form__indicator_invalid')){
                            formInput.nextElementSibling.classList.remove('form__indicator_invalid');
                        }
                        formInput.nextElementSibling.classList.add('form__indicator_valid');
                        formInput.nextElementSibling.innerHTML = "Thanks!";
                    }
                }
            }
        }
    }
})

