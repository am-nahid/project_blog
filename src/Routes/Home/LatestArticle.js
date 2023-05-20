import React from "react";
import { Header } from "../../Components";
import { useContext } from "react";
import { AppData } from "../../Utility/index";
import { DateExt } from "../../Components";
import "./home.style.css";
import "../../App.css";

const LatestArticle = () => {
  // const [data] = useContext(AppData)
  // if (!data || !Array.isArray(data)) {
  //   // Handle the case when data is undefined or not an array
  //   return null;
  // }

  // console.log(data);
  return (
    <div className="LatestArticlePar">
     {/* <div className="mainContainer"> */}
      {/* <div className="subContainer"> */}
        <Header headerText={"Latest Articles"} />
        <div className="spacer">
          <hr className="commonHr" />
        </div>
        <div className="LatestArtBlock">
          <div >
            <img
              src=" https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg"
              alt=""
              className="latestArtImg1"
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
        {/* {data.filter((item) =>)} */}

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
        </div>

        <div className="loadMore">

    <img src='./Images/arrow.png' alt=""/>
    <span className="arrowText">LOAD MORE</span>
    </div>

    <div className="LatestArtImgCon">
      <img alt="" className="LAIT" src=" https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg"/>
      <div className="text-overlay">
    <h2 className="LatestArtImgHead">Title of vertical gallery</h2>
    <p className="LatestArtDateImg">
              <span className="LatestArTravel">Travel</span>
              <span className="LatestArTravel"/>/ August 21 2017
            </p>
  </div>
              
    </div>

      
    </div>
   
  );
};

export default LatestArticle;
