import React from 'react'
import { LocationCard } from "./locationCard.js";
import "./fair-goer.css";
import { HashLink } from 'react-router-hash-link';
import ALB from '../images/ALB.png';
import BC from '../images/BC.png';
import ON from '../images/ON.png';
import STUDIO from '../images/staples-studio.png';
import STARTUP from '../images/happy-startup.jpg';
import MARKER from '../images/location-marker.png';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const FairGoer = () => {
  return (
    <>
      <div className="header">
        <img src={STARTUP} id='startup'/>
        <img src={STUDIO} id='studio'/>
        <h1 className="title"><span className="white">Welcome to</span><span className="red">Staples Startup</span></h1>
      </div>
      <Link to="./#location">
	        <Button> Find Location </Button>
	    </Link>
      <div className="mapDiv">
        <img src={BC} id='bc'/>
        <img src={ALB} id='alb'/>
        <img src={ON} id='on'/>

        <a href="/calgary" id='63010eb7e4d31a1b84ce37b4'>
          <img src={MARKER} id='marker1'/>
        </a>
        <a href="/kelowna" id='63010eb7e4d31a1b84ce37b4'>
          <img src={MARKER} id='marker2'/>
        </a>
        <a href="/oakville" id='63010eb7e4d31a1b84ce37b4'>
          <img src={MARKER} id='marker3'/>
        </a>
        <a href="/ottawa" id='63010eb7e4d31a1b84ce37b4'>
          <img src={MARKER} id='marker4'/>
        </a>
        <a href="/corktown" id='63010eb7e4d31a1b84ce37b4'>
          <img src={MARKER} id='marker5'/>
        </a>
        <a href="/midtown" id='63010eb7e4d31a1b84ce37b4'>
          <img src={MARKER} id='marker6'/>
        </a>
        <a href="/university" id='63010eb7e4d31a1b84ce37b4'>
          <img src={MARKER} id='marker7'/>
        </a>
      </div>
      <h2 id='location' className="titleChooseLocation">Choose a Location</h2>
    </>
  )
}
