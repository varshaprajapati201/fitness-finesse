
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function GymPage() {
  const [users, setUsers] = useState([]);
  const [area, setArea] = useState([]);
  const [stat, setStat] = useState([]);
  const [detail, setDetail] = useState({});
  var array = [];
  var array2 = [];

  useEffect(async () => {

    const res = await fetch(`http://localhost:8000/gyms`);
    const data = await res.json();
    setUsers(data);
    data.map((ele) => {
      if (array.includes(ele.area.trim()) === false) array.push(ele.area.trim());

      if (array2.includes(ele.state.trim()) === false) array2.push(ele.state.trim());
    })

    setArea(array);


    setStat(array2);


  }, [])

  const handleFilterClick = async () => {
    const Area = document.getElementById('AREA').value;
    const State = document.getElementById('STATE').value;

    const res = await fetch(`http://localhost:8000/gyms`);
    const data = await res.json();
    var array3 = [];

    if (Area.trim() !== "" && State.trim() === "") {
      data.map((ele) => {
        if ((ele.area.trim()) === (Area.trim())) array3.push(ele)


      })
    }

    if (Area.trim() === "" && State.trim() !== "") {
      data.map((ele) => {

        if ((ele.state.trim()) === (State.trim())) array3.push(ele);

      })
    }
    if (Area.trim() !== "" && State.trim() !== "") {
      data.map((ele) => {

        if ((ele.state.trim()) === (State.trim()) && (ele.area.trim()) === (Area.trim())) array3.push(ele);

      })
    }
    if (Area.trim() !== "" || State.trim() !== "")
      setUsers(array3);

  }

  const handleRemoveFilterClick = async () => {
    const rest = await fetch(`http://localhost:8000/gyms`);
    const data2 = await rest.json();
    setUsers(data2);
  }

  const handleCardClick = async (_id) => {

    const resu = await fetch(`http://localhost:8000/getValues/${_id}`);
    const data3 = await resu.json();
    var obj = {};
    obj = data3;
    setDetail(obj);
    
    const cards=document.getElementById('mainGymPage');
    cards.style.display="none"

    const bigCards=document.getElementById('BigCard');
    bigCards.style.display="block"

    const filters=document.getElementById('filterContainer');
    filters.style.display="none"

    const page=document.getElementById('GymPage');
    page.style.background="linear-gradient(black,green,black)"
  }

  const handleBigCardClose=()=>{
    const cards=document.getElementById('mainGymPage');
    cards.style.display="grid"

    const bigCards=document.getElementById('BigCard');
    bigCards.style.display="none"

    const filters=document.getElementById('filterContainer');
    filters.style.display="grid"


    const page=document.getElementById('GymPage');
    page.style.background="linear-gradient(black,gold,black,green,black)"
  }

  return (
    <div className="GymPage" id="GymPage">
      <div className="filterContainer" id="filterContainer">
        <div className="filterItemSearch">

          <select name="cars" id="STATE" className="inputSerachBar1">
            <option value="">--STATE--</option>
            {stat.map((ele) => {
              return (
                <option value={ele}>{ele}</option>
              )
            })}
          </select>
        </div>

        <div className="filterItemSearch">
          <select name="cars" id="AREA" className="inputSerachBar2">
            <option value="">--AREA--</option>
            {area.map((ele) => {
              return (
                <option value={ele}>{ele}</option>
              )
            })}
          </select>
        </div>

        <div className="filterItem">
          <button type="button" className="btn btn-info applyFilterButton" onClick={handleFilterClick}>Apply Filter</button>
          <button type="button" className="btn btn-danger removeFilter mx-1" onClick={handleRemoveFilterClick}>Remove Filters</button>
        </div>
      </div>
      <div className="mainGymPage" id="mainGymPage">
        {
          users.map((ele, idx) => {
            return (<button key={idx} id="gymCard" className="card gymCard " onClick={() => { handleCardClick(ele._id) }}>
              <div className="gymCardImageContainer"> 
                <img src={ele.img} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title gymCardTitle">{ele.userName}</h5>
                <div className="cardDetails">
                  <div className="cardDetail"><span className="carddetail">STATE:</span> {ele.state}</div>
                  <div className="cardDetail"><span className="carddetail2">AREA:</span> {ele.area}</div>
                  <div className="cardDetail"><span className="emoji">📞</span> &nbsp;{(ele.contact !== '-') ? ele.contact : "Unavailable"}</div>
                </div>
              </div>
            </button>

            )
          })}
      </div>
 
      <div className="card BigCard" id="BigCard">
        <div className="card-body">
        <button type="button" className="btn btn-danger bigCardButton" onClick={handleBigCardClose}>Close</button>
          <h5 className="card-title bigCardTitle">{detail.userName}</h5>
         <p className="bigCardText"><h1>About</h1>{detail.desc}</p>
        </div>
        <div className="bigCardDetail">
          <div className="bigCardDetailing"><h1>Address</h1>{detail.address}</div>
          <div className="bigCardDetailing"><h1>INFO</h1>Morning Time: {detail.mtime}am <br/>Evening Time: {detail.etime}pm <br/> <br/>Contact: {detail.contact}</div>
        </div>
      </div>


    </div>
  )
}
