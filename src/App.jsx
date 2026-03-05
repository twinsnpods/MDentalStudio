import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  const [count, setCount] = useState(0)

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
    <SMedia/>

   </div>
  )
}

export default App
