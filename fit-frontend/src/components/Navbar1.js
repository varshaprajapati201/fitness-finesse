import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Navbar1() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/signin')
    }
    const handleProfile=()=>{
        navigate('/profile')
    }
    const auth = localStorage.getItem('user');

    return (
        <div>
            <nav className="navbar navBar">
                <div className="container-fluid">
                    <a className="navbar-brand navbarEmoji" href="/">
                        <span className="navbarTitle">Fitness-Finesse</span>
                    </a>

                    <span>
                        {(auth === null) ? <Link to="/signin"> <button type="button" className="btn btn-danger navbarButton mx-2">Sign in</button></Link> : ""}
                        {(auth !== null) ? <Link to="/associateType" className="associateButton" > <button type="button" className="btn btn-warning navbarButton mx-3 ">Associate</button></Link> : ""}
                        


                        {(auth !== null) ?
                            <div className="dropdown">
                                <button type="button" className="btn profileButton"></button>
                                <div className="dropdown-content">
                                    <Link to="/faq">FAQ</Link>
                                <button type="button" className="btn navbarButton" onClick={handleProfile}>Profile</button>
                                <button type="button" className="btn navbarButton" onClick={handleLogout}>Logout</button>
                                </div>
                            </div> : ""
                        }
                        {(auth !== null) ? <span className="userName">{JSON.parse(auth).userName}</span>:""}

                    </span>
                </div>
            </nav>
        </div>
    )
}
