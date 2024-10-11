import { useState } from 'react'
import React from 'react'
import './App.css'
import { AsideComponent } from './Aside.jsx'
import { HeaderComponent } from './Header.jsx'
import { MainContent } from './main-content.jsx'

function App() {
  return (
    <>
    <AsideComponent/>
    <HeaderComponent/>
    <MainContent/>
    
    </>
  )
}
export default App
