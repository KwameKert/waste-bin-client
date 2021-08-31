import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DoughnutChart = (props) => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "",
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemMarginTop: 10,
      itemMarginBottom: 10,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        minPointSize: 20,
        innerSize: "65%",
        data: [
          {
            color: "#2012FE",
            name: "10 active",
            y: 150,
            z: 1,
          },
          {
            color: "#39B4F6",
            name: "2 inactive",
            y: 30,
            z: 1,
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DoughnutChart;
