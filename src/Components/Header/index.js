import React from 'react';
import '../../App.css'

function Header({headerText}) {
  return (
    <>
    <h1><span className='genericHeader'>{headerText}</span></h1>
    <hr className='genericHeaderHr'/>
    </>
  )
}

export default Header
