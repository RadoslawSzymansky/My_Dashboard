Chart.defaults.global.elements.point.borderColor = 'rgba(0,0,0,0.1)'
Chart.defaults.global.elements.point.pointStyle = "star"
Chart.defaults.global.elements.point.hoverRadius = 9;

var ctx = document.getElementById("mycanv").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
        datasets: [{

            label: 'Wykres z całego tygodnia:',
            data: [15339, 21345, 18483, 23250, 23489, 25091, 12100],
            backgroundColor: [
                'transparent',
            ],
            borderColor: [
                '#4B00FD',
            ],
            borderWidth: 5
        }]
    },
    options: {
        scales: {

        },
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        }


    }
});
Chart.defaults.global.title.display = false