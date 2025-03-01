import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'


import { Buttons } from './Components/Header.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <div className="header-button-container">
  <Buttons button_name="Home" />
  <Buttons button_name="News" />
  <Buttons button_name="Characters" />
  <Buttons button_name="Lore" />  
  <Buttons button_name="Regions"/>
  <Buttons button_name="TBD"/>
  </div>,
)
  

