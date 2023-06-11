import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { Dropdown } from 'react-bootstrap';
import '../charts.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // plugins: {
  //   title: {
  //     display: true,
  //     text: 'Chart.js Bar Chart - Stacked',
  //   },
  // },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#DE43B5',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 150 })),
      backgroundColor: '#A848E8',
    },
  ],
};

export function BarChart() {
  return (
    <>
       <div className='bar-chart' style={{ height: '344px' }}>
        <Bar options={options} data={data}  />
      </div>
    </>
  )

}
