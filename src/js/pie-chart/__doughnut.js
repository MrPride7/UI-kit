var dataset = [
    {
        value: 12,
        color: '#747474'
    }, {
        value: 26,
        color: '#e75735'
    }, {
        value: 28,
        color: '#4eb7a8'
    }
];

var maxValue = 25;
var container = $('.pie-chart__doughnut');

var addSector = function(data, startAngle, collapse) {
    var sectorDeg = 3.6 * data.value;
    var skewDeg = 90 + sectorDeg;
    var rotateDeg = startAngle;
    if (collapse) {
        skewDeg++;
    }

    var sector = $('<div>', {
        'class': 'sector'
    }).css({
        'background': data.color,
        'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
    });
    container.append(sector);

    return startAngle + sectorDeg;
};

dataset.reduce(function (prev, curr) {
    return (function addPart(data, angle) {
        if (data.value <= maxValue) {
            return addSector(data, angle, false);
        }

        return addPart({
            value: data.value - maxValue,
            color: data.color
        }, addSector({
            value: maxValue,
            color: data.color,
        }, angle, true));
    })(curr, prev);
}, 0);