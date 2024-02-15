import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function LinearChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          label:"Egresos",
          color:"red",
          curve: "linear",
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
        {
            label:"Ingresos",
            curve: "linear",
            data: [4, 4.75, 6, 5, -1.5, 7],
        },

      ]}
      width={600}
      height={400}
    />
  );
}