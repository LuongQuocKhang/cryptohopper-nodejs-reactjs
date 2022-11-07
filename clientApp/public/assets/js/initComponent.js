/* eslint no-undef: */
var $realData = [];

function initKnob() {
    $('.dial').knob();
}

function initFlotChart(colors) {
    var plot = this.createRealTimeGraph('#flotRealTime', this.randomData(), [colors]);
    plot.draw();

    function updatePlot() {
        plot.setData([this.randomData()]);
        // Since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        setTimeout(updatePlot, $('html').hasClass('mobile-device') ? 500 : 500);
    }

    updatePlot();
}


function randomData() {
    var totalPoints = 300;
    if (this.$realData.length > 0)
        this.$realData = this.$realData.slice(1);

    // Do a random walk
    while (this.$realData.length < totalPoints) {

        var prev = this.$realData.length > 0 ? this.$realData[this.$realData.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

        if (y < 0) {
            y = 0;
        } else if (y > 100) {
            y = 100;
        }

        this.$realData.push(y);
    }

    // Zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < this.$realData.length; ++i) {
        res.push([i, this.$realData[i]])
    }

    return res;
}

function createRealTimeGraph(selector, data, colors) {
    var plot = $.plot(selector, [data], {
        colors: colors,
        series: {
            grow: {
                active: false
            }, //disable auto grow
            shadowSize: 0, // drawing is faster without shadows
            lines: {
                show: true,
                fill: true,
                lineWidth: 2,
                steps: false
            }
        },
        grid: {
            show: true,
            aboveData: false,
            color: '#dcdcdc',
            labelMargin: 15,
            axisMargin: 0,
            borderWidth: 0,
            borderColor: null,
            minBorderMargin: 5,
            clickable: true,
            hoverable: true,
            autoHighlight: false,
            mouseActiveRadius: 20
        },
        tooltip: true, //activate tooltip
        tooltipOpts: {
            content: "Value is : %y.0" + "%",
            shifts: {
                x: -30,
                y: -50
            }
        },
        yaxis: {
            axisLabel: "Response Time (ms)",
            min: 0,
            max: 100,
            tickColor: '#f5f5f5',
            color: 'rgba(0,0,0,0.1)'
        },
        xaxis: {
            axisLabel: "Point Value (1000)",
            show: true,
            tickColor: '#f5f5f5'
        }
    });

    return plot;
}

function initDonutChart() {
    var donutlabels = ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "Cardano"];
    var donutdatas = [48, 30, 15, 32, 26];
    var donutcolors = ['#02c0ce', '#2d7bf4', '#e3eaef', '#f1556c', "#f9bc0b"];
    this.createDonutGraph("#donut-chart #donut-chart-container", donutlabels, donutdatas, donutcolors);
}
function createDonutGraph(selector, labels, datas, colors) {
    var data = [{
        label: labels[0],
        data: datas[0]
    }, {
        label: labels[1],
        data: datas[1]
    }, {
        label: labels[2],
        data: datas[2]
    }, {
        label: labels[3],
        data: datas[3]
    }, {
        label: labels[4],
        data: datas[4]
    }];
    var options = {
        series: {
            pie: {
                show: true,
                innerRadius: 0.7
            }
        },
        legend: {
            position: "sw",
            margin: [0, 0],
            noColumns: 2,
            show: false,
            labelFormatter: function (label, series) {
                return '<div style="font-size:14px;">&nbsp;' + label + '</div>'
            },
            labelBoxBorderColor: null,
            width: 20
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        colors: colors,
        tooltip: true,
        tooltipOpts: {
            content: "%s, %p.0%"
        }
    };

    $.plot($(selector), data, options);
}


function initLineChart() {
    //creating line chart
    var line_ticks = {
        y: {
            min: -1.2,
            max: 1.2,
            tickColor: '#f5f5f5',
            font: {
                color: '#bdbdbd'
            }
        },
        x: {
            tickColor: '#f5f5f5',
            font: {
                color: '#bdbdbd'
            }
        }
    };

    //sample data
    var sin = [],
        cos = [];
    var offset = 0;
    for (var i = 0; i < 12; i += 0.2) {
        sin.push([i, Math.sin(i + offset)]);
        cos.push([i, Math.cos(i + offset)]);
    }
    var line_data = [
        {
            data: sin,
            label: "Google",
        },
        {
            data: cos,
            label: "Yahoo"
        }
    ];
    this.createLineGraph("#line-chart-alt", line_ticks, ['#02c0ce', '#e3eaef'], line_data);
}

function createLineGraph(selector, ticks, colors, data) {
    var options = {
        series: {
            lines: {
                show: true
            },
            points: {
                show: true
            }
        },
        legend: {
            position: "ne",
            margin: [0, -32],
            noColumns: 0,
            labelBoxBorderColor: null,
            labelFormatter: function (label, series) {
                // just add some space to labes
                return '' + label + '&nbsp;&nbsp;';
            },
            width: 30,
            height: 2
        },
        yaxis: ticks.y,
        xaxis: ticks.x,
        colors: colors,
        grid: {
            hoverable: true,
            borderColor: '#f5f5f5',
            borderWidth: 1,
            backgroundColor: '#fff'
        },
        tooltip: true, //activate tooltip
        tooltipOpts: {
            content: "%s : %y.0",
            shifts: {
                x: -30,
                y: -50
            }
        }
    };
    return $.plot($(selector), data, options);
}


function initBiPolarChar() {
    var data = {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
    };

var options = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null;
    }
  },
  plugins: [
    Chartist.plugins.tooltip()
  ]
};

new Chartist.Bar('#bi-polar-bar', data, options);
}


function initAmountRange() {
    $("#range_02").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });
}