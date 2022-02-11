import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function Title() {
    return (
     <div>
      <article>
      <h1>Welcome to Marathe ICE Cream Corner</h1>
      </article>
      <img src="../UI Images/DSC_0370.JPG" alt="abhi"/>
       <Carousel>
       <div>
           <img src='/UI Images/DSC_0370.JPG' alt="abhi1" />
           <p className="legend">Legend 1</p>
       </div>
       <div>
           <img src='/UI Images/DSC_0370.JPG' alt="abhi2" />
           <p className="legend">Legend 2</p>
       </div>
   </Carousel>

   </div>
    )
}
