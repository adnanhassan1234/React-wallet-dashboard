import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",

    pv: 220,
  },
  {
    name: "Mon",

    pv: 113,
  },
  {
    name: "Tues",

    pv: 140,
  },
  {
    name: "Wed",

    pv: 98,
  },
  {
    name: "Thur",

    pv: 113,
  },

  {
    name: "Fri",

    pv: 196,
  },

  {
    name: "Sat",

    pv: 55,
  },
  {
    name: "Sun",

    pv: 140,
  },
  
];

const Barcharts = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={data} margin={{ top: 8, right: 4, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="pv"
            fill="#CD50E5"
            barSize={10}
            radius={[33, 33, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Barcharts;
