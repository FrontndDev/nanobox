export const chartData = {
    labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11'],
    datasets: [
        {
            label: false,
            backgroundColor: (ctx) => {
                const canvas = ctx.chart.ctx;
                const gradient = canvas.createLinearGradient(0, 0, 0, 180);

                gradient.addColorStop(.5, 'rgba(36, 200, 188, 0.24)');
                gradient.addColorStop(1, 'rgba(36, 200, 188, 0)');

                return gradient;
            },
            fill: true,
            borderColor: '#24C8BC',
            borderWidth: 2,
            data: [8.900, 39.200, 40.100, 45.000, 28.123, 35.321, 25.253, 38.912, 34.999, 28.122, 55.432, 54.126, 54.731, 54.190, 54.019],
            pointBackgroundColor: '#262626',
            pointHoverBorderColor: 'rgb(96%, 96%, 96%, 1)',
            pointHoverBorderWidth: 4,
            pointHoverRadius: 8,
        },
    ]
}

export const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    lineTension: .5,

    datasets: {
        line: {
            pointRadius: 1, // disable for all `'line'` datasets
        },
    },
    plugins: {
        tooltip: {
            backgroundColor: '#000000',
            displayColors: false,
            bodyFont: {
                size: 12
            },
            callbacks: {
                label: context => {
                    return `$${context.raw}`
                },
                title: () => {
                    return ''
                },
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: false
            },
            border: {
                display: false
            },
            ticks: {
                font: {
                    size: 10 //this change the font size
                }
            }
        },
        y: {
            display: false,

        },
    },
}
