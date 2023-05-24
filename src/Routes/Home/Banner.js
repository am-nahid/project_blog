import React, { useContext } from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import { AppData } from '../../Utility'


function Banner() {
  const [data]= useContext(AppData)
  const navi = useNavigate(); 
  // console.log(data);
  const Filter1 = data.filter(
    (item) => item.sp === "home-ban"
  );
  const Filter2 = data.filter(
    (item) => item.sp === "home-banner" && item.id===2
  );


  const handleImage=(d)=>{
    navi(`/${d.cat}/${d.id}`, {state: d})
    // console.log(location);
  }

  return (
    <div className="mainContainer">
    <div className="subContainer">
   
    <div className="imageContainer">
      
{ Filter2.map((d)=>(
      <img key={d.id} onClick={()=>handleImage(d)} alt='No Network' className="firstImage" src={d.img}/>
))
}
{
Filter1.map((d)=>(

      <img key={d.id}  onClick={( )=> handleImage(d)} alt='No Network' className="secondImage" src={d.img}/>
  ))
    }
     
        </div>

    
    </div>
  

</div>
  )
}

export default Banner


//  {/* <img alt='No Network' className="thirdImage" src='https://images.pexels.com/photos/1481096/pexels-photo-1481096.jpeg'/> */}
//         {/* <div className="firstImage"><span className="firstImageTextOne" >Title of vertical gallery</span><span className="firstImageTextTwo" ><span className='genericDate'>Travel</span><Date date=" / August 21 2017"/></span></div>
//         <div className="secondImage"><span className="secondImageTextOne">The Sound cloud</span><span className="secondImageTextTwo">You loved is doomed</span><span className="secondImageTextThree"><span className='genericDate'>Travel</span><Date date=" / August 21 2017"/></span></div>
//         <div className="thirdImage"><span className="thirdImageTextOne">The Sound cloud</span><span className="thirdImageTextTwo">You loved is doomed</span><span className="thirdImageTextThree"><span className='genericDate'>Travel</span><Date date=" / August 21 2017"/></span></div> */}