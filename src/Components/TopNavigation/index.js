import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

function TopNavigation() {
  return (
    <>
            <div className="flexProperty">
            <div className="navTag">
            <Link to={'/'} style={{textDecoration:"none"}}> <div  className="home" >Home</div></Link>
            <Link to={'/bollywood'} style={{textDecoration:"none"}}> <div className="home" >Bollywood</div></Link>
            <Link to={'/technology'} style={{textDecoration:"none"}}><div className="home" >Technology</div></Link>
            <Link to={'/hollywood'} style={{textDecoration:"none"}}> <div className="home" >Hollywood</div></Link>
            <Link to={'/fitness'} style={{textDecoration:"none"}}><div className="home" >Fitness</div></Link>
               <Link to={'/food'} style={{textDecoration:"none"}}> <div className="home" >Food</div></Link>
                </div>
            </div>

           <div className="flexProperty">  <hr className='firstHr'/> </div> 
    </>
  )
}

export default TopNavigation
