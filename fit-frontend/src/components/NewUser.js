import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function NewUser() {

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    phoneNumber:"",
    dob:"",
    country: "",
    state: "",
    area: "",
    img:"",
    

})

const navigate = useNavigate();
  

    const handleCreatenext1=async()=>
    {
        const ass=document.querySelector('.createUser');
        ass.style.display="none"
        const ass2=document.querySelector('.createUser2');
        ass2.style.display="block"
        console.log("HELLO")
    }
     const handleCreatenext2=async()=>{
        const ass2=document.querySelector('.createUser2');
        ass2.style.display="none"
        const ass3=document.querySelector('.createUser3');
        ass3.style.display="block"
    }
    
    const handleCreateprev2=async()=>{
        const ass=document.querySelector('.createUser2');
        ass.style.display="none"
        const ass2=document.querySelector('.createUser');
        ass2.style.display="block"
    }
    
    const createPrev3=async()=>{
        const ass=document.querySelector('.createUser3');
        ass.style.display="none"
        const ass2=document.querySelector('.createUser2');
        ass2.style.display="block"
    }


    let name, value;
    const handleOnChange = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
      e.preventDefault();
      const { email, password, confirmPassword, userName, phoneNumber, dob, country, state, area, img } = user;

      let result = await fetch("http://localhost:8000/registerUser", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              email,
              password,
              confirmPassword,
              userName,
              phoneNumber,
              dob,
              country,
              state,
              area,
              img
         
          })
      });

      result=await result.json();
      if(!result.result){
      localStorage.setItem("user",JSON.stringify(result));
      navigate('/');
      }
      else
      alert(result.result);
  }


  return (
    

<div className="associatePage">
    <div>
    <form method="POST">


    <div className="createUser">
     <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label newUser" >Create Login Email-Id*</label>
    <div><input type="email" className="" id="" aria-describedby="emailHelp" onChange={handleOnChange} defaultValue={user.email} name="email"/></div>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1 asociatePassword" className="form-label">Password*</label>
   <div> <input type="password" className="" id="exampleInputPassword1" onChange={handleOnChange} defaultValue={user.password} name="password"/></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password*</label>
   <div> <input type="password" className="" id="exampleInputPassword2" onChange={handleOnChange} defaultValue={user.confirmPassword} name="confirmPassword"/></div>
     <button type="button" className="btn btn-danger createNext1" onClick={handleCreatenext1}>Next</button>
  </div>
  </div>



      <div className="createUser2">
        <div className="mb-3 associatesignin">
    <label htmlFor="exampleInputEmail1" className="form-label">User Name*
      <div>  <input type="text" className="as2" id="example" aria-describedby="emailHelp" onChange={handleOnChange} defaultValue={user.userName} name="userName"/></div>
    </label>
  </div>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number
     <div> +91 <input type="text" className="as2" id="exampleInputNam" aria-describedby="emailHelp" onChange={handleOnChange} defaultValue={user.phoneNumber} name="phoneNumber"/></div>
     <div id="emailHelp" className="form-text">*Give a valid phone Number as it will be used incase you forget your account</div>
    </label>
  </div>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">DATE OF BIRTH
       <div> <input type="text" className="as2" id="exampleInputNa" aria-describedby="emailHelp" onChange={handleOnChange} defaultValue={user.dob} name="dob"/></div>
       <div id="emailHelp" className="form-text">DD-MM-YY (LIKE 02-06-2002) </div>
    </label>

   <div> <button type="button" className="btn btn-warning next2" onClick={handleCreateprev2}>Prev</button>
    <button type="button" className="btn btn-danger next2" onClick={handleCreatenext2}>Next</button></div>
  </div>



  </div>
      <div className="createUser3">
        <div className="mb-3 associatesignin">
    <label htmlFor="exampleInputEmail1" className="form-label">Country*
      <div>  <input type="text" className="as2" id="exampleInputN" aria-describedby="emailHelp" onChange={handleOnChange} defaultValue={user.country} name="country" /></div>
    </label>
  </div>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label addressinfo">State*
     <div>   <input type="text" className="as2" id="exampleInput" aria-describedby="emailHelp" onChange={handleOnChange} defaultValue={user.state} name="state"/></div>
    </label>
  </div>

      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label addressinfo">Area*
       <div> <input type="text" className="as2" id="exampleInpu" aria-describedby="emailHelp" onChange={handleOnChange} defaultValue={user.area} name="area"/></div>
    </label>

    <div>
      <button type="button" className="btn btn-warning next2" onClick={createPrev3}>Prev</button>
        <button type="submit" className="btn btn-danger  next2" onClick={postData}>Submit</button></div>
  </div>
  </div>
  </form>
  </div>
</div>
  
 

  );
}
