var stages = document.getElementsByClassName('stages__stage');
stages = Array.prototype.slice.call(stages);

const stBar = document.getElementById('st-bar');
const ACTIVE_COLOR = '#fff';
const ACTIVE_BGC = '#e75735';
const DEFAULT_COLOR = '#888';
const DEFAULT_BGC = '#e5e5e5';

stages.forEach(function(stage){
    stage.addEventListener("click", function () {
        stage.style.backgroundColor = ACTIVE_BGC;
        stage.style.color = ACTIVE_COLOR;
        var colorBorder = (stage.innerHTML - 1)*25;
        stBar.style.background = 'linear-gradient(90deg, ' + ACTIVE_BGC + ' ' +
            colorBorder + '%, ' + DEFAULT_BGC + ' ' + colorBorder + '%)';
        for (var i = 0; i < stages.length; i++){
            if(stages[i].innerHTML <= stage.innerHTML){
                stages[i].style.backgroundColor = ACTIVE_BGC;
                stages[i].style.color = ACTIVE_COLOR;
            } else {
                stages[i].style.backgroundColor = DEFAULT_BGC;
                stages[i].style.color = DEFAULT_COLOR;
            }
        }
    })
})