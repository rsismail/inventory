import React, { useState } from 'react'
import './App.css';
import LeftNav from './Component/LeftNav';
import CenterContent from './Component/CenterContent';
import RightContent from './Component/RightContent';

const App = () => {
  return (
    <div className='appContainer'>
      <LeftNav/>
      <CenterContent />
      {/* <RightContent /> */}
    </div>
  )
}

export default App