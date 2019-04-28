var dataset = [0,38,62,89];

function Draw(dataset)
{

    var canvas = document.getElementsByClassName('.pie-chart__percentages');

    for (var k = 0; k < canvas.length; k++){
        //canvas[k].style.height = '500px';
        if (canvas[k].getContext){
            var ctx = canvas[k].getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var offset = ((Math.PI*2)/100)*dataset[k];

            var i = 1;
            var j = 1;
            ctx.lineWidth = 10;
            ctx.strokeStyle = '#e75735';
            ctx.fillStyle = '#9d9d9d';

            ctx.beginPath();
            var x = 25+j*50; // x coordinate
            var y = 25+i*50; // y coordinate
            var radius = 55; // Arc radius
            var startAngle = -1.57; // Starting point on circle
            var endAngle = -1.56+offset ; //Math.PI+(Math.PI*j)/2; // End point on circle
            var anticlockwise =  false;//(i%2==0) ? false : true; // clockwise or anticlockwise

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            ctx.stroke();

            //-----------------------TXT---------------
            ctx.font = 'bold 30px sans-serif';
            ctx.fillText(dataset[k] + "%", 38, 80);
        }
    }
}
Draw(dataset);