import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


axios.defaults.baseURL="http://localhost:5500"

//axios.defaults.headers.common['Authorization']="Interceptor Token from ABHI";

axios.interceptors.request.use((request)=> {
  console.log('In the Interceptor');
  console.log(request)
  return request
})

axios.interceptors.response.use((response) =>{
console.log("Response Onterceptor");
console.log(response);
return response

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
