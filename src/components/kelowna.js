import React from 'react';
import { useState, useEffect } from "react";
import "./kelowna.css";
import { LocationCard } from "./locationCard.js";
import { CreatorNav } from "./creator/CreatorNav";
const axios = require('axios');


export const Kelowna = () => {

  const [backendData, setBackendData] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const images = ["https://pyxis.nymag.com/v1/imgs/186/c5b/4d0e282e5fdfb67fd60b54a4b2d6eeadd0-platinum-3776.2x.rhorizontal.w600.jpg",
"https://www.tradesparky.com/media/shared/productimages/schneider-electric-inst-materials/bc27993a-56a0-4e73-ae82-7ff625e3a590.png",
"https://images.prismic.io/wonderbly%2Fbbde378c-f309-4bb1-b598-906d6a356d07_feature_image1_desktop.gif?auto=format%2Ccompress&dpr=&w=1200&h=&fit=&crop=&q=35&gif-q=90",
"https://cdn.shopify.com/s/files/1/0579/6485/products/9346752002291_T1.jpg?v=1640170366",
"https://m.media-amazon.com/images/I/71TnDmxSe-L._AC_SY355_.jpg"
];

  useEffect(() => {
    const getData = async () => {
      const retval = "http://localhost:4000/product/63010ed6b24277ef4c666d93";
      try {
        const response = await axios.get(retval);
        setBackendData(response.data.products);
      } catch (err) {
        setBackendData([]);
      }
    };
    getData();
  }, []);

  return (
    <>
                  <CreatorNav />
      <h2 className="title">Explore products in your <span className="red">Staples Studio!</span></h2>
      <div className="locationCardContainer">

        {backendData.map((object, index) => {

          return (<LocationCard image={images[index]} name={object.name} key={index} description={object.description}></LocationCard>)
        
        })}
      </div>

    </>
  )
}
