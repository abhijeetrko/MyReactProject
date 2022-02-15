import React from 'react'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import {useState} from 'react'
const arr =[0];
var avg=0;
const Feedback=() =>{
    const [rating,setRating]=useState(0);
    
const ratingChanged =(newRating) =>{
   
setRating(newRating);
arr.push(newRating);
    console.log(newRating);

    console.log(arr)

   // setRating(newRating);
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
  />

  <h2>Rating : {rating}</h2>
  <h3>Average Rating: {arr.reduce((acc,cur)=>{
      return ((avg=acc+cur))
  })}</h3>
  <h4>avg</h4>
  <h3>Tell Us Someting that we can improve so that going further</h3>
  <textarea></textarea>
  {arr.map((t)=>{
      console.log(t)
    return (<h1>{t}</h1>)

  })}
</div>


}
export default Feedback;