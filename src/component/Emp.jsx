import React from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router";
import emp from "../Employee.json";


const Emp = ()=>{
  const [cookie,setCookie,removeCookie] = useCookies();
  
  const logOut = ()=>{
    removeCookie('Name');
    <Redirect to="/login"/>
  }
  
  if(cookie.Name===undefined){
    return <Redirect to="/login"/>
  }
  else{
    return (
      <>
        
        <h1>employeelist page {cookie.Name} {cookie.Password} </h1>
        <div>
          <div className="header">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone no</th>
              </tr>
            </thead>

            {emp.user.map((empData)=>{
               return (
                 <tr key = {empData.id}>
                   <td> {empData.name}</td>
                   <td> {empData.age}</td>
                   <td> {empData.email}</td>
                   <td> {empData.gender}</td>
                   <td> {empData.phoneNo}</td>
                 </tr>
               ); 
            })}
          </table>
          </div>
        </div>
        
        
        
        <button type="button" className="logoutbtn" onClick={logOut}>LogOut</button>
      </>
  );
  }  
  
} 

export default Emp;