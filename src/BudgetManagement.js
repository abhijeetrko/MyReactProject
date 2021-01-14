import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


import React, { useState, useRef, useEffect } from 'react'
import {About} from './About'
const Details = () => {
   
    const [dayDetails, setdayDetails] = useState({ day: String, income: Number })
    const [loading, setLoading] = useState(false)
    const refContainer = useRef(null)
    var [week, setWeek] = useState([])


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdayDetails({ ...dayDetails, [name]: value });
    };

    useEffect(() => {
        
        refContainer.current.focus();
    },[]);

    //POST
    const saveData = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("Data is getting Saved")
         setWeek([...week, dayDetails])
        const response= await fetch("http://localhost:5500/savedata",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                day:dayDetails.day,
                income:dayDetails.income
            })
        })

        console.log(response.json())

        //Getting Updated Version
        getData(e)
    }


    //Get

    const getData= async (e) =>  {
        e.preventDefault();
        setLoading(true)
        console.log("Get data is Pressed")
        console.log(dayDetails.day);
        let dayyy=dayDetails.day;

      const response = await fetch("http://localhost:5500/"+dayDetails.day+"");
      response.json().then((data)=>{
          console.log(data)

          console.log(data[12])
            setWeek(data);



          
      });
      setLoading(false)

    

     
       

    }

    //Update
    const updateData= async (e) =>  {   
        e.preventDefault();
        console.log("update data is Pressed")
        console.log(dayDetails.day);
        let dayyy=dayDetails.day;

      const response = await fetch("http://localhost:5500/update/"+dayDetails.day+"",{
        method:'PATCH',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            income:dayDetails.income
        })
        
      });



      console.log(response.json())
      //For Getting Updated Version of Array
      getData(e)
       

       


      
    }

    //Delete
    const deleteData= async (e) =>  {
        e.preventDefault();
        console.log("Delete data is Pressed")
        console.log(dayDetails.day);
        let dayyy=dayDetails.day;

      const response = await fetch("http://localhost:5500/delete/"+dayDetails.day+"",{
          method:"Delete",
          headers:{'content-type': 'application/json'},

    
    
    
    
    });
      console.log(response.json())
      //For Getting Updated Version of Array
      getData(e)
       

    }


    return (
        <>

            <article>
                <form>

                    <h3>Post Your Details : Day And Respective Income</h3>
                    <div className='form-control'>
                        <label htmlFor="day">Name of Day:</label>
                        <input type="text" ref={refContainer} name="day" id="day" value={dayDetails.day} onChange={handleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="income">Daily Earnings:</label>
                        <input type="number" name="income" id="income" value={dayDetails.income} onChange={handleChange} ></input>
                    </div>
                    <button type='submit' className='btn' onClick={saveData} >
                        Save the Data
                    </button>
                    <button type='submit' className='btn' onClick={getData} >
                        Get the Data
                    </button>

                    <button type='submit' className='btn' onClick={updateData} >
                        Update The Data
                    </button>
                    <button type='submit' className='btn' onClick={deleteData} >
                        Delete The Data
                    </button>

      <about/>
                </form>
                
                <div align="center">
                    {loading && <Loader type="Circles" color="#00BFFF" height={80} width={80} />}
            
                    {week.map((person) => {

                        const { day, income } = person;
                        

                        

                        return (
                            <div className='item'>
                                <h4>{day}</h4>

                                <h4>{income}₹</h4>
                                <button type='submit' className='btn' value={day} onClick={deleteData} >
                                   Remove All Entries for This day
                             </button>

                            </div>
                        )





                    }


                    )


                    }

                </div>
            </article>
        </>

    )
}

export default Details