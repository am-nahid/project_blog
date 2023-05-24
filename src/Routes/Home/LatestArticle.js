import React from "react";
import { Header } from "../../Components";
import { useContext } from "react";
import { AppData } from "../../Utility/index";
import { DateExt } from "../../Components";
import { useNavigate } from 'react-router-dom'
import "./home.style.css";
import "../../App.css";

const LatestArticle = () => {
  const [data] = useContext(AppData)
  const navi = useNavigate(); 
 
  const handleImage=(d)=>{
    navi(`/${d.cat}/${d.id}`, {state: d})
  }
  // console.log(data);
  return (
    <div className="LatestArticlePar">
     {/* <div className="mainContainer"> */}
      {/* <div className="subContainer"> */}
        <Header headerText={"Latest Articles"} />
{
         data.filter((item)=>item.sp==="home-latestArt"
         ).map((d, index)=>(
<div key={d.id}>
        <div className="spacer">
          <hr className="commonHr" />
        </div>
        <div className="LatestArtBlock">
          <div >
            <img
              src={d.img}
              onClick={()=>handleImage(d)} 
              alt="No Network"
              className="latestArtImg1"
            />
          </div>
          <div>
            <h2>{d.title}</h2>
            <p className="LatestArtDetail">
             {d.title}
            </p>
            <p className="LatestArtDate">
              <span className="genericDateTravel">{d.cat}</span>
              <DateExt dateExt={`  / ${d.date} `}  />
            </p>
          </div>
        </div>
        </div>
  ))

}
        {/* <div className="spacer">
          <hr className="commonHr" />
        </div>
        <div className="LatestArtBlock">
          <div>
            <img
              src=" https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg"
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>Catch waves with an adventure guide</h2>
            <p className="LatestArtDetail">
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-
            </p>
            <p className="LatestArtDate">
              <span className="genericDateTravel">Travel</span>
              <DateExt dateExt=" / August 21 2017" />
            </p>
          </div>
        </div> */}

        {/* <div className="spacer">
          <hr className="commonHr" />
        </div>
        <div className="LatestArtBlock">
          <div>
            <img
              src=" https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg"
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>Catch waves with an adventure guide</h2>
            <p className="LatestArtDetail">
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-
            </p>
            <p className="LatestArtDate">
              <span className="genericDateTravel">Travel</span>
              <DateExt dateExt=" / August 21 2017" />
            </p>
          </div>
        </div>

        <div className="spacer">
          <hr className="commonHr" />
        </div>
        <div className="LatestArtBlock">
          <div>
            <img
              src=" https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg"
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>Catch waves with an adventure guide</h2>
            <p className="LatestArtDetail">
              Gujarat is vastly underrated and it’s a mystery to us why the
              region isn’t more well-
            </p>
            <p className="LatestArtDate">
              <span className="genericDateTravel">Travel</span>
              <DateExt dateExt=" / August 21 2017" />
            </p>
          </div>
        </div> */}

        <div className="loadMore">


          

    <img src='./Images/arrow.png' alt=""/>
    <span className="arrowText">LOAD MORE</span>
    </div>
{
   data.filter((item)=>item.sp==="home-latestBig",
   ).map((d, index)=>(
    <div key={d.id} className="LatestArtImgCon">
      <img onClick={()=>handleImage(d)}  alt="" className="LAIT" src={d.img}/>
      <div className="text-overlay">
    <h2 className="LatestArtImgHead">{d.title}</h2>
    <p className="LatestArtDateImg">
              <span className="LatestArTravel">{d.cat}</span>
              <span className="LatestArTravel"/>{`  / ${d.date} `}
            </p>
  </div>

              
    </div>
   ))
}

      
    </div>
   
  );
};

export default LatestArticle;


