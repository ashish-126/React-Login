import React, { useState } from "react"; 
import { useHistory } from "react-router-dom";
import loginCred from "../login.json"; 
import {useCookies} from "react-cookie"

const Login = ()=>{

    const [userData ,setUserData] = useState({
        username:"",
        password:""
    })

    const [cookie,setCookie,removeCookie] = useCookies(['user']);
  
    const [errorData,setErrorData] = useState("");

    let history = useHistory();

    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setUserData((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        });
        setErrorData("");
    }
    

    const loginUser = (e)=>{
        e.preventDefault();
        loginCred.map((user)=>{
            if(userData.username === user.username  && userData.password === user.password){
                setErrorData(""); 
                history.push("/employeelist");
                setCookie('Name', user.username, { path: '/' });
                // setCookie('Password', user.password, { path: '/' });
                return user;
            }
            else{
                setErrorData("Please Enter Correct Credentials") ;
                return null;
            }
        });            
            
        
    }

    return (
        <>
            <div className = "main-div">
               <div className="child-div">
               <div className="container">
                <form onSubmit={loginUser}>
                    <div className="row">
                        <h1 >Login Page</h1>
                        {errorData!=="" ? <h2 style={{color:"red"}}>{errorData}</h2> : "" }
                        <input type="text" name="username" placeholder="Username" onChange={InputEvent} value={userData.name} autoComplete="off" required/>
                        <input type="password" name="password" placeholder="Password" onChange={InputEvent} value={userData.password} required/>
                        <br/>
                        <button type="submit" name="loginbtn" >Login</button>
                    </div>
                </form>
                </div>
               </div>
                
            </div>
        </>
    );
} 

export default Login;