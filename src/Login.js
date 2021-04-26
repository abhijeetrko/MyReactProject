import React,{useState}from 'react'

const Login = (e) => {
    const [isTokenIsThere,setIsTokenIsThere]=useState(true);
    const[userDetails,setUserDetails]=useState({ 

        username:'',
        password:'',
    });

const loginController= async (e)=>{
    console.log()
    e.preventDefault();
console.log("login controller")
const response =await fetch ("http://localhost:5500/login",{ 
    method: 'POST', 
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
     username:userDetails.username, 
     password: userDetails.password
    })
    


})
response.json().then((data) => {

    console.log(data);
    console.log(data.token)
    localStorage.setItem('token',data.token);
    setIsTokenIsThere(true);

}) 


}


const logout = (e) =>{
e.preventDefault();
console.log("Logout")
setIsTokenIsThere(false);
console.log(isTokenIsThere)
localStorage.removeItem('token');
}
const onChangeHandler=(e)=>{
    e.preventDefault();
   const name=e.target.name;
   const value=e.target.value;;
   setUserDetails({...userDetails,[name]:value});



    
}
    return (
        <>
        <form>
        <div className="form-control">
        <lable htmlFor="username">Username:</lable>
        <input type="text" name="username" onChange={onChangeHandler}></input>
        </div>
        <div className="form-control">
        <lable htmlFor="password">Password:</lable>
        <input type="password" name="password" onChange={onChangeHandler} ></input>
        </div>

        <div className="form-control">
            
        </div>

        <button className='btn' onClick={loginController}>Login</button>

        <button className='btn' onClick={logout}>Logout</button>

        <h1>{userDetails.username}</h1>
        <h2>{userDetails.password}</h2>
        <h1>{isTokenIsThere ? 'Token Is there' : 'No Token'}</h1>
        </form>
        
        </>


    )
}
export default React.memo(Login);