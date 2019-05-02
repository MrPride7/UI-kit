var slider = document.getElementById('slider_valued');
var value = document.getElementById('pointer');


value.innerHTML = slider.value;
slider.oninput = function(){
    value.innerHTML = this.value;
    value.style.left = value.left + this.value + 'px';
}