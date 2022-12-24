import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signin() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async()=>{
   
        let result = await fetch("http://localhost:8000/userLogin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({email,password})
    });

    result=await result.json();
  
    if(result.email)
    {
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/')
    }
    else
   alert(result.result)
}
    return (
        

            <div className="associatePage">
             
                <div className="signin">
                    <img src={require('../images/logo2.png')}  alt=""/>
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label emailLabel">Email address</label>
                    <div><input type ="email" className="" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div><input type ="password" className="" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
                    </div>

                    <button type ="submit" className="btn btn-danger signinSubmit" onClick={handleSubmit}>Login</button>
                   <Link to="/newUser"> <div><button type ="submit" className="btn createAccountButton">Create New Account</button></div></Link>
                </div>
          
            </div>

   
    )
}
