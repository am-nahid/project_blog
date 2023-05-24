import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { Header } from "../../Components";
import { AppData } from '../../Utility'
import { DateExt } from "../../Components";
import "../../App.css";

const Latest = () => {
  const [data]=useContext(AppData)
  const navi = useNavigate(); 
  // console.log(data);

  const handleImage=(d)=>{
    navi(`/${d.cat}/${d.id}`, {state: d})
  }


  return (
    <div className="mainContainer">
      <div className="subContainer">
        <Header headerText={"The Latest"} />
        <div className="theLatest">
          {
            data.filter((item)=>item.sp==="home-latest" 
            ).map((d, index)=>(
          <div key={d.id} className="theLatestbox">
            <img
            onClick={()=>handleImage(d)} 
              alt=""
              src={d.img}
              className="TheLatestImg"
            />
            <div className="flexProperty">
              <div className="bannerContent">
                <h2>{d.title}</h2>
                <p className="bannerMainContent">
                  {d.Overview}
                </p>
                <p>
                  <span className="genericDateTravel">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>
          </div>

             ))
}
         


        </div>
      </div>
    </div>
  );
};

export default Latest;





//  {/* <div className="theLatestbox">
//             <img
//               alt=""
//               src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg"
//               className="TheLatestImg"
//             />
//             <div className="flexProperty">
//               <div className="bannerContent">
//                 <h2>Joshua Tree Overnight Adventure</h2>
//                 <p className="bannerMainContent">
//                   Gujarat is vastly underrated and it’s a mystery to us why the
//                   region isn’t more well-known as a tourist destination. It has
//                   a plethora of temples and palaces
//                 </p>
//                 <p>
//                   <span className="genericDateTravel">Travel</span>
//                   <DateExt dateExt=" / August 21 2017" />
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="theLatestbox">
//             <img
//               alt=""
//               src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg"
//               className="TheLatestImg"
//             />
//             <div className="flexProperty">
//               <div className="bannerContent">
//                 <h2>Joshua Tree Overnight Adventure</h2>
//                 <p className="bannerMainContent">
//                   Gujarat is vastly underrated and it’s a mystery to us why the
//                   region isn’t more well-known as a tourist destination. It has
//                   a plethora of temples and palaces
//                 </p>
//                 <p>
//                   <span className="genericDateTravel">Travel</span>
//                   <DateExt dateExt=" / August 21 2017" />
//                 </p>
//               </div>
//             </div>
//           </div> */}