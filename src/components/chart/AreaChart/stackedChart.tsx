import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const StackedChart = () => {

  var chartOptions: any = {
    chart: {
      type: "area",
      height: 350,
      stacked: true,
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left'
    },

    xaxis: {
      labels: {
        formatter: function (value: any) {
          return value;
        }
      }
    }
  };
  const series: any = [
    {
      name: 'South',
      data: [30, 20, 45, 25, 49, 60, 20],
    },
    {
      name: 'North',
      data: [40, 20, 60, 30, 54, 40, 50]
    },
    {
      name: 'Central',
      data: [20, 10, 15, 20, 19, 30, 40]
    }
  ]
  return (
    <Box id="chart">
      <Chart options={chartOptions} series={series} height={350} />
    </Box>
  )
}

export default StackedChart