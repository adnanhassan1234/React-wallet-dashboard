import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


const data = [
    {
        name: "Tues",
        uv: 200,
        pv: 98,
        amt: 229,
      },
  {
    name: "Sun",
    uv: 40,
    pv: 240,
    amt: 240,
  },
  {
    name: "Mon",
    uv: 300,
    pv: 13,
    amt: 22,
  },
 
  {
    name: "Wed",
    uv: 20,
    pv: 80,
    amt: 200,
  },
];

const LineCharts = () => {
  return (
    <>
      <ResponsiveContainer height={163} width={420} className="line">
        <LineChart
          data={data}
          margin={{ top: 5, right: 44, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#D64DD5" strokeWidth={3} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineCharts;
