
import axios from 'axios';
import { useState,useEffect } from 'react';
import {MDBTable,MDBTableHead,MDBTableBody,MDBRow,MDBCol,MDBContainer} from "mdb-react-ui-kit"
import ClipLoader from "react-spinners/ClipLoader";


export const DataService = () => {

  ////function for loader spinner
  const [loading,setloading]=useState(false);

   useEffect(()=>{
   setloading(true)
   setTimeout(()=>{
     setloading(false)
   },900)

 },[])
 

//fetching data from API endpoint using axios 
 const [data,setdata]=useState([]);
 useEffect(()=>{
  lodeuserdata();
 },[])
 const lodeuserdata=async ( )=>{
return await axios.get("http://ec2-3-20-29-91.us-east-2.compute.amazonaws.com:9001/dynamoDb/getAllOpenJobs")
.then((res)=>setdata(res.data))
.catch((err)=>console.log(err));
 };
//console.log("data",data)
//let obj=JSON.stringify(data)
//let obj={...data}
//console.log(obj);
//json1 ={...data};
//storing data as json abject
let obj =Object.assign({},data);
console.log(obj);

  return (
    
      loading === true ?    
        <ClipLoader
        color={'#36d7b7'}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : 
   
    //creating table and store the fetched data into bootstrap table
   <MDBContainer>
    <div style={{marginTop:"100px"}}>
      <MDBRow>
        <MDBCol size="12">
         <MDBTable>
          <MDBTableHead dark>
           <tr>
            <th scope='col'>S/N</th>
            <th scope='col'>Department</th>
            <th scope='col'>JobId</th>
            <th scope='col'>Location</th>
            <th scope='col'>Overview</th>
            <th scope='col'>Position</th>
            <th scope='col'>Responsibilities</th>
            <th scope='col'>Skills</th>
            <th scope='col'>workStatus</th>
           </tr>
          </MDBTableHead>
          {data.length === 0 ?(
           <MDBTableBody className='align-center mb-0'>
          <tr>
            <td colSpan={8} className="text-center mb-0">no data found</td>
          </tr>
           </MDBTableBody>
          ):(
            data.map((item, index)=>(
              <MDBTableBody key={index}>
                <tr>
                  <th scope='row'>{index + 1}</th>
                 
                  <td>{item.department}</td>
                  <td>{item.jobId}</td>
                  <td>{item.location}</td>
                  <td>{item.overview}</td>
                  <td>{item.position}</td>
                  <td>{item.responsibilities}</td>
                  <td>{item.skills}</td>
                  <td>{item.workstatus}</td>
                </tr>
              </MDBTableBody>
            ))
          )}
         </MDBTable>
        </MDBCol>
      </MDBRow>
    </div>
   </MDBContainer>
  )
            
}

export default DataService;
