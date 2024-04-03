/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';

function App() {
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
      <h1 className='display-1 text-center clrw pt-5'><b>THE MOUNT INN</b></h1>
      <h5 className='text-center clrw'>Awarded Spa Resort and BnB in Greenville, New Jersey</h5>
      <center>
      <button className='btn1 mt-5 mb-5'>
        <b>MAKE AN ENQUIRY</b>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
      </button>
      </center>
      </div>
      </div>

      {/* About section */}

      <div className='container-fluid p-5' id='about'>
        <h1 className='text-center display-4'><b>About Us</b></h1>
        <p className='text-center'>Our Tradition Of Best Hospitality</p>
      </div>

      <div className='container-fluid pb-5'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
            <div className='col-md-6'>
              <img src='img/hotel-bar.jpg' className='img-fluid'/>
            </div>
            <div className='col-md-6'>
              <div className='container p-3'>
                <h3 className='pt-4'>24 Years Of Warm Welcome...</h3>
                <p className='pt-3'>
                <b>Aliquam suscipit felis a arcu laoreet congue. Fusce porta euismod magna, eu vehicula tellus feugiat ac.</b>
                </p>
                <p className='pt-4'>
                Phasellus accumsan mauris sit amet urna pretium varius. Aliquam suscipit felis a arcu laoreet congue. Habeo nemore appellantur eu usu, usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria te. Et dicunt qualisque vel, eam ubique mucius docendi ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in, no mei alienum accusata.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    {/* About section end */}

    {/* Amenities section */}
    <div className='container-fluid pt-5' id='amenities'>
      <h1 className='text-center display-4'><b>Amenities</b></h1>
      <p className='text-center'>Providing Hospitality the Correct Way</p>
    </div>

    <div className='container pt-5'>
    <div className='row'>
      <div className='col-md-6'> 
        <div className='row'>
        <div className='col-md-3'>
          <img src='img/beer.svg' className='img-fluid' style={{height:"60px"}}/>
        </div>
        <div className='col-md-3'>
          <img src='img/car-rental.svg' className='img-fluid' style={{height:"60px"}}/>
        </div>
        <div className='col-md-3'>
          <img src='img/coffee.svg' className='img-fluid' style={{height:"60px"}}/>
        </div>
        <div className='col-md-3'>
          <img src='img/hair-dryer.svg' className='img-fluid' style={{height:"60px"}}/>
        </div>
        </div>
      </div>
      <div className='col-md-6' style={{height:"100px"}}> 
      <div className='row'>
        <div className='col-md-3'>
          <img src='img/reception.svg' className='img-fluid' style={{height:"60px"}}/>
        </div>
        <div className='col-md-3'>
          <img src='img/room-service.svg' className='img-fluid' style={{height:"60px"}}/>
        </div>
        <div className='col-md-3'>
          <img src='img/restaurant-icon.svg' className='img-fluid' style={{height:"60px"}}/>
        </div>
        <div className='col-md-3'>
          <img src='img/wifi-connection.svg' className='img-fluid' style={{height:"60px"}}/>
        </div>
        </div>
      </div>
    </div>
    </div>
    
    <div className='container-fluid pt-5 pb-5'>
      <div className='container'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-3' style={{height:"250px"}}>
              <div className='col-md-12 img1 rounded-2'>
              <div className='box1'>
                <h4 className='text-center' style={{paddingTop:"110px",color:"white"}}>Linens</h4>
              </div>
              </div>
            </div>

            <div className='col-md-3' style={{height:"250px"}}>
              <div className='col-md-12 img2 rounded-2'>
              <div className='box1'>
                <h4 className='text-center' style={{paddingTop:"110px",color:"white"}}>Toiletries</h4>
              </div>
              </div>
            </div>

            <div className='col-md-3' style={{height:"250px"}}>
              <div className='col-md-12 img3 rounded-2'>
              <div className='box1'>
                <h4 className='text-center' style={{paddingTop:"110px",color:"white"}}>Breakfast</h4>
              </div>
              </div>
            </div>

            <div className='col-md-3' style={{height:"250px"}}>
              <div className='col-md-12 img4 rounded-2'>
              <div className='box1'>
                <h4 className='text-center' style={{paddingTop:"110px",color:"white"}}>Swimming Pool</h4>
              </div>
              </div>
            </div>

          </div>
        </div>

        <div className='col-md-12 pt-4'>
          <div className='row'>
            <div className='col-md-3' style={{height:"250px"}}>
              <div className='col-md-12 img5 rounded-2'>
              <div className='box1'>
                <h4 className='text-center' style={{paddingTop:"110px",color:"white"}}>Wellness Spa</h4>
              </div>
              </div>
            </div>

            <div className='col-md-3' style={{height:"250px"}}>
              <div className='col-md-12 img6 rounded-2'>
              <div className='box1'>
                <h4 className='text-center' style={{paddingTop:"110px",color:"white"}}>Fine Dining</h4>
              </div>
              </div>
            </div>

            <div className='col-md-3' style={{height:"250px"}}>
              <div className='col-md-12 img7 rounded-2'>
              <div className='box1'>
                <h4 className='text-center' style={{paddingTop:"110px",color:"white"}}>In-house Bar</h4>
              </div>
              </div>
            </div>

            <div className='col-md-3' style={{height:"250px"}}>
              <div className='col-md-12 img8 rounded-2'>
              <div className='box1'>
                <h4 className='text-center' style={{paddingTop:"110px",color:"white"}}>Banquet Hall</h4>
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    {/* Amenities section end */}

    {/* background attachment */}
    <div className='bgimg2 p-0 mt-5'>
      <div className='box2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h1 className='clrw display-5 pt-5'>Escape To The Luxury This Summer</h1>
              <p className='clrw fs-5 pt-3'>Habeo nemore appellantur eu usu, usu putant adolescens consequuntur ei, mel tempor consulatu voluptaria te. Et dicunt qualisque vel, eam ubique mucius docendi ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in, no mei alienum accusata.</p>
            </div>
            <div className='col-md-4 p-5'>
              <button className='btn1 mt-5 ms-4'>
                <b>MAKE AN ENQUIRY</b>
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* background attachment end */}

    {/* Gallary start */}
    <div className='container-fluid pt-5' id='gallary'>
      <h1 className='text-center display-4'><b>Gallery</b></h1>
      <p className='text-center'>Peek Into Our World</p>
    </div>

    <div className='container pt-5 pb-5'>
      <div className='row'>
        <div className='col-md-3'>
          <img src='img/slide1-free-img.jpg' className='rounded-3' style={{height: "250px",width:"100%"}}/>
        </div>

        <div className='col-md-3'>
          <img src='img/slide2-free-img.jpg' className='rounded-3' style={{height: "250px",width:"100%"}}/>
        </div>

        <div className='col-md-3'>
          <img src='img/slide3-free-img.jpg' className='rounded-3' style={{height: "250px",width:"100%"}}/>
        </div>

        <div className='col-md-3'>
          <img src='img/slide5-free-img.jpg' className='rounded-3' style={{height: "250px",width:"100%"}}/>
        </div>
      </div>
    </div>
    {/* Gallary end */}

    {/* Package start */}
    <div className='container-fluid pt-5 pb-5' id='package'>
      <h1 className='text-center display-4'><b>Package</b></h1>
      <p className='text-center'>Choice Of Rooms</p>
    </div>

    <div className='container-fluid mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                <div className='col-md-6 p-0'>
                  <img src='img/hotel-single-room.jpg' style={{height:"250px",width:"100%"}}/>
                  <div className="container-fluid p-2" style={{background: "#11202a"}}>
                    <span className='clrw'>$ 125 / Night</span>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='container pt-4'>
                    <h3>Single Room</h3>
                    <h5 className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <div className='container-fluid pt-3'>
                      <img src='img/beer.svg' style={{height:"50px"}}/>
                      <img src='img/car-rental.svg' style={{height:"50px"}}/>
                      <img src='img/coffee.svg' style={{height:"50px"}}/>
                      <img src='img/hair-dryer.svg' style={{height:"50px"}}/>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                <div className='col-md-6 p-0'>
                  <img src='img/executive-suite-free-img.jpg' style={{height:"250px",width:"100%"}}/>
                  <div className="container-fluid p-2" style={{background: "#11202a"}}>
                    <span className='clrw'>$ 125 / Night</span>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='container pt-4'>
                    <h3>Executive Suite</h3>
                    <h5 className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <div className='container-fluid pt-3'>
                      <img src='img/beer.svg' style={{height:"50px"}}/>
                      <img src='img/car-rental.svg' style={{height:"50px"}}/>
                      <img src='img/coffee.svg' style={{height:"50px"}}/>
                      <img src='img/hair-dryer.svg' style={{height:"50px"}}/>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='container-fluid mt-5 mb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                <div className='col-md-6 p-0'>
                  <img src='img/double-room-free-img.jpg' style={{height:"250px",width:"100%"}}/>
                  <div className="container-fluid p-2" style={{background: "#11202a"}}>
                    <span className='clrw'>$ 125 / Night</span>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='container pt-4'>
                    <h3>Double Room</h3>
                    <h5 className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <div className='container-fluid pt-3'>
                      <img src='img/beer.svg' style={{height:"50px"}}/>
                      <img src='img/car-rental.svg' style={{height:"50px"}}/>
                      <img src='img/coffee.svg' style={{height:"50px"}}/>
                      <img src='img/hair-dryer.svg' style={{height:"50px"}}/>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                <div className='col-md-6 p-0'>
                  <img src='img/executive-suite-free-img.jpg' style={{height:"250px",width:"100%"}}/>
                  <div className="container-fluid p-2" style={{background: "#11202a"}}>
                    <span className='clrw'>$ 125 / Night</span>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='container pt-4'>
                    <h3>Duplex Suite</h3>
                    <h5 className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                    <div className='container-fluid pt-3'>
                      <img src='img/beer.svg' style={{height:"50px"}}/>
                      <img src='img/car-rental.svg' style={{height:"50px"}}/>
                      <img src='img/coffee.svg' style={{height:"50px"}}/>
                      <img src='img/hair-dryer.svg' style={{height:"50px"}}/>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* package end */}

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
              <h1 className='p-5'>Ask Your Queries</h1>
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
  );
}

export default App;
