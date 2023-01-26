import React from 'react'
import DataService from './DataService'
import {useState} from 'react'
import './design.css';
import Swal from 'sweetalert2'


export const Data = () => {
  const [show,setshow]=useState(false);
  function handleclick(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Data Fetch Successfully!!',
    showConfirmButton: false,
    timer: 1500})
  }
  function handleclickh(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data hide Successfully!!',
      showConfirmButton: false,
      timer: 1000})
    }
function click() {

  setshow((Prevstate)=>!Prevstate ) 
}
 return (
     <>
      {
    show === true ? <DataService/> : ""
      }
    {
      show === true ? handleclick() : ""
    }
     <button className='btn1' onClick={()=>{click();handleclickh(); }} ><span>
     {
      show === true ? "Hide Data" : "Fetch Data" 
     
     }
     </span>
     </button>
     </>
    )
  }
export default Data