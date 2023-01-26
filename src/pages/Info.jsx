import React from 'react'
import DataService from './DataService'
import { useState } from 'react';
import './design.css';
import Swal from 'sweetalert2'
import infologo from '..//Image/info.jpg'


 export const Info = () => {
  const [show,setshow]=useState(false);
  //function for data fetch popuop notification
  function handleclick(){
  Swal.fire({
    position: 'top-right',
    icon: 'success',
    title: 'Data Fetch Successfully!!',
    showConfirmButton: false,
    timer: 800})
  }
  //function for data hide popuop notification
  function handleclickh(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data hide Successfully!!',
      showConfirmButton: false,
      timer: 1000})
    }
//function to toggle fetch and hide data button
function click() {

  setshow((Prevstate)=>!Prevstate )  
}

 return (
     <>
<div>
<img className='image1'src={infologo} alt='logo'/>
<h1>Employe Information</h1>

</div>

      {
    show === true ? <DataService/> : ""
      }
    {
      show === true ? handleclick() : ""
    }

  <div>
     <button className='btn1' onClick={()=>{click();handleclickh();}} ><span>
     {
      show === true ? "Hide Data" : "Fetch Data" 
     
     }
     </span>
     </button>
     </div>
 
     </>
 
    )
  }

  export default Info;
