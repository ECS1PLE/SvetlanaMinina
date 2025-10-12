import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Path } from './components/Path'
import { Help } from './components/Help'
import { Format } from './components/Format'
import { Reviews } from './components/Reviews'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Path />
      <Help />
      <Format />
      <Reviews />
      <Contacts />
      <Footer />
    </>
  )
}
