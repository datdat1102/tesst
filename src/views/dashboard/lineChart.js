import React from "react";
import ApexCharts from 'apexcharts';
import ReactApexChart from "react-apexcharts";

const LineChart = () => {

    const chartData = {
        chart: {
            type: "line",
            id: "apexchart-example",
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100]
                // colorStops: []
            }
        },
        legend: {
            // position: '',
            width: 400
            // position: 'top',
        },
        series: [
            {
                name: "Distance Traveled",
                type: "line",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
                name: "Time Traveled",
                type: "line",
                data: [10, 24, 35, 51, 88, 62, 76, 91, 200]
            }
        ]
    };

    return (
        <ReactApexChart options={chartData} series={chartData.series} type="line" height={350} width='1000' />
    );
}
export default LineChart;