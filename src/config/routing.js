
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Main from "../screens/main";
import Signup from "../screens/signup";
import Signin from "../screens/signin";



export default function AppRouter() {
  return (
    <Router>
       <Routes>
         <Route path = "/" element = {<Signup/>}></Route>
         <Route path = "/Signin" element = {<Signin/>}></Route>
           <Route path = "/main" element = {<Main/>}></Route>
           </Routes> 
    </Router>
      
  );
}





