import React,{useState} from 'react';
import DashedBoard from "./components/DashedBoard";
import Home from  '../src/components/Home';
import Submission from "../src/components/Submission"
import Profile from "./components/Profile";
import About from "./components/About"
import ProtectedRoute from "../src/components/protected.route";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
function App() {
  const [userData,setUser] = useState(null);
  const getLogin = (user)=>{
      setUser(user)
  }
  return (
    <>
    <Router>
    <Switch>
    <Route  exact path="/submission" component={Submission}/>
    <ProtectedRoute path="/dashboard" exact user={userData} component={DashedBoard}/>
    <ProtectedRoute path="/profile" exact user={userData} exact component={Profile}/>
    <Route exact path="/about" component={About}/>
    <Route  path="/" render = {(props)=><Home {...props} getLogin={getLogin}/>}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
