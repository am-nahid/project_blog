import React, { useContext } from "react";
import { Header, DateExt, Advertisement } from '../../Components'
import '../../App.css'
import { AppData } from "../../Utility";
import { useNavigate } from 'react-router-dom';


function FitTopPost() {

  const [data] = useContext(AppData);

  const navi = useNavigate(); 

  const handleImage=(d)=>{
   navi(`/Fitness/${d.id}`, {state: d})
   console.log(d);
  }

  const Filter = data.filter(
    (item) => item.cat === "Fitness" && item.for === "TopList"
  );

    return (
      <div className='TopPostsPar'>
      
      <div className='topPostCon'>
          <div className='heading'>
          <Header headerText={"Top Posts"}/>
  
          </div>

          {data
          .filter(
            (item) => item.cat==="Fitness" && item.for === "TheTopList"
          )
          .map((d) => (
            <div key={d.id}>
              <img  onClick={( )=> handleImage(d)} alt="" className="topPostImg" src={d.img} />
              <h2 className="h2Height">{d.title}</h2>
              <p className="paraHeight">
                <span className="genericDateTravel">{d.cat}</span>
                <DateExt dateExt={`  / ${d.date} `} />
              </p>
            </div>
          ))}

{Filter.map((d) => (
  <div key={d.id}>
<div className="spacer">
              <hr className="commonHr" />
            </div>

            <div className="TopPostsSmallCon">
              <img  onClick={( )=> handleImage(d)} src={d.img} alt="" className="topPostImgSmall" />
              <div className="h4">
                <h4 className="h3Height">{d.title}</h4>
                <p className="paraHeightSmall">
                  <span className="genericDateTravel">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>


</div>
          ))
          }



  
  
      </div>
      <div className='TopPostAd'>
      <Advertisement />
      </div>
      </div>
    )
  }
export default FitTopPost
