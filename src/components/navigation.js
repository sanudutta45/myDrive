import React, { Fragment } from "react";
import "../css/navigation.css"
import {NavLink,Link} from "react-router-dom";
function Navigation(){
    function myFunction(){
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
      const logDeleter = ()=>{
        localStorage.removeItem("userLog")
        localStorage.removeItem("tempUser")
      }
    return(
    <Fragment>
    <div className="topnav" id="myTopnav">
  <NavLink to="/profile" className="link-to" activeStyle={{
    backgroundColor: '#4CAF50',
    color: 'white'
  }} >Profile</NavLink>
  <NavLink to="/dashboard" className="link-to" activeStyle={{
    backgroundColor: '#4CAF50',
    color:'white'
  }}  >Dashed Board</NavLink>
  <NavLink to="/about" className="link-to" activeStyle={{
    backgroundColor: '#4CAF50',
    color: 'white'
  }} >About</NavLink>
  <Link to="/" className="logout link-to" onClick ={logDeleter} >Logout</Link>
  <span class="icon" onClick={myFunction}>
    <i class="fa fa-bars"></i>
  </span>
</div>
</Fragment>
    );
    
}

export default Navigation