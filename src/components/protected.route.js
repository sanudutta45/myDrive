import React from "react";
import {Route, Redirect} from "react-router-dom"
// import Auth from "./components/auth"
const ProtectedRoute = ({component:Component,...rest})=>{
    return(
        <Route 
        {...rest} 
        render={props =>{
            if(rest.user  || localStorage.getItem("userLog")) {
                return <Component {...props} user={rest.user}/>;
            }
            else{
                return (
                    <Redirect to={{
                        pathname:"/",
                        state:{
                            from:props.location
                        }
                    }}/>
                )
            }
        }}
    />
    )

}

export default ProtectedRoute;