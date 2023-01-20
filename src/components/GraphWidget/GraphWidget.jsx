import React, { useEffect, useMemo } from "react";
import "./GraphWidget.css";
import Graph from "./Graph/Graph";
import { data } from "../../graphData";
import { useState } from "react";
import axios from "axios";

const GraphWidget = () => {
  const Month = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jly",
      "Aug",
      "Sep",
      "Aug",
      "Nov",
      "Dec",
    ],
    []
  );

  const [graphData, setGraphData] = useState();

  useEffect(() => {
    const getStatus = async () => {
      try {
        const res = await axios.get("user/status", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJjMzQ4ZGZhYmQ1MzYxYzMxYzJhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjE5NzMzMSwiZXhwIjoxNjcyNDU2NTMxfQ.t4ct6ph_HL4rNsC0Sijj-Yu701Wp-nc4eu1BRZEtCfo",
          },
        });

        // const statsList = res.data.sort(function (a, b) {
        //   return a._id - b._id;
        // });
        // statsList.map((item) =>
        //   setUserStats((prev) => [
        //     ...prev,
        //     { name: Month[item._id - 1], "New User": item.total },
        //   ])
        // );

        // res.data.map((user) =>
        //   setGraphData((prev) => [
        //     ...prev,
        //     { name: Month[user._id - 1], "Total User": user.total },
        //   ])
        // );
      } catch (err) {
        console.log(err);
      }
    };
    getStatus();
  }, []);

  console.log(graphData);

  return (
    <div className="graphwidget">
      <div className="Graph">
        <Graph
          data={data}
          title="User Analytics"
          dataKey="activeuser"
          grid={"true"}
        />
      </div>
    </div>
  );
};

export default GraphWidget;
