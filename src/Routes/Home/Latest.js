import React, { useContext } from "react";
import { Header } from "../../Components";
import { AppData } from "../../Components/Data";
import { DateExt } from "../../Components";
import "../../App.css";

const Latest = () => {
  // const [useData]=useContext(AppData)
  // console.log(data);
  return (
    <div className="mainContainer">
      <div className="subContainer">
        <Header headerText={"The Latest"} />
        <div className="theLatest">
          <div className="theLatestbox">
            <img
              alt=""
              src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg"
              className="TheLatestImg"
            />
            <div className="flexProperty">
              <div className="bannerContent">
                <h2>Joshua Tree Overnight Adventure</h2>
                <p className="bannerMainContent">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
                <p>
                  <span className="genericDateTravel">Travel</span>
                  <DateExt dateExt=" / August 21 2017" />
                </p>
              </div>
            </div>
          </div>

          <div className="theLatestbox">
            <img
              alt=""
              src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg"
              className="TheLatestImg"
            />
            <div className="flexProperty">
              <div className="bannerContent">
                <h2>Joshua Tree Overnight Adventure</h2>
                <p className="bannerMainContent">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
                <p>
                  <span className="genericDateTravel">Travel</span>
                  <DateExt dateExt=" / August 21 2017" />
                </p>
              </div>
            </div>
          </div>

          <div className="theLatestbox">
            <img
              alt=""
              src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg"
              className="TheLatestImg"
            />
            <div className="flexProperty">
              <div className="bannerContent">
                <h2>Joshua Tree Overnight Adventure</h2>
                <p className="bannerMainContent">
                  Gujarat is vastly underrated and it’s a mystery to us why the
                  region isn’t more well-known as a tourist destination. It has
                  a plethora of temples and palaces
                </p>
                <p>
                  <span className="genericDateTravel">Travel</span>
                  <DateExt dateExt=" / August 21 2017" />
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Latest;
