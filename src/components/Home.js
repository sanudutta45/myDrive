import React,{useState,useEffect}from "react";
import {Link} from "react-router-dom";
import "../css/homestyle.css";
// import Auth from "./auth";
function Home(props){
  const [values,setValues]=useState({name:'',pass:''});
  // const [isAuth,setIsAuth] = useState(false)
  const changeHandler=(event=>{
  const {name,value}=event.target;
    setValues({...values,[name]:value})
  })
  useEffect(()=>{ localStorage.getItem("userLog") ? props.history.push("/profile") : alert("Welcome...! Use your email ID as your username")
  },[])
  const focusHandler=(event)=>{
    event.target.parentNode.parentNode.classList.add("focus")
    if (event.type==="blur"){
      if(event.target.value===""){
        event.target.parentNode.parentNode.classList.remove("focus")
      }
    }
  }
  const submitHandler =(event)=>{
    event.preventDefault();
    let data=JSON.parse(localStorage.getItem("userLogInInfo"))
    // if(localStorage.getItem("userLogInInfo")){
      if(data){
     data.map(item=>{
      if(item.email===values.name && item.pass===values.pass){
        props.getLogin(values)
          localStorage.setItem("userLog",1)
          // const val=JSON.stringify(item)
          localStorage.setItem("tempUser",JSON.stringify(item))
        }
      }
       )}
      //  else{
       localStorage.getItem("userLog") ? props.history.push("/profile") : alert("wrong username and password")
      //  }
  }
    return(
      <>
 <div className="tot-cont">
     <img className="wave" src="img/wave.png" alt="back-ground img" />
     <div className="container">
     <div className="img">
      <img src="img/bg.svg" alt="side-img"/>
    </div>
    <div className="login-content">
      <form className="home-form" onSubmit={submitHandler}>
        <img src="img/avatar.svg" alt="avtaar-img" />
        <h2 className="title">Welcome</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <h5>Username</h5>
            <input type="text" className="input"  name="name" value={values.name} onChange={changeHandler} onFocus={focusHandler} onBlur={focusHandler} />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            <h5>Password</h5>
            <input type="Password" className="input" name="pass" value={values.pass} onChange={changeHandler} onFocus={focusHandler} onBlur={focusHandler}/>
          </div>
        </div>
        <span className="pass-lost" onClick={()=>alert("Sorry we dont have this funtionality")}>Forget Password?</span>
        <input type="submit" className="btn" defaultValue="Login"/>
      </form>
      <div>
        <span className="register">Not Registered?</span>
        <span><Link className="crt_acc" to="/submission">Create Account</Link></span>
        {/* <div>{isMatched ? props.history.push('/profile') : {}} </div> */}
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default Home;