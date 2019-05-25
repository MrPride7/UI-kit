
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
        var reg = new RegExp("[A-Za-zА-Яа-яЁё]+[^@s]+[A-Za-zА-Яа-яЁё]");
        return reg.test(el.value);
    }
}

/*function showErrors (arr) {
    console.log(arr);
}*/

function validator (e) {
    //e.preventDefault();
    var errors =[];
    var inputs = this.elements;
    for(var i = 0; i < inputs.length; i++){
        if (inputs[i].tagName != 'BUTTON') {
            var rulesList = inputs[i].dataset.rule;
            //console.log(rulesList);
            if (rulesList !== undefined){
                rulesList = rulesList.split(' ');
                for(var j = 0; j < rulesList.length; j++){
                    if (rulesList[j] in rules) {
                        if(!rules[rulesList[j]](inputs[i])){
                            errors.push({
                                name: inputs[i].name,
                                error: rulesList[j]
                            });
                            inputs[i].nextElementSibling.classList.add("form__indicator_invalid");
                            inputs[i].nextElementSibling.innerHTML = "eror";
                        } else {
                            inputs[i].nextElementSibling.classList.add("form__indicator_valid");
                            inputs[i].nextElementSibling.innerHTML = "Thanks!";
                        }
                    }
                }
            }
        }
    }
    if(errors.length > 0){
        e.preventDefault();
        //showErrors(errors);
    }
}