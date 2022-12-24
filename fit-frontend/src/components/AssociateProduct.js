import React from 'react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function AssociateProduct() {
    const [user, setUser] = useState({
        email: "",
        name: "",
        category: "",
        desc: ""

    })



    const navigate = useNavigate();



    let name, value;
    const auth = localStorage.getItem('user');
    const handleOnChange = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault();
        const { email, name, category, desc } = user;
        var rates = document.getElementsByName('category');
        var rate_value;
        if (document.getElementById('r1').checked) {
            rate_value = document.getElementById('r1').value;
          }
          if (document.getElementById('r2').checked) {
            rate_value = document.getElementById('r2').value;
          }
          if (document.getElementById('r3').checked) {
            rate_value = document.getElementById('r3').value;
          }
        console.log(rate_value)
        let result = await fetch("http://localhost:8000/registerProduct", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: JSON.parse(auth).email,
                name,
                category:rate_value,
                desc
            })
        });

        result = await result.json();
        if (!result.result) {
            navigate('/');
        }
        else
            alert(result.result);


    }



    return (
        <div>
            <div className="associatePage">

                <form method="POST">

                    <div className="AssociateProduct">


                        <div className="associatelogin2">
                            <div className="mb-3 associatesignin">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name Of Product*
                                    <div> <input type="text" className="as2" id="example" aria-describedby="emailHelp" name="associateName" name="name" placeholder="productName" onChange={handleOnChange} defaultValue={user.name} /></div>
                                    <div id="emailHelp" className="form-text">Maximum 22 Characters</div>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Select Category*
                                    <div className="as3" id="category">
                                        <input type="radio" id="r1" name="fav_language" value="equipment" className="mx-2" />
                                        <label htmlFor="html" className="my-2">EQUIPMENT (like dumbbell)</label><br />
                                        <input type="radio" id="r2" name="fav_language" value="food" className="mx-2" />
                                        <label htmlFor="css" className="my-2">FOOD (like Protein)</label><br />
                                        <input type="radio" id="r3" name="fav_language" value="accessories" className="mx-2" />
                                        <label htmlFor="javascript" className="my-2">ACCESSORIES (like shoes)</label>
                                    </div>
                                </label>
                            </div>
                            <div className="mb-3 associatesignin">
                                <label htmlFor="exampleInputEmail1" className="form-label addressinfo my-0">Description</label>
                                <div><textarea id="desc" cols="30" rows="8" className="as3" name="associateDescription" placeholder="description" name="desc" onChange={handleOnChange} defaultValue={user.desc}></textarea></div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-danger next2 my-1" onClick={postData}>Submit</button>

                    </div>

                </form>
            </div>
        </div>
    )
}
