import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import axios from '/home/abhijeet/myworkspace/projects/react-projects/25-shop-Management/shopmanagement/node_modules/axios'


import React, { useState, useRef, useEffect } from 'react'
import Button from './Button'
const Details = () => {
   
    const [dayDetails, setdayDetails] = useState({ day: String, income: Number,date:Date })
    const [loading, setLoading] = useState(false)
    const [avg,setAvg]=useState(0);
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
                income:dayDetails.income,
                date:dayDetails.date    
            })
        })

        console.log(response.json())

        //Getting Updated Version
        getAllData()
        average(e)
    }


    //Get

    const getData= async (e) =>  {
        e.preventDefault();
        setLoading(true)
        console.log("Get data is Pressed")
        console.log(dayDetails.day);
        let dayyy=dayDetails.day;

      const response = await fetch("http://localhost:5500/"+dayDetails.date+"");
      response.json().then((data)=>{
          console.log(data)
            setWeek(data);



          
      });
      setLoading(false)

    

     
       

    }

    //Getting all data
    const getAllData = async () =>{
        const response = await fetch("http://localhost:5500/all");
      response.json().then((data)=>{
          console.log(data)
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

      const response = await fetch("http://localhost:5500/update/"+dayDetails.date+"",{
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

      const response = await fetch("http://localhost:5500/delete/"+dayDetails.date+"",{
          method:"Delete",
          headers:{'content-type': 'application/json'},

    
    
    
    
    });
      console.log(response.json())
      //For Getting Updated Version of Array
      getData(e)
      average(e)
      getAllData()
       

    }

    const average = async (e) =>{
        e.preventDefault();
        if (localStorage.getItem('token') == null){
            console.log("Token is not there")
        }
        else{

            console.log("Token is there");
        }
        /* const result */  /* await fetch("http://localhost:5500/average")
      console.log(result)
      result.json().then( (data) =>{

        console.log(data);
        setAvg(data);
      }) */
        axios.get("/average").then(
          (response)=>{
            console.log(response.data)
            setAvg(response.data)
          }
        )
      
        console.log("Ajsverage is Pressed")
    }


    const testAuth = async (e)=>{

        console.log("Token Check")
        e.preventDefault()
        let token=localStorage.getItem('token');
        console.log(token)
        console.log("Token")

      axios.post("http://localhost:5500/loginWithToken",{
            //...data
          }, {
            headers: {
              'Authorization':token
            }
          }).then(
            (response) => {
                console.log(response)
            }

          )
        console.log("testAuth")

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
                        <label htmlFor="date">Date:</label>
                        <input type="date" ref={refContainer} name="date" id="date" value={dayDetails.date} onChange={handleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="income">Daily Earnings:</label>
                        <input type="number" name="income" id="income" value={dayDetails.income} onChange={handleChange} ></input>
                    </div>
                    <h1>Average is {avg} Rs</h1>
                    
                    <Button name="Save Data" onclick={saveData}></Button>
                    <Button name="Get Data" onclick={getData}></Button>
                    <Button name="Update Data" onclick={updateData}></Button>
                    <Button name="Delete Data" onclick={deleteData}></Button>
                    <Button name="Average" onclick={average}></Button>

                    <Button name="testAuth" onclick={testAuth} ></Button>

      <about/>
                </form>
                
                <div align="center">
                    {loading && <Loader type="Circles" color="#00BFFF" height={80} width={80} />}
            
                    {week.map((person) => {

                        const { day, income,date } = person;
                        //console.log(date.toDateString)

                        

                        return (
                            <div className='item'>
                                <h3>{day}</h3>
                                <h4>{date}</h4>

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

export default React.memo(Details)