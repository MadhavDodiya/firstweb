import React from 'react'

export default function Amenities(props) {
  return (
    <>
      
    {/* Amenities section */}
    <div className='container-fluid pt-5' id='amenities'>
      <h1 className='text-center display-4'><b>Amenities</b></h1>
      <p className='text-center'>{props.t6}</p>
    </div>

    <div className='container pt-5'>
    <div className='row'>
      <div className='col-md-6 col-6 col-sm-12'> 
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
      <div className='col-md-6 col-12 col-sm-6' style={{height:"100px"}}> 
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
        <div className='col-md-12 mt-5'>
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

    </>
  )
}



