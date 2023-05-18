import React from 'react'
import { Logo } from '../../Components'
import "./commonPage.style.css"
import { DateExt } from "../../Components";

const CommonPage = () => {
  return (
    <div className='commonParent'>
        <div className='editLogo'>
            <div className='uniqueLogo'>
           <Logo />
           </div>
        </div>
        <div className='flexProperty'>
            <hr className='commonHr'/>
        </div>
        <div className='mainContainer'>
        <div className='commonContainer'>
            <div>
                <h1 className='theHeading'>The Heading</h1>
            </div>
            <div className='commonProfile'>
                <div className='commonPic1'>
        <img className='profileImg' src='./Images/profile.png' alt=""/>
        <div className='profileName'>
        <div>Dmitry Nozhenko</div>
        <DateExt dateExt={'Jan 28, 2019 · 10 min read'}/>
        </div>
        </div>
        <div className='commonPic2'>
            <img className='icons' alt='' src='https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png'/>
        </div>
        </div>
        <div className='imgCon'>
            <img className='MainImage' alt='' src='https://cdn.hashnode.com/res/hashnode/image/upload/v1622707353336/IUtMmqqZj.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'/>
        </div>

        <div className='descrip'>
            <p> The whole decription </p>
        </div>

        <div>

        </div>




        </div> 
    </div>
    </div>
  )
}

export default CommonPage
