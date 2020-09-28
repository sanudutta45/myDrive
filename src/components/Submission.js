import React, { useState } from "react";
import "../css/submissionstyle.css";
// import {Redirect} from "react-router-dom"
import {Link} from "react-router-dom"
function Submission(props){
    const [user,setUser]=useState({name:'',email:"",reemail:'',pass:"",repass:"",number:"",location:"",isAgreed:false,status:"",hometown:"",desc:""});
    const changeHandler=(event=>{
        const{name,value,type,checked}=event.target;
        type==="checkbox"?setUser({...user,[name]:checked}):setUser({...user,[name]:value});
        }
        );
    const uploadHandler=(()=>{
        document.getElementById("upload-bttn").click();

    })
    const copyPasteHandler=()=>{
        document.getElementById("desc").style.display="block";
    }
    const submitHandler=(event)=>{
    //    localStorage.setItem(JSON.stringify(user),"userLogInInfo");
    event.preventDefault();
    if(user.email!==user.reemail){
        alert("Email doesnot match")

    }
    else if(user.repass!==user.pass){
        alert("Password doesn't match")
    }
    else{
        var existing = localStorage.getItem('userLogInInfo');
        let present=false;
        if(existing){
            let data = JSON.parse(existing);
            data.map((data)=>data.email===user.email ? present=true : present=false)
            if(present){
                alert("Email Already Exist")
            }
            else{
                data.push(user);
                localStorage.setItem("userLogInInfo",JSON.stringify(data));
            }
        }
        else{
            localStorage.setItem("userLogInInfo",JSON.stringify([user]));
        }
     props.history.push('/') 
    }
}

    return(
        <React.Fragment className="submission-form">
        <div className="banner">
        <h1>Submission Form</h1>
        <h4>Already Registered? <Link to="/" className="login-popup">Login Here</Link></h4>
        </div>
        <div className="form-container">
        <form className="form-start" onSubmit={submitHandler}>
            <div className="content">
                <h3>Name*</h3>
                <input type="text" 
                name="name" value={user.name} 
                onChange={changeHandler} 
                placeholder="Enter your full name" 
                required/>
            </div>
            <div className="content">
                <h3>Email ID*</h3>
                <input 
                type="email" 
                name="email" 
                value={user.email} 
                onChange={changeHandler} 
                placeholder="Enter your Email ID" 
                required />
            </div>
            <div className="content">
                <h3>Re-Type Email ID*</h3>
                <input 
                type="email" 
                name="reemail" 
                value={user.reemail} 
                onChange={changeHandler} 
                placeholder="Enter your Email ID" 
                required />
            </div>
            <div className="content">
                <h3>Create Password*</h3>
                <input 
                type="password" 
                name="pass" 
                value={user.pass} 
                onChange={changeHandler} 
                placeholder="Minimum 6 Character" />
            </div>
            <div className="content">
                <h3>Re-Type Password*</h3>
                <input 
                type="password" 
                name="repass" 
                value={user.repass} 
                onChange={changeHandler} 
                placeholder="Minimum 6 Character" />
            </div>
        <div className="content">
            <h3>Mobile Number*</h3>
            <input 
             type="text" 
            name="number" 
            value={user.number} 
            onChange={changeHandler} 
            placeholder="Where recruiter can contact you" />
        </div>
        <div className="content">
            <h3>Current Location*</h3>
            <input 
            type="text" 
            name="location" 
            value={user.location} 
            onChange={changeHandler} 
            placeholder="Your current location" />
        </div>
        <div className="content">
            <h3>Home Town</h3>
            <input 
            type="text" 
            name="hometown" 
            value={user.hometown} 
            onChange={changeHandler} 
            placeholder="Your Home Town" />
        </div>
        <div className="content">
            <h3>Maritial Status</h3>
            <label>
            <input 
            type="radio" 
            name="status" 
            value="Single"
            onChange={changeHandler}
            checked={user.status==="Single"}/>Single
            </label>
            <label>
            <input 
            type="radio" 
            name="status" 
            value="Married"
            onChange={changeHandler}
            checked={user.status==="Married"}/>Married
            </label>
        </div>
        <div className="content">
        <h3>Upload Resume</h3>
        <div className="upload">
        <input type="file" accept="doc txt" id="upload-bttn"/>
        <div><button type="button" id="bttn" onClick={uploadHandler}>Upload Resume</button></div>
        <div>-or-</div>
        <div className="raw-resume" onClick={copyPasteHandler}>copy-paste your resume here</div>
        </div>
        </div>
        <div className="content">
            <textarea id="desc" name="desc" value={user.resume} onChange={changeHandler} placeholder="Paste your Resume Here"/>
        </div>
        <div className="content">
            <input
              type="checkbox"
              name="isAgreed"
              onChange={changeHandler}
              checked={user.isAgreed}
            />
           <span>I agreed to the Terms and Conditions.</span>
        </div>
        <div className="content">
            <input className="bttn" type="submit" defaultValue="Submit"/>
        </div>
        </form>
        </div>
        </React.Fragment>
    );
}
export default Submission;