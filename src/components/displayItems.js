import React from 'react';
import { useState, useEffect } from "react";
import "./displayItems.css"
const axios = require('axios');


export const DisplayItems = () => {

  const [backendData, setBackendData] = useState([]);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const retval = "http://localhost:4000/product/:63010eceacd79a6dda5d448f";
      try {
        const response = await axios.get(retval);
        setBackendData(response.data.ratings);
        console.log("data collected:", response.data.ratings);
      } catch (err) {
        setBackendData([]);
      }
    };
    getData();
  }, []);

  return (
    backendData.forEach((object) => {
      <h1>object[name]</h1>
    })
  )
}
