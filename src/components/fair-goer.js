import React from 'react'
import { LocationCard } from "./locationCard.js";
import "./fair-goer.css";

export const FairGoer = () => {
  return (
    <>
      <h1 className="title">Welcome to <span className="red">Staples Startup</span></h1>
      <h2 className="titleChooseLocation">Choose a Location</h2>
      <div className="locationCardDiv">
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
        <LocationCard className="LocationCard"></LocationCard>
      </div>
    </>
  )
}
