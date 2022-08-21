import React, { useState } from 'react'
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
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export const FairGoer = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="header">
        <img src={STARTUP} id='startup'/>
        <img src={STUDIO} id='studio'/>
        <h1 className="title"><span className="white">WELCOME TO </span><span className="red">STAPLES STARTUP</span></h1>
        <Link to="./#location">
        <Button id="findLoc" variant="contained" startIcon={<SearchIcon/>}>
          Find a location
        </Button>
	      </Link>
      </div>
      <div className="mapDiv">
        <div className="BC">
          <img src={BC} id='bc'/>
          <a href="/kelowna" locationId='63010ed6b24277ef4c666d93'>
            <img src={MARKER} id='marker1' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
          </a>
          {isShown && (
            <div id="label1">
              Kelowna
            </div>
          )}
        </div>

        <div className="ALB">
          <img src={ALB} id='alb'/>
          <a href="/calgary" locationId='63010eb7e4d31a1b84ce37b4'>
            <img src={MARKER} id='marker2' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
          </a>
        </div>
        
        <div className="ON">
          <img src={ON} id='on'/>
          <a className="anchor" href="/oakville" locationId='63010eb7e4d31a1b84ce37b4'>
            <img src={MARKER} id='marker3' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
          </a>
          <a href="/ottawa" locationId='63010eb7e4d31a1b84ce37b4'>
            <img src={MARKER} id='marker4' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
          </a>
          <a href="/corktown" locationId='63010eb7e4d31a1b84ce37b4'>
            <img src={MARKER} id='marker5' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
          </a>
          <a href="/midtown" locationId='63010eb7e4d31a1b84ce37b4'>
            <img src={MARKER} id='marker6' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
          </a>
          <a href="/university" locationId='63010eb7e4d31a1b84ce37b4'>
            <img src={MARKER} id='marker7' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
          </a>
        </div>
      </div>
      <h2 id='location' className="titleChooseLocation">Choose a Location</h2>
      <div className='text'>
        <h3 id='info'>
          With a total of 7 Staples Studio locations nationwide, Staples Startup provides a unique
          opportunity to foster the growth of thousands of start-up companies and entrepreuneurs.
          Because at Staples, we believe that everyone deserves to have their ideas seen, and for innovation to grow.
        </h3>
      </div>
    </>
  )
}
