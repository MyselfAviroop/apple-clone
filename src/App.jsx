import { useState } from 'react'
import Navbar from './components/navbar'
import Highlights from './components/Highlights'
import Hero from './components/Hero'
import Model from './components/Model'
import Features from './components/Features'
import Howitworks from './components/Howitworks'
import './App.css'
import * as Sentry from '@sentry/react'
import Footer from './components/Footer'
function App() {
 
 
  return (
    <>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <Howitworks/>
      <Footer/>
    </>
  )
}

export default Sentry.withProfiler(App) 
