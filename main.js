document.addEventListener('DOMContentLoaded', function () {
    var options = {
        chart: {
            type: 'line',
            height: 170,
            width: 210,
            foreColor: 'rgba(255, 255, 255, 0.75)',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            fontFamily: "Rubik, sans-serif",
        },
        series: [{
            name: 'Sales',
            data: [53, 15, 34, 90, 27, 73],
        }],
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisBorder: {
                height: 0.5,
            },
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            enabled: false
        },
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        grid: {
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            strokeDashArray: 5,       
        },
        fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
              colorStops: [{
                offset: 0,
                color: '#ff0000',
                opacity: 1
              }, {
                offset: 90,
                color: '#00ff00',
                opacity: 1
              }]
            }
          },
    };

    var chart = new ApexCharts(document.querySelector("#chart-sales"), options);
    chart.render();
});