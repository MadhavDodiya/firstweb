import React from 'react'

export default function Gallary(props) {
  return (
    <>
      

    {/* Gallary start */}
    <div className='container-fluid pt-5' id='gallary'>
      <h1 className='text-center display-4'><b>{props.t7}</b></h1>
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
    </>
  )
}
