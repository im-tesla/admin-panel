function salesChart() {
    var salesData = [61, 15, 34, 90, 27, 73];

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
            data: salesData,
            type: 'line',
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
            curve: 'smooth',
        },
        grid: {
            show: true,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            strokeDashArray: 5,
        },
        fill: {
            type: "gradient",
            gradient: {
              type: 'vertical',
              shadeIntensity: 1,
              opacityFrom: 1,
              opacityTo: 1,
              colorStops: [
                {
                  offset: 30,
                  color: "#54cc25",
                  opacity: 1
                },
                {
                  offset: 70,
                  color: "#de621f",
                  opacity: 1
                },
                {
                  offset: 90,
                  color: "#de1f1f",
                  opacity: 1
                }
              ]
            }
          }
    };

    var chart = new ApexCharts(document.querySelector("#chart-sales"), options);
    chart.render();
}

function onLoad() {
    salesChart();
};


document.addEventListener('DOMContentLoaded', function () {
    onLoad();
});
