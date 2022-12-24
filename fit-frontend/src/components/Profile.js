import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Profile() {
    const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const [dob,setDob]=useState("");
    const [country,setCountry]=useState("");
    const [state,setstate]=useState("");
    const [area,setArea]=useState("");
    const auth = localStorage.getItem('user');
    const navigate=useNavigate();
    const fun=async()=>{
    let emailid=JSON.parse(auth).email;
    let result = await fetch(`http://localhost:8000/getUser/${emailid}`);
    result=await result.json()
    if(result!==null)
    {
    setName(result.userName);
    setNumber(result.phoneNumber);
    setDob(result.dob);
    setCountry(result.country);
    setstate(result.state);
    setArea(result.area);
    }
}
useEffect(()=>{
    fun();
})
const handleOnClick=()=>{
  navigate('/updateProfile')
}
  return (
    <div className="profilePage">

        <div className="profileContainer">
            <div className="profileElements">
            <h1 className="profileHeading">YOUR&#160;&#160; PROFILE</h1>
            <div className="profileLabel">Username
            <input type="text" className="profileValue" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="profileLabel">Phone no.
            <input type="text" className="profileValue" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
            </div>
            <div className="profileLabel">Date of birth
            <input type="text" className="profileValue" value={dob} onChange={(e)=>{setDob(e.target.value)}}/>
            </div>
            <div className="profileLabel">Country
            <input type="text" className="profileValue" value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
            </div>
            <div className="profileLabel">State
            <input type="text" className="profileValue" value={state} onChange={(e)=>{setstate(e.target.value)}}/>
            </div>
            <div className="profileLabel">Area
            <input type="text" className="profileValue" value={area} onChange={(e)=>{setArea(e.target.value)}}/>
            </div>
            <button type="button" className="btn btn-info updateProfileButton" onClick={handleOnClick}>Update Profile</button>
            </div>
        </div>

        <div className="profileGym">
        <div className="weightLossSubSubHeading">Fitness-Centers-Associated</div>
        </div>

    </div>
  )
}
