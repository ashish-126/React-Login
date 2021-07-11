import React from "react";
import Login from "./component/Login";
import {Switch, Route,Redirect} from "react-router-dom";
import Emp from "./component/Emp";

const App = ()=>{
  

    return (
        <>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/employeelist" component={Emp}/>
            <Redirect to="/"/>
          </Switch>
        
        </>
    );
} 

export default App;