import React from 'react'
import { LocationCard } from "./locationCard.js";
import "./fair-goer.css";
import { HashLink } from 'react-router-hash-link';
import ALB from '../images/ALB.png';
import BC from '../images/BC.png';
import ON from '../images/ON.png';
import STUDIO from '../images/staples-studio.png';
import STARTUP from '../images/happy-startups.jpg';
import MARKER from '../images/location-marker.png';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const FairGoer = () => {
  return (
    <>
      <img src={STUDIO} id='studio'/>
      <div className="shade"></div>
      <img src={STARTUP} id='startup'/>
      <h1 className="title">Welcome to <span className="red">Staples Startup</span></h1>
      <Link to="./#location">
	        <Button> Find Location </Button>
	    </Link>
      <div className="mapDiv">
        <img src={BC} id='bc'/>
        <img src={ALB} id='alb'/>
        <img src={ON} id='on'/>
        <img src={MARKER} id='marker1'/>
        <img src={MARKER} id='marker2'/>
        <img src={MARKER} id='marker3'/>
        <img src={MARKER} id='marker4'/>
        <img src={MARKER} id='marker5'/>
        <img src={MARKER} id='marker6'/>
      </div>
      <h2 id='location' className="titleChooseLocation">Choose a Location</h2>
    </>
  )
}
