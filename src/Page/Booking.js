import React from 'react'

export default function Booking(props) {
  return (
    <>
      
    {/* form start */}
    <div className='container-fluid pt-5 pb-5' id='booking'>
      <div className='container' style={{height:"500px"}}>
        <div className='row'>
          <div className='col-md-6 rounded-3' style={{height:"550px",background:"#11202a"}}>
            <div className='container'>
              <h1 style={{color:"white",padding:"20px 0px"}}>Ask Your Queries</h1>
              <form>
              <input type='text' placeholder='Name*' required style={{width:"100%",padding:"10px 5px",outline:"none"}} className='mt-4'/>
              <input type='email' placeholder='Email*' required style={{width:"100%",padding:"10px 5px",outline:"none"}} className='mt-4'/>
              <textarea name='text' rows='5' placeholder='Massage' required style={{width:"100%",outline:"none",padding:"10px 5px"}} className='mt-4 mb-3'></textarea>
              <button type='submit' className='btn2'>
                SEND
              </button>
              </form>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='container-fluid p-5'>
              <center>
              <h1 className='p-5'>{props.t9}</h1>
              <p className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p className='pt-2 pb-3'>OR</p>
              <button className='btn3'>
                <b>MAKE A BOOKING</b>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* form End */}

    {/* footer start */}
    <div className='container-fluid mt-5' style={{background:"#11202a"}}>
      <center>
        <img src='/img/mount-inn-logo.png' className='p-5'/>
      </center>

      <nav className="navbar navbar-expand-sm navbar-dark">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item ">
          <a className="nav-link" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#amenities"> Amenities </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallary"> Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#package"> packages </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#booking"> booking</a>
        </li>
      </ul>
    </nav>

    <div className="container p-5">
      <center>
        <div className="row">
          <div className="col-md-4"></div>
          <div class="col-md-4 col-12 col-sm-12">
            <button className="btn4 m-1">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </button>
            <button className="btn4 m-1">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </button>
            <button className="btn4 m-1">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </button>
            <button className="btn4 m-1">
              <i className="fa fa-google" aria-hidden="true"></i>
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </center>
    </div>

    <div className="container">
      <center>
        <div className="row">
          <div className="col-md-4 col-12 col-12">
            <h3 className="text-light">+1 800 123 456</h3>
          </div>
          <div className="col-md-4 col-12 col-sm-12">
            <h3 className="text-light">info@domain.com</h3>
          </div>
          <div className="col-md-4 col-12 col-sm-12">
            <h3 className="text-light">34-D, Greenville, NJ</h3>
          </div>
        </div>
      </center>
    </div>

    <div className="container-fluid border-top border-dark p-5 mt-5">
      <h5 className="text-center text-light">Copyright © 2024 Hotel and BnB | Powered by Hotel and BnB</h5>
    </div>
    </div>
    {/* footer end */}
    </>
  )
}
