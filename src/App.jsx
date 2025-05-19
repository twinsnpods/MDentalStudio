import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainLoggo from './components/MainLoggo'
import Locationinfo from './components/LocationInfo'
import InfoPanel from './components/InfoPanel'
import Treatments from './components/Treatments'
import AboutUs from './components/AboutUs'
import WhyChoseUs from './components/WhyChoseUs'
import LatestReviews from './components/LatestReviews'
import LeaveAMessage from './components/LeaveAMessage'
import Footer from './components/Footer'
import SMedia from './components/SMedia'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'



function App() {

  return (
  <div>
    <Navbar/>
    <MainLoggo/>
    <Locationinfo />
    <InfoPanel/>
    <Treatments/>
    <AboutUs/>
    <WhyChoseUs/>
    <LatestReviews/>
    <LeaveAMessage/>
    <Footer/>
    <SMedia/>
  </div>
  )
}

export default App
