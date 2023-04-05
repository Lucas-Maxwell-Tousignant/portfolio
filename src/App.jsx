import { useState } from 'react'
import Header from './assets/components/header/Header'
import Banner from './assets/components/banner/Banner'
import './App.css'
import About from './assets/components/about/About';
import Projects from "./assets/components/projects/Projects"
import Footer from "./assets/components/footer/Footer"

function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
