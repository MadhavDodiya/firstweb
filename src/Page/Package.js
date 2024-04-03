import React from 'react'

export default function Package(props) {
  return (
    <>
      

    {/* Package start */}
    <div className='container-fluid pt-5 pb-5' id='package'>
      <h1 className='text-center display-4'><b>{props.t8}</b></h1>
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
    </>
  )
}
