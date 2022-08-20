import React from 'react'
import { LocationCard } from "./locationCard.js";
import "./fair-goer.css";

export const FairGoer = () => {
  return (
    <>
      <h1 className="title">Choose a Location</h1>
      <div className="locationCardDiv">
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
      </div>
    </>
  )
}
