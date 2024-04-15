import logo from './logo.svg';
import './App.css';
import './components/Home/home.css';
import PiechartRevenuee from './components/analytics/PiechartRevenuee';
import BarchartRevenuu from './components/analytics/BarchartRevenuu';
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from 'react-calendar';
import { Route, Routes } from 'react-router-dom';
import { FaGear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
function App() {
  const [date, setDate] = useState(new Date()); // Initialize state for selected date

  const onChange = (newDate) => {
    setDate(newDate); // Update selected date when calendar date changes
  };
  return (
    <>
      <div class="mainall">
        <div class="firstdiv">
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" className='navv-icon'>
              <FaGear id="dropdown-basic" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link className='nav-links ' to={"/ff"}> Create New Admin</Link>
              <Link className='nav-links ' to={"/sfds"}> Change Credentials</Link>
              <Link className='nav-links log-out-btn dropdown-item' role="button" tabindex="0" to={"/rr"}> Log Out</Link>
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
              <Link className='nav-links' to={"/Calendar"}>Calender </Link>
              <Link className='nav-links' to={"/"}>Contact Info </Link>
              <li><a class="nav-links-main" href="#">CHARTS</a></li>
              <Link className='nav-links' to={"/"}>Financial</Link>
              <Link className='nav-links' to={"/PiechartRevenuee"}>Pie</Link>
              <Link className='nav-links' to={"/BarchartRevenuu"}>Bar</Link>
            </ul>
          </div>
        </div>
        <div class="seconddiv">
          <div class="sec-div-top">
            <center><h2>Restaurant Management</h2></center>
          </div>
          <div class="sec-div-containt">
            <Routes>
              <Route path='/' />
              <Route path='/PiechartRevenuee' element={<PiechartRevenuee />} />
              <Route path='/BarchartRevenuu' element={<BarchartRevenuu />} />
              <Route path='/Calendar' element={<> <center>
                <h4 className='chtitle'>Calender</h4> </center><div style={{ width: '350px', marginLeft: 'auto',marginRight: 'auto' }}>
                  
                  <Calendar
                    onChange={onChange}
                    value={date}
                    calendarType="US" // Set calendar type (e.g., 'US' or 'ISO 8601')
                  />
                </div></>} />


            </Routes>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
