import React from 'react'
import '../../App.css'
import { Date } from '../../Components'

function Banner() {
  return (
    <div className="mainContainer">
    <div className="subContainer">
    <div className="imageContainer">
        {/* <img alt="" src={FirstImage} ></img> */}
        <div className="firstImage"><span className="firstImageTextOne" >Title of vertical gallery</span><span className="firstImageTextTwo" ><span className='genericDate'>Travel</span><Date date=" / August 21 2017"/></span></div>
        <div className="secondImage"><span className="secondImageTextOne">The Sound cloud</span><span className="secondImageTextTwo">You loved is doomed</span><span className="secondImageTextThree"><span className='genericDate'>Travel</span><Date date=" / August 21 2017"/></span></div>
        <div className="thirdImage"><span className="thirdImageTextOne">The Sound cloud</span><span className="thirdImageTextTwo">You loved is doomed</span><span className="thirdImageTextThree"><span className='genericDate'>Travel</span><Date date=" / August 21 2017"/></span></div>
        
    </div>
    
    </div>
  

</div>
  )
}

export default Banner


