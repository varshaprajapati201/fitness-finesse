import React from 'react'

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';



export default function Associate() {



    const [user, setUser] = useState({
        email: "",
        userName: "",
        mtime: "",
        etime: "",
        country: "",
        state: "",
        area: "",
        address: "",
        contact: "",
        desc: "",
        img:""

    })



    const navigate = useNavigate();

    const handlenext1 = () => {
        const ass = document.querySelector('.associatelogin1');
        ass.style.display = "none"
        const ass2 = document.querySelector('.associatelogin2');
        ass2.style.display = "block"
    }
    const handlenext2 = () => {
        const ass2 = document.querySelector('.associatelogin2');
        ass2.style.display = "none"
        const ass3 = document.querySelector('.associatelogin3');
        ass3.style.display = "block"
    }
    const handleprev3 = () => {
        const ass2 = document.querySelector('.associatelogin3');
        ass2.style.display = "none"
        const ass3 = document.querySelector('.associatelogin2');
        ass3.style.display = "block"
    }

    let name, value;
    const auth = localStorage.getItem('user');
    const handleOnChange = async (e) => {
        name = e.target.name;
        const value = name === "img" ? e.target.files[0] : e.target.value;
        setUser({ ...user, [name]: value })
    }




    const postData = async (e) => {
        e.preventDefault();
        document.getElementById("submitButton").disabled = true;
        let formData = new FormData();
        formData.append("email", JSON.parse(auth).email);
        formData.append("name", user.userName);
        formData.append("mtime", user.mtime);
        formData.append("etime", user.etime);
        formData.append("country", user.country);
        formData.append("state", user.state);
        formData.append("area", user.area);
        formData.append("address", user.address);
        formData.append("contact", user.contact);
        formData.append("desc", user.desc);
        formData.append("img", user.img);
        

        let result = await fetch("http://localhost:8000/registerAssociate", {
            method: "POST",
            body: formData
        });

        result = await result.json();
        if (!result.result) {
            alert("Your Fitness Center is Successfully Associated!!")
            navigate('/');
        }
        else
            alert(result.result);


    }

    return (
        <div className="associatePage">

            <form method="POST">

                <div>
                    <div className="associatelogin1">
                        <div className="mb-3 associatesignin">
                            <label htmlFor="exampleInputEmail1" className="form-label">Create Login Email-Id*</label>
                            <div><input type="email" className="" id="emailid" aria-describedby="emailHelp" name="associateEmail" onChange={handleOnChange} defaultValue={user.email} name="email" placeholder="email" /></div>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1 asociatePassword" className="form-label">Password*</label>
                            <div> <input type="password" className="" id="exampleInputPassword1" name="associatePassword1" onChange={handleOnChange} defaultValue={user.password} name="password" placeholder="password" /></div>
                            <div id="emailHelp" className="form-text">Minimum 6 Characters</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password*</label>
                            <div> <input type="password" className="" id="exampleInputPassword2" name="associatePassword2" onChange={handleOnChange} defaultValue={user.cpassword} name="cpassword" placeholder="cpassword" /></div>
                            <button type="button" className="btn btn-danger next1" onClick={handlenext1}>Next</button>
                        </div>
                    </div>
                </div>


                <div className="associatelogin2">
                    <div className="mb-3 associatesignin">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name Of Fitness Center*
                            <div> <input type="text" className="as2" id="example" aria-describedby="emailHelp" onChange={handleOnChange} defaultValue={user.userName} name="userName" placeholder="Name" /></div>
                            <div id="emailHelp" className="form-text">Maximum 22 Characters</div>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Timings Morning
                            <div> <input type="text" className="as2" id="exampleInputName" aria-describedby="emailHelp"
                                name="associateMorning" onChange={handleOnChange} defaultValue={user.mtime} name="mtime" placeholder="mtime" /></div>
                            <div id="emailHelp" className="form-text">LIKE 6:00-10:00</div>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Timings Evening
                            <div> <input type="text" className="as2" id="exampleInput" aria-describedby="emailHelp"
                                name="associateEvening" onChange={handleOnChange} defaultValue={user.etime} name="etime" placeholder="etime" /></div>
                            <div id="emailHelp" className="form-text">LIKE 4:00-10:00</div>
                        </label>
                        <div id="emailHelp" className="form-text my-2">* If 24/7 Fitness Center give (Morning/Evening: 12-12) </div>
                        <div id="emailHelp" className="form-text my-2">* If Full Day Fitness Center give (Morning/Evening: 6-12 and 12-12)
                        </div>

                        <div>
                            <button type="button" className="btn btn-danger next2" onClick={handlenext2}>Next</button>
                        </div>
                    </div>
                </div>


                <div className="associatelogin3">
                    <div className="mb-3 associatesignin">
                        <label htmlFor="exampleInputEmail1" className="form-label">Country*
                            <div> <input type="text" className="as2" id="exampleIn" aria-describedby="emailHelp"
                                name="associateCountry" onChange={handleOnChange} defaultValue={user.country} name="country" placeholder="country" /></div>
                        </label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label addressinfo">State*
                            <div> <input type="text" className="as2" id="exampleI" aria-describedby="emailHelp" name="associateState" onChange={handleOnChange} defaultValue={user.state} name="state" placeholder="state" />
                            </div>
                        </label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label addressinfo">Area*
                            <div> <input type="text" className="as2" id="exampleInpu" aria-describedby="emailHelp" name="associateArea" onChange={handleOnChange} defaultValue={user.area} name="area" placeholder="area" />
                            </div>
                        </label>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label addressinfo">Address*
                                <div><textarea id="address" cols="30" rows="10" className="as3" defaultValue={user.address} onChange={handleOnChange} name="address" placeholder="address"></textarea></div>
                            </label>
                            <label htmlFor="exampleInputEmail1" className="form-label addressinfo">Contact No:*
                                <div>+91 <input type="tel" className="as2" id="exampleInp" aria-describedby="emailHelp"
                                    name="associateNumber" onChange={handleOnChange} defaultValue={user.contact} name="contact" placeholder="contact" /></div>
                            </label>
                            <label htmlFor="exampleInputEmail1" className="form-label addressinfo">Description / About Fitness Center
                                <div><textarea type="text" id="desc" cols="30" rows="10" className="as3" onChange={handleOnChange} name="desc" defaultValue={user.desc} placeholder="desc"></textarea></div>
                                <div id="emailHelp" className="form-text">*Limit: 500 Characters</div>
                                <label htmlFor="exampleInputEmail1" className="form-label addressinfo my-3">Upload Cover Pic*
                                <div className="mb-3">
                                    <input
                                        className="form-control associateImage my-1"
                                        type="file"
                                        accept="image/*"
                                        name="img"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                </label>
                                <div>
                                    <button type="button" className="btn btn-warning next2" onClick={handleprev3}>Prev</button>
                                    <button type="submit" className="btn btn-danger next2" id="submitButton" onClick={postData}>Submit</button>
                                </div>
                            </label>
                        </div>
                    </div>

                </div>




            </form>




        </div>
    )
}
