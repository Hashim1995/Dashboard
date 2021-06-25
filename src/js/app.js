var ctx = document.getElementById('myChart').getContext('2d');
var seller = document.getElementById('sellerChart').getContext('2d');
var seller1 = document.getElementById('sellerChart1').getContext('2d');
var seller2 = document.getElementById('sellerChart2').getContext('2d');
var seller3 = document.getElementById('sellerChart3').getContext('2d');

var gradientStroke = ctx.createLinearGradient(0, 500, 0, 00);
gradientStroke.addColorStop(1, "#0D472D");
gradientStroke.addColorStop(0, "#22a76c");
var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(1, "#AAFFBE");
gradientFill.addColorStop(0, "#22a76c");


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            label: '# Performans per hour',

            backgroundColor: gradientFill,
            fill: true,
            responsive: true,
            borderColor:               gradientStroke,
            pointBorderColor:          gradientStroke,
            pointBackgroundColor:      '#ffffff',
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor:     gradientStroke,
            borderColor: [
                gradientStroke
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animations: {
            tension: {
                duration: 2000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        }
    }
});

var sellerChart = new Chart(seller, {
    type: 'line',
    data: {
        labels: [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        datasets: [{
            legend: {
                display: false,
            },
            data: [20,8,5,30,25,30,40,50,50,80],
            label: '',
            fill: true,
            backgroundColor: [
                'rgb(34, 167, 108)'
            ],
            
            responsive: true,
            borderColor: [
                'rgb(34, 167, 108)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        plugins: {
            scaleShowLabels : false,
            legend: {
              display: false,
              labels: {
                display: false,
              },
              title: {
                display: false,
              }
            },
            title: {
                display: false,
              }
        },
        responsive: false,
        bezierCurve: false, //remove curves from your plot
        scaleShowLabels: false, //remove labels
        tooltipEvents: [], //remove trigger from tooltips so they will'nt be show
        pointDot: false, //remove the points markers
        scales: {
           
            y: {
                ticks: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        }
    }
});
var sellerChart = new Chart(seller1, {
    type: 'line',
    data: {
        labels: [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        datasets: [{
            legend: {
                display: false,
            },
            data: [10,8,5,10,15,20,30,40,50,60],
            label: '',
            fill: true,
            backgroundColor: [
                'rgb(34, 167, 108)'
            ],
            
            responsive: true,
            borderColor: [
                'rgb(34, 167, 108)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        plugins: {
            scaleShowLabels : false,
            legend: {
              display: false,
              labels: {
                display: false,
              },
              title: {
                display: false,
              }
            },
            title: {
                display: false,
              }
        },
        responsive: false,
        bezierCurve: false, //remove curves from your plot
        scaleShowLabels: false, //remove labels
        tooltipEvents: [], //remove trigger from tooltips so they will'nt be show
        pointDot: false, //remove the points markers
        scales: {
           
            y: {
                ticks: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        }
    }
});
var sellerChart = new Chart(seller2, {
    type: 'line',
    data: {
        labels: [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        datasets: [{
            legend: {
                display: false,
            },
            data: [30,20,15,60,50,40,35,40,35,20,15,10],
            label: '',
            fill: true,
            backgroundColor: [
                'rgb(205, 0, 0)'
            ],
            
            responsive: true,
            borderColor: [
                'rgb(205, 0, 0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        plugins: {
            scaleShowLabels : false,
            legend: {
              display: false,
              labels: {
                display: false,
              },
              title: {
                display: false,
              }
            },
            title: {
                display: false,
              }
        },
        responsive: false,
        bezierCurve: false, //remove curves from your plot
        scaleShowLabels: false, //remove labels
        tooltipEvents: [], //remove trigger from tooltips so they will'nt be show
        pointDot: false, //remove the points markers
        scales: {
           
            y: {
                ticks: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        }
    }
});
var sellerChart = new Chart(seller3, {
    type: 'line',
    data: {
        labels: [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        datasets: [{
            legend: {
                display: false,
            },
            data: [20,20,20,30,8,18,25,31,29,32,48,50],
            label: '',
            fill: true,
            backgroundColor: [
                'rgb(34, 167, 108)'
            ],
            
            responsive: true,
            borderColor: [
                'rgb(34, 167, 108)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        plugins: {
            scaleShowLabels : false,
            legend: {
              display: false,
              labels: {
                display: false,
              },
              title: {
                display: false,
              }
            },
            title: {
                display: false,
              }
        },
        responsive: false,
        bezierCurve: false, //remove curves from your plot
        scaleShowLabels: false, //remove labels
        tooltipEvents: [], //remove trigger from tooltips so they will'nt be show
        pointDot: false, //remove the points markers
        scales: {
           
            y: {
                ticks: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        }
    }
});


function addData(chart, labelParam, dataParam) {
    labelParam.forEach(labelElement => {
        chart.data.labels.push(labelElement)
    });
    dataParam.forEach(dataElement => {
        chart.data.datasets[0].data.push(dataElement)
    })


    chart.update();
}
label = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(arr)

addData(myChart, label, arr)


const off = document.querySelector(".off-canvas-circle");
const bar = document.querySelector(".sidebar-wrap");
const site = document.querySelector(".site-wrap");
off.addEventListener("click", ()=>{
    bar.classList.toggle("off");
    site.classList.toggle("off-grid");
    off.classList.toggle("rotate-off-canvas-circle");
})

if(document.documentElement.clientWidth <768){
    bar.classList.toggle("off");
    site.classList.toggle("off-grid");
    off.classList.toggle("rotate-off-canvas-circle");
}