import React from 'react'

export default function Home(props) {
  return (
    <>

<div className='bgimg1'>
      <div className='bg'>
        <center>
          <img src='img/mount-inn-logo.png' style={{padding: "30px 0px"}}/>
        </center>
          <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center fs-5" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item p-2">
                  <a className="nav-link active" href="#about">About us</a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link" href="#amenities">Amenities</a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link" href="#gallary">Gallary</a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link" href="#package">Package</a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link" href="#booking">Booking</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <h1 className='display-1 text-center clrw pt-5'><b>{props.t1}</b></h1>
      <h5 className='text-center clrw'>{props.t2}</h5>
      <center>
      <button className='btn1 mt-5 mb-5'>
        <b>MAKE AN ENQUIRY</b>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </button>
      </center>
      </div>
      </div>
      
    </>
  )
}
