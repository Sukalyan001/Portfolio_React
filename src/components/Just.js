import React,{useEffect,useState} from 'react';
import App from'../App';

 const Just = ()=>{
useEffect(()=>{
    alert("hii");
},[]);

   return(
    <App/>
   );

 };

 export default Just;