import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/codeoholicsLogo.jpeg';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-[#F7F7F7]">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" className='lg:ml-5 w-20 h-20 ml-2' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item font-bold">
                                <Link className="nav-link " aria-current="page" to="/home">
                                    <font className="text-red-600 hover:text-red-800 text-lg">Home</font>
                                </Link>
                            </li>
                            <li className="nav-item font-bold">
                                <Link className="nav-link " aria-current="page" to="/about">
                                    <font className="text-red-600 hover:text-red-800 text-lg">About</font>
                                </Link>
                            </li>
                            <li className="nav-item font-bold">
                                <Link className="nav-link " aria-current="page" to="/events">
                                    <font className="text-red-600 hover:text-red-800 text-lg">Events</font>
                                </Link>
                            </li>
                            <li className="nav-item font-bold">
                                <Link className="nav-link " aria-current="page" to="/team">
                                    <font className="text-red-600 hover:text-red-800 text-lg">Team</font>
                                </Link>
                            </li>
                            {/* <li className="nav-item font-bold ">
                                <Link to="/announcements" >
                                    <font className="text-red-600 hover:text-red-800 text-lg">Announcements</font>
                                    <i className="fa-solid fa-bullhorn"></i>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;


