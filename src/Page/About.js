import React from 'react'

export default function About(props) {
  return (
    <>
      
      {/* About section */}

      <div className='container-fluid p-5' id='about'>
        <h1 className='text-center display-4'><b>{props.t3}</b></h1>
        <p className='text-center'>{props.t4}</p>
      </div>

      <div className='container-fluid pb-5'>
        <div className='container'>
          <div className='col-md-12 col-12 col-sm-12'>
            <div className='row'>
            <div className='col-md-6 col-12 col-sm-12'>
              <img src='img/hotel-bar.jpg' className='img-fluid'/>
            </div>
            <div className='col-md-6 col-12 col-sm-12'>
              <div className='container p-3'>
                <h3 className='pt-4'>{props.t5}</h3>
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
    </>
  )
}
