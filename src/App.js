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
                  <a className="nav-link active" href="#">About us</a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link" href="#">Amenities</a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link" href="#">Gallary</a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link" href="#">Package</a>
                </li>
                <li className="nav-item p-2">
                  <a className="nav-link" href="#">Booking</a>
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

      <div className='container-fluid p-5'>
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
    <div className='container-fluid pt-5'>
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
              <h1 className='clrw display-5 pt-5 '>Escape To The Luxury This Summer</h1>
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
    <div className='container-fluid pt-5'>
      <h1 className='text-center display-4'><b>Gallery</b></h1>
      <p className='text-center'>Peek Into Our World</p>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <img src='img/slide1-free-img.jpg' className=''/>
        </div>
      </div>
    </div>




    </>
  );
}

export default App;
