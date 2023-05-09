import React from "react";
// import FirstImage from './Images/img7.jpg'



function BlogBody(){
    return(
        <div className="mainContainer">
            <div className="subContainer">
            <div className="imageContainer">
                {/* <img alt="" src={FirstImage} ></img> */}
                <div className="firstImage"><span className="firstImageTextOne" >Title of vertical gallery</span><span className="firstImageTextTwo" >Travel / August 21 2017</span></div>
                <div className="secondImage"><span className="secondImageTextOne">The Sound cloud</span><span className="secondImageTextTwo">You loved is doomed</span><span className="secondImageTextThree">Travel / August 21 2017</span></div>
                <div className="thirdImage"><span className="thirdImageTextOne">The Sound cloud</span><span className="thirdImageTextTwo">You loved is doomed</span><span className="thirdImageTextThree">Travel / August 21 2017</span></div>
                

            </div>
            </div>
        </div>
    )
}

export default BlogBody;