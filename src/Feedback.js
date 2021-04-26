import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import {useState} from 'react'

const Feedback=() =>{
    const [rating,setRating]=useState(0);
const ratingChanged =(newRating) =>{
   
setRating(newRating);
    console.log(newRating);
}
return <div>
    <h1>Fill in the Form </h1>
    <ReactStars
    count={5}
    Value={1}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
  />,

  <h2>Rating : {rating}</h2>
</div>


}
export default Feedback;