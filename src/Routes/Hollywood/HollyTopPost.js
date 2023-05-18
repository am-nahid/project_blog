import React from 'react'
import { Header, DateExt, Advertisement } from '../../Components'
import '../../App.css'


function HollyTopPost() {
    return (
      <div className='TopPostsPar'>
      
      <div className='topPostCon'>
          <div className='heading'>
          <Header headerText={"Top Posts"}/>
  
          </div>
          <div>
          <img alt='' className='topPostImg' src='https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/aerial-view-of-banff-national-park-mark-newman.jpg?&targetx=-43&targety=0&imagewidth=786&imageheight=499&modelwidth=700&modelheight=500&backgroundcolor=09141B&orientation=0'/>
           <h2 className='h2Height'>Catch waves with an adventure guide</h2>
           <p className='paraHeight'>
                    <span className="genericDateTravel">Travel</span>
                    <DateExt dateExt=" / August 21 2017" />
                  </p>
                  </div>
                  <div className="spacer">
            <hr className="commonHr" />
          </div>
          <div className='TopPostsSmallCon'>
          <img alt='' className='topPostImgSmall' src='https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/aerial-view-of-banff-national-park-mark-newman.jpg?&targetx=-43&targety=0&imagewidth=786&imageheight=499&modelwidth=700&modelheight=500&backgroundcolor=09141B&orientation=0'/>
           <div>
           <h4 className='h3Height'>Catch waves with an adventure guide</h4>
           <p className='paraHeightSmall'>
                    <span className="genericDateTravel">Travel</span>
                    <DateExt dateExt=" / August 21 2017" />
                  </p>
                  </div>
                
          </div>
         
  
          <div className="spacer">
            <hr className="commonHr" />
          </div>
          <div className='TopPostsSmallCon'>
          <img alt='' className='topPostImgSmall' src='https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/aerial-view-of-banff-national-park-mark-newman.jpg?&targetx=-43&targety=0&imagewidth=786&imageheight=499&modelwidth=700&modelheight=500&backgroundcolor=09141B&orientation=0'/>
           <div>
           <h4 className='h3Height'>Catch waves with an adventure guide</h4>
           <p className='paraHeightSmall'>
                    <span className="genericDateTravel">Travel</span>
                    <DateExt dateExt=" / August 21 2017" />
                  </p>
                  </div>
                
          </div>
  
          <div className="spacer">
            <hr className="commonHr" />
          </div>
          <div className='TopPostsSmallCon'>
          <img alt='' className='topPostImgSmall' src='https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/aerial-view-of-banff-national-park-mark-newman.jpg?&targetx=-43&targety=0&imagewidth=786&imageheight=499&modelwidth=700&modelheight=500&backgroundcolor=09141B&orientation=0'/>
           <div>
           <h4 className='h3Height'>Catch waves with an adventure guide</h4>
           <p className='paraHeightSmall'>
                    <span className="genericDateTravel">Travel</span>
                    <DateExt dateExt=" / August 21 2017" />
                  </p>
                  </div>
                
          </div>
  
      </div>
      <div className='TopPostAd'>
      <Advertisement />
      </div>
      </div>
    )
  }
export default HollyTopPost
