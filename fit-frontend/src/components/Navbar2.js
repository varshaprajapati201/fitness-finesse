import React from 'react'
import {

  
    Link
  } from "react-router-dom";

export default function Navbar2() {
  return (
      <div className="nave2">
            <div className="nav2">
            <Link to="/"> <button type="button" className="btn btn-light nav2btn">HOME</button></Link>
            <Link to="/store"> <button type="button" className="btn btn-light nav2btn" >STORE</button></Link>
            <Link to="/diet"> <button type="button" className="btn btn-light nav2btn" >DIET</button></Link>
            <Link to="/gyms">  <button type="button" className="btn btn-light nav2btn" >GYMS</button></Link>
    </div>
    </div>

  )
}
