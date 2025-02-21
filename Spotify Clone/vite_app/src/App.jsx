import { useState } from 'react'
import SideBar from './components/Sidebad'
import MainSection from './components/MainSection'
import './App.css'

function App() {

  return (
    <>
       <div className="main">
        <SideBar />
        <MainSection />
       </div>
    </>
  )
}

export default App
