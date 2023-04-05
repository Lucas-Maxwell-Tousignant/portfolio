import { useState } from 'react'
import Header from './assets/components/header/Header'
import Banner from './assets/components/banner/Banner'
import './App.css'
import About from './assets/components/about/About';

function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
    </div>
  )
}

export default App
