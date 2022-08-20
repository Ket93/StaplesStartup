import React from "react";
import { CreatorNav } from "./CreatorNav";
import {
  Typography,
  Stack,
  Box,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useState, useEffect } from "react";
const axios = require("axios");

export const DataDisplay = () => {
  const id = "6300fa84a0664a69c52f660d";
  const [backendData, setBackendData] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const retval = "http://localhost:4000/rating/" + id;
      try {
        const response = await axios.get(retval);
        setBackendData(response.data.ratings);
        console.log("data collected:", response.data.ratings);
      } catch (err) {
        setBackendData([]);
      }
    };
    getData();

    const getAvgScore = async () => {
      const retval = "http://localhost:4000/rating/" + id + "/average-score";
      try {
        const response = await axios.get(retval);
        setAvgRating(response.data["average-score"]);
        console.log("data collected:", response.data["average-score"]);
      } catch (err) {
        setAvgRating(0);
      }
    };
    getAvgScore();
  }, []);

  function spFormat(unixTime) {
    var date = new Date(unixTime);
    var month = date.toLocaleString("en-US", { month: "numeric" });
    var day = date.toLocaleString("en-US", { day: "numeric" });
    return month + "/" + day;
  }

  function rollingAvg(backendData) {
    var avgSet = [];
    var count = 0;
    for (let i = 0; i < backendData.length; i++) {
      count += backendData[i].rating;
      avgSet.push({
        count: i + 1,
        average: Math.round((count / (i + 1)) * 100) / 100,
      });
    }

    console.log(avgSet);
    return avgSet;
  }

  return (
    <>
      <CreatorNav />
      <Stack
        direction="column"
        spacing={5}
        mx={2}
        my={5}
        textAlign="center"
        display="flex"
      >
        <Typography variant="h2">Project Analytics</Typography>
        <Box>
          <Typography variant="h5">Average rating:</Typography>
          <Rating value={avgRating} precision={0.1} readOnly />
          <Typography variant="h6">
            {Math.round(avgRating * 100) / 100} / 5 of {backendData.length}{" "}
            ratings
          </Typography>
        </Box>

        <Stack direction="column" spacing={1}>
          {backendData.map((node, i) =>
            node.comment ? (
              <Box sx={{ display: "flex", justifyContent: "center" }} key={i}>
                <Box sx={{ display: "inline-block", textAlign: "left" }}>
                  <Card sx={{ width: 700 }}>
                    <CardContent>
                      <Stack direction="column" spacing={1}>
                        <Typography>{node.comment}</Typography>
                        <Rating value={node.rating} precision={0.5} readOnly />
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            ) : null
          )}
        </Stack>
        <Stack direction="column" spacing={6}>
          <Box display="flex" textAlign={"center"} justifyContent={"center"}>
            <Box height={"350px"} width={"80%"} maxWidth={"700px"}>
              <Typography>Rolling Average Rating</Typography>
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  width={400}
                  height={400}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid />
                  <XAxis
                    type="number"
                    dataKey="count"
                    name="Review #"
                    unit=""
                    domain={["dataMin", "dataMax"]}
                    //   tickCount="10"
                  />
                  <YAxis
                    type="number"
                    dataKey="average"
                    //   name="weight"
                    unit="stars"
                    domain={[0, 5]}
                    tickCount="6"
                  />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Legend />
                  <Scatter
                    name="Rating"
                    data={rollingAvg(backendData)}
                    fill="#8884d8"
                    line
                    shape="circle"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </Box>
          </Box>
          <Box display="flex" textAlign={"center"} justifyContent={"center"}>
            <Box height={"350px"} width={"80%"} maxWidth={"700px"}>
              <Typography>Ratings over time</Typography>
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  width={400}
                  height={400}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid />
                  <XAxis
                    type="number"
                    dataKey="timestamp"
                    //   name="stature"
                    unit=""
                    domain={["dataMin", "dataMax"]}
                    //   tickCount="10"
                    tickFormatter={(unixTime) => spFormat(unixTime)}
                  />
                  <YAxis
                    type="number"
                    dataKey="rating"
                    //   name="weight"
                    unit="stars"
                    domain={[0, 5]}
                    tickCount="6"
                  />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Legend />
                  <Scatter
                    name="Rating"
                    data={backendData}
                    fill="#8884d8"
                    line
                    shape="circle"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
