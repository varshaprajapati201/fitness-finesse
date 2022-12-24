import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfile() {
    const [userName,setuserName]=useState("");
    const [phoneNumber,setphoneNumber]=useState("");
    const [dob,setdob]=useState("");
    const [country,setCountry]=useState("");
    const [state,setstate]=useState("");
    const [area,setArea]=useState("");
    const [check,setCheck]=useState("");
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const [user, setUser] = useState({
        userName: "",
        phoneNumber:"",
        dob:"",
        country: "",
        state: "",
        area: "",
    })

    
    const fun=async()=>{
    let emailid=JSON.parse(auth).email;
    let result = await fetch(`http://localhost:8000/getUser/${emailid}`);
    result=await result.json()
    if(result!==null)
    {
    setuserName(result.userName);
    setphoneNumber(result.phoneNumber);
    setdob(result.dob);
    setCountry(result.country);
    setstate(result.state);
    setArea(result.area);
    setCheck(result.userName);

    // setUser({ ...user, [userName]: result.userName })
    // setUser({ ...user, [phoneNumber]: result.phoneNumber })
    // setUser({ ...user, [dob]: result.dob})
    // setUser({ ...user, [state]: result.state })
    // setUser({ ...user, [area]: result.area})
    // setUser({ ...user, [country]: result.country })
    
    }
}
useEffect(()=>{
    fun();
})


let name, value;
const handleOnChange = async (e) => {
    name = e.target.name;
     value = name === "img" ? e.target.files[0] : e.target.value;
    setUser({ ...user, [name]: value })
 
}


const handleOnClick=async(e)=>{
    let emailid=JSON.parse(auth).email;
    e.preventDefault();
    
    if(user.userName==="")
   user.userName=userName;

    if(user.phoneNumber==="")
   user.phoneNumber=phoneNumber;

    if(user.state==="")
   user.state=state;

    if(user.country==="")
   user.country=country;

    if(user.dob==="")
   user.dob=dob;

    if(user.area==="")
   user.area=area;

    

    let result = await fetch(`http://localhost:8000/updateUser/${emailid}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            userName:user.userName,
            phoneNumber:user.phoneNumber,
            dob:user.dob,
            country:user.country,
            state:user.state,
            area:user.area,
        })
       
    });
    
    alert("Login Again To See All Changes")
    navigate('/');

}
  return (
    <div className="profilePage">

        <div className="profileContainer">
            <div className="profileElements">
            <h1 className="profileHeading">UPDATE&#160;&#160; PROFILE</h1>
            <div className="profileLabel">Username
            <input type="text" className="profileValue2" name="userName" defaultValue={userName} onChange={handleOnChange}/>
            </div>
            <div className="profileLabel">Phone no.
            <input type="text" className="profileValue2" name="phoneNumber" defaultValue={phoneNumber} onChange={handleOnChange}/>
            </div>
            <div className="profileLabel">Date of birth
            <input type="text" className="profileValue2" name="dob" defaultValue={dob} onChange={handleOnChange}/>
            </div>
            <div className="profileLabel">Country
            <input type="text" className="profileValue2" name="country" defaultValue={country} onChange={handleOnChange}/>
            </div>
            <div className="profileLabel">State
            <input type="text" className="profileValue2" name="state" defaultValue={state} onChange={handleOnChange}/>
            </div>
            <div className="profileLabel">Area
            <input type="text" className="profileValue2" name="area" defaultValue={area} onChange={handleOnChange}/>
            </div>
            <button type="button" className="btn updateProfileButton2" onClick={handleOnClick}>Commit Changes</button>
            </div>
        </div>

    </div>
  )
}
