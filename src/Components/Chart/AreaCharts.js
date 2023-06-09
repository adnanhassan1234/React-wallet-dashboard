import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
    {
      name: "Sun",
      "uv": 120,
      pv: 220,
    },
    {
      name: "Mon",
      "uv": 160,
      pv: 113,
    },
    {
      name: "Tues",
      "uv": 180,
      pv: 140,
    },
    {
      name: "Wed",
      "uv": 110,
      pv: 98,
    },
    {
      name: "Thur",
      "uv": 120,
      pv: 113,
    },
  
    {
      name: "Fri",
      "uv": 160,
      pv: 196,
    },
  
    {
      name: "Sat",
      "uv": 150,
      pv: 55,
    },
  
  ];

const AreaCharts = () => {
  return (
    <>
      <ResponsiveContainer height={210} width="100%" className="line">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 4, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#732CF5"
            fill="#732CF5"
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#CD50E5"
            fill="#CD50E5"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaCharts;
