import React from "react";
import "./Graph.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = ({title,data ,grid,dataKey}) => {


  return (
    <div>
         <h3 className='graph__title'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <XAxis dataKey="name"  stroke="#535CDA" />
        <Line type="monotone"  stroke="#535CDA"  dataKey={dataKey}/>
         {grid && <CartesianGrid strokeDasharray="3 3" />}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
