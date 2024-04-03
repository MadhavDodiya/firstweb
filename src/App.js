/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import Amenities from './Page/Amenities';
import About from './Page/About';
import Gallary from './Page/Gallary';
import Booking from './Page/Booking';
import Package from './Page/Package';

function App() {
  return (
    <>
   
   <Home t1="THE MOUNT INN"  t2="Awarded Spa Resort and BnB in Greenville, New Jersey"/>

   <About t3="About Us" t4="Our Tradition Of Best Hospitality" t5="24 Years Of Warm Welcome..."/>

   <Amenities t6="Providing Hospitality the Correct Way"/>
<Gallary t7="Gallery"/>
<Package t8="Package"/>
<Booking t9="Ask Your Queries"/>

   





    </>
  );
}

export default App;
