import Chart from "chart.js/auto"; // Uncaught Error: "category" is not a registered scale
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels,
    Title,
    Tooltip,
    Legend
);

ChartJS.defaults.font.family = "miceRegular"; // Chart 이내 글자체 통일
ChartJS.defaults.font.size = 16; // Chart 이내 글자체 통일
ChartJS.defaults.color = "black";


function StockGraph() {
    const today = new Date();
    const nextDate30 = new Date(today);
    nextDate30.setDate(today.getDate() + 30);
    const nextDate60 = new Date(today);
    nextDate60.setDate(today.getDate() + 60);
    const nextDate90 = new Date(today);
    nextDate90.setDate(today.getDate() + 90);

    const dateList = [today, nextDate30, nextDate60, nextDate90];
    const labels = dateList.map(date => {
        const month = date.getMonth() + 1; // Months are zero-based, so we add 1
        const day = date.getDate();
        return `${month}/${day}일`;
    });

    // const labels = [formattedDate, 'February', 'March', 'April'];

    const data = {
        labels,
        datasets: [
            {
                label: '판매계획', //그래프 분류되는 항목
                data: [100, 90, 80, 70], //실제 그려지는 데이터(Y축 숫자)
                borderColor: 'rgb(255, 99, 132)', //그래프 선 color
                backgroundColor: 'rgba(255, 99, 132, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
                // tension: 0.1
            },
            {
                label: '전년도 동기간',
                data: [100, 75, 50, 25],
                borderColor: 'rgb(53, 162, 235)', //실제 그려지는 데이터(Y축 숫자)
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                // tension: 0.5
            },
            {
                label: '최근 3개월',
                data: [100, 50, 0, 0],
                borderColor: 'rgb(75, 192, 192)', //실제 그려지는 데이터(Y축 숫자)
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                // tension: 0.1
            },
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                // text: 'Chart.js Line Chart',
            },
            datalabels: {
                display: true,
                align: 'top',
                // formatter: function(value, context) {
                //     return value; // You can customize the display format here
                // }
            },
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    display: false, // Hides the y-axis values
                },
                grid: {
                    display: false, // Hide the y-axis gridlines
                },
            },
            x: {
                grid: {
                    display: false, // Hide the y-axis gridlines
                },
            }
        }
    };

    return (
        <>
            <div className="flex w-[800px] h-[500px]">
                <Line options={options} data={data} />
            </div>
        </>
    );
}

export default StockGraph;