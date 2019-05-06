const slider = document.getElementById('slider_valued');
const pointer = document.getElementById('pointer');
pointer.innerHTML = 0;

function setBagePosition(Slider, Pointer){

    var fontSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');

    const diameter = parseInt(fontSize)*2.1; // approximated width of pointer.

    const dxPixels = diameter/2 + (Slider.valueAsNumber-parseInt(Slider.min))*(Slider.scrollWidth-diameter)/(parseInt(Slider.max)-parseInt(Slider.min));

    Pointer.style.left = dxPixels - (Pointer.offsetWidth / 2) + 'px';
}

setBagePosition(slider, pointer);

slider.oninput = function() {
    pointer.innerHTML = slider.value;
    setBagePosition(slider, pointer);
}