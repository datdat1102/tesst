import React from "react";
import ApexCharts from 'apexcharts';
import ReactApexChart from "react-apexcharts";

const ColunmChart = () => {

    const chartData = {
        chart: {
            type: "bar",
            id: "apexchart-example",
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
                type: "bar",
                data: [440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160]
            },
        ]
    };

    return (
        <ReactApexChart options={chartData} series={chartData.series} type="bar" height={350} />
    );
}
export default ColunmChart;