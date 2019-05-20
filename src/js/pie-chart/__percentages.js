var dataset = [0,38,62,89];

function Draw(dataset)
{
    var canvas = document.getElementsByClassName('pie-chart__percentages');
    for (var k = 0; k < canvas.length; k++){

        if (canvas[k].getContext){
            var ctx = canvas[k].getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var offset = ((Math.PI*2)/100)*dataset[k];

            var i = 1;
            var j = 1;
            ctx.lineWidth = 8;
            ctx.strokeStyle = '#e75735';
            ctx.fillStyle = '#b8b8b8';

            if (dataset[k] > 0) {
                ctx.beginPath();
                var x = 25 + j * 50; // x coordinate
                var y = 25 + i * 50; // y coordinate
                var radius = 65; // Arc radius
                var startAngle = -1.57; // Starting point on circle
                var endAngle = -1.56 + offset; // End point on circle
                var anticlockwise = false;// clockwise or anticlockwise

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                ctx.stroke();
            }
            //-----------------------TXT---------------
            ctx.font = '4.8rem sans-serif';
            ctx.fontWeight = 100;
            ctx.fillText(dataset[k], 32, 100);
        }
    }
}
Draw(dataset);