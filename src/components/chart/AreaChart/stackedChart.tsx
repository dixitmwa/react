import { Box} from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';

const StackedChart = () => {

  const options = {
    chart: {
      type: 'area',
      stacked: true,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2024-02-10T00:00:00.000Z',
        '2024-02-11T00:00:00.000Z',
        '2024-02-12T00:00:00.000Z',
        '2024-02-13T00:00:00.000Z',
        '2024-02-14T00:00:00.000Z',
        '2024-02-15T00:00:00.000Z',
        '2024-02-16T00:00:00.000Z',
      ],
    },
    fill: {
      opacity: 0.5,
    },
  }

  const series = [
    {
      name: 'Series A',
      data: [30, 40, 45, 50, 49, 60, 70],
    },
    {
      name: 'Series B',
      data: [10, 20, 25, 30, 29, 40, 50],
    },
    {
      name: 'Series C',
      data: [20, 10, 15, 20, 19, 30, 40],
    },
  ]

  return (
    <Box id="chart">
      {/* <Typography variant='h6'>Working in chart...</Typography> */}
      <div>
        {/* <Chart options={options} series={series} type="area" height={350} /> */}
      </div>
    </Box>
  )
}

export default StackedChart