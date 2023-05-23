import React, {useContext} from 'react'
import { Header } from '../../Components'
import Advertisement from './Advertisement'
import "./home.style.css";
import "../../App.css"
import { AppData } from '../../Utility'
import { DateExt } from "../../Components";
import { useNavigate } from 'react-router-dom'

function TopPots() {
  const [data]= useContext(AppData)
  const navi = useNavigate(); 

  const handleImage=(d)=>{
    navi(`/${d.cat}/${d.id}`, {state: d})
  }
  return (
    <div className='TopPstsPar'>
     <Advertisement />
    <div className='topPostCon'>
        <div className='heading'>
        <Header headerText={"Top Posts"}/>

        </div>


        {
            data.filter((item)=>item.sp==="home-Toplist"
            ).map((d, index)=>(
        <div key={d.id}>
        <img onClick={()=>handleImage(d)}  alt='' className='topPostImg' src={d.img}/>
         <h2 className='h2Height'>{d.title}</h2>
         <p className='paraHeight'>
                  <span className="genericDateTravel">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
                </div>
  ))
        }


        {
                data.filter((item)=>item.sp==="home-ToplistA"
                ).map((d, index)=>(
            <div key={d.id}>
                <div className="spacer">
          <hr className="commonHr" />
        </div>
        <div className='TopPostsSmallCon'>
        <img onClick={()=>handleImage(d)}  alt='' className='topPostImgSmall' src={d.img}/>
         <div className='h4'>
         <h4 className='h3Height'>{d.title}</h4>
         <p className='paraHeightSmall'>
                  <span className="genericDateTravel">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
                </div>
              
        </div>

        </div>
                ))
}

        {/* <div className="spacer">
          <hr className="commonHr" />
        </div>
        <div className='TopPostsSmallCon'>
        <img alt='' className='topPostImgSmall' src='https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/aerial-view-of-banff-national-park-mark-newman.jpg?&targetx=-43&targety=0&imagewidth=786&imageheight=499&modelwidth=700&modelheight=500&backgroundcolor=09141B&orientation=0'/>
         <div className='h4'>
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
         <div className='h4'>
         <h4 className='h3Height'>Catch waves with an adventure guide</h4>
         <p className='paraHeightSmall'>
                  <span className="genericDateTravel">Travel</span>
                  <DateExt dateExt=" / August 21 2017" />
                </p>
                </div>
              
        </div> */}

    </div>
    </div>
  )
}

export default TopPots
