import React from 'react'
import './home.css';
import { FaGear } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const Ahome = () => {
    return (
        <>
            <div class="mainall">
                <div class="firstdiv">
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='navv-icon'>
                            <FaGear  id="dropdown-basic"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Create New Admin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Change Credentials</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" className='log-out-btn'>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <center><img class="adminimg" width="100"
                        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
                        <p class="adcaption">Admin name</p>
                    </center>
                    <div class="navcontent">
                        <ul class="ad-table">
                            
                            <li><a class="nav-links-main" href="#">PAGES</a></li>
                            <Link className='nav-links' to={"/"}> Dashboard</Link>
                            <Link className='nav-links' to={"/"}>Analytics </Link>
                            <Link className='nav-links' to={"/"}>View Customers </Link>
                            <Link className='nav-links' to={"/"}> Orders</Link>
                            <Link className='nav-links' to={"/"}>Calender </Link>
                            <Link className='nav-links' to={"/"}>Contact Info </Link>

                            <li><a class="nav-links-main" href="#">CHARTS</a></li>
                            <Link className='nav-links' to={"/"}>Financial</Link>
                            <Link className='nav-links' to={"/PiechartRevenuee"}>Pie</Link>
                            <Link className='nav-links' to={"/"}>Bar</Link>
                            
                        </ul>
                    </div>
                </div>
                <div class="seconddiv">
                    <div class="sec-div-top">
                        <center><h2>Restaurant Management</h2></center>
                    </div>
                    <div class="sec-div-containt">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Ahome
