import React, {useContext} from 'react'
import { Header, DateExt, Advertisement } from '../../Components'
import '../../App.css'
import { AppData } from '../../Utility'
import { useNavigate } from 'react-router-dom';


function HollyTopPost() {
  const [data] =useContext(AppData)

 
  const navi = useNavigate();
 
const handleImage=(d)=>{
 navi(`/Hollywood/${d.id}`, {state: d})

}
 

   const Filter = data.filter((item)=> item.cat==="Hollywood" && item.for==="TopList")

    return (
      <div className='TopPostsPar'>
      
      <div className='topPostCon'>

          <div className='heading'>
          <Header headerText={"Top Posts"}/>
  
          </div>
 
 {
   data.filter((item)=>item.cat==="Hollywood" && item.for==="TheTopList"
   ).map((d)=>(

  
          <div key={d.id}>
          <img   onClick={( )=> handleImage(d)} src={d.img} alt='' className='topPostImg' />
           <h2 className='h2Height'>{d.title}</h2>
           <p className='paraHeight'>
                    <span className="genericDateTravel">{d.cat}</span>
                    <DateExt dateExt={`  / ${d.date} `} />
                  </p>
                  </div>
   ))
}

{
  Filter.map((d)=>
              <div key={d.id}>

                  <div className="spacer">
            <hr className="commonHr" />
          </div>

          <div className='TopPostsSmallCon'>
          <img   onClick={( )=> handleImage(d)} src={d.img} alt='' className='topPostImgSmall' />
           <div className='h4'>
           <h4 className='h3Height'>{d.title}</h4>
           <p className='paraHeightSmall'>
                    <span className="genericDateTravel">{d.cat}</span>
                    <DateExt dateExt={`  / ${d.date} `} />
                  </p>
                  </div>
                
          </div>
         
  
          {/* <div className="spacer">
            <hr className="commonHr" />
          </div> */}

          {/* <div className='TopPostsSmallCon'>
          <img alt='' className='topPostImgSmall' src='https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/aerial-view-of-banff-national-park-mark-newman.jpg?&targetx=-43&targety=0&imagewidth=786&imageheight=499&modelwidth=700&modelheight=500&backgroundcolor=09141B&orientation=0'/>
           <div>
           <h4 className='h3Height'>Catch waves with an adventure guide</h4>
           <p className='paraHeightSmall'>
                    <span className="genericDateTravel">Travel</span>
                    <DateExt dateExt=" / August 21 2017" />
                  </p>
                  </div>
                
          </div> */}
  
          {/* <div className="spacer">
            <hr className="commonHr" />
          </div> */}

          {/* <div className='TopPostsSmallCon'>
          <img alt='' className='topPostImgSmall' src='https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/aerial-view-of-banff-national-park-mark-newman.jpg?&targetx=-43&targety=0&imagewidth=786&imageheight=499&modelwidth=700&modelheight=500&backgroundcolor=09141B&orientation=0'/>
           <div>
           <h4 className='h3Height'>Catch waves with an adventure guide</h4>
           <p className='paraHeightSmall'>
                    <span className="genericDateTravel">Travel</span>
                    <DateExt dateExt=" / August 21 2017" />
                  </p>
                  </div>
                
          </div> */}

          </div>
  )
  
}
      </div>

      <div className='TopPostAd'>
      <Advertisement />
      </div>
      </div>
    )
  }
export default HollyTopPost
