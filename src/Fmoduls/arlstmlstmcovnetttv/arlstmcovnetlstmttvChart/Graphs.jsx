import React from "react";
import { createUseStyles } from "react-jss";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

/** 
 * Stylesheet using react-jss
 */

const useStyles = createUseStyles(() => ({
  container: {
    color: "#fff",
    backgroundColor: "rgb(255, 255, 255)",
    padding: "1rem",
    transition: "0.3s ease-in-out",
    width: "100%",
    height: "400px",
    marginTop:"80px",
    marginLeft:"40px",
  },
}));

/** 
 * Define all colors for linear gradient with an id 
 */
const GradientColors = () => {
  return (
    <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
      {/* <stop offset="30%" stopColor="#8884d8" stopOpacity={0.4} />
      <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3} />
      <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2} /> */}
    </linearGradient>
  );
};

 const Graphs = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
     
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <GradientColors />
          </defs>
          <Tooltip
            itemStyle={{ color: "#fff", backgroundColor: "#0A1322" }}
            contentStyle={{ backgroundColor: "#0A1322" }}
          />
          <CartesianGrid strokeDasharray="4 4" stroke="#8884d8" opacity={0.4} />
          <XAxis dataKey="view" tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
          <YAxis tick={{ fill: "#B6BAC3" }} stroke="#EEEEEE" />
          <Area
            dataKey="name"
            type="monotone"
            stroke="green"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
          />
           <Area
            dataKey="name2"
            type="monotone"
            stroke="red"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
          />
           <Area
            dataKey="name3"
            type="monotone"
            stroke="blue"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
          />
          <Area
            dataKey="name4"
            type="monotone"
            stroke="black"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
          />
          <Area
            dataKey="name5"
            type="monotone"
            stroke="gray"
            strokeWidth={3}
            strokeOpacity={1}
            fill="url(#colorView)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graphs;