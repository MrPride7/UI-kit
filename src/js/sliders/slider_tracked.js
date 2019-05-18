const sliderTrk = document.getElementById('slider_tracked');

sliderTrk.addEventListener("mousemove", function () {
    var x = sliderTrk.value;
    console.log('Test2 =' + sliderTrk.value);
    var color = 'linear-gradient(90deg, #4eb7a8 ' + x + '%, #e5e5e5 ' + x + '%)';
    sliderTrk.style.background = color;
})

