import React from 'react';
import {useState} from 'react'

 function Contact() {
     const style =
     {
        backgroundColor:'red'
     };
     const [flag,setflag]= useState(false);

     const toggle =() =>{
         setflag(true);
     }
    return (
        
        <div>
            <h3>Mobile No : 9423232796</h3>
            <h3>Mail : marathe.abhi@rediffmail.com</h3>
            <h2 style={style}>Test</h2>
            <button onClick={toggle()}>Click</button>
        </div>
    )
}
export default React.memo(Contact)