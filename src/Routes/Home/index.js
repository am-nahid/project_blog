import React, { useContext } from "react";
import { Logo, TopNavigation } from "../../Components";
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import Store, { AppData } from "../../Utility/ContextStore/contextAPI";
import LatestStories from "./LatestStories";
import Advertisement from "./Advertisement";
import "../../App.css";
import TopPots from "./TopPsts";

const Home = () => {
  //  const [state] = useContext(AppData)
  // console.log(state);

  return (
    <>
      <Logo />
      <TopNavigation />
      <Store>
        <Banner />
        <Latest />
        <div className="mainContainer">
          <div className="subContainer">
            <div className="homeContainer">
              <LatestArticle />

              <TopPots />
            </div>
          </div>
        </div>
      </Store>
    </>
  );
};

export default Home;

// // Routes/Home/index.js
// import React, { useContext } from 'react';
// import { Logo, TopNavigation } from '../../Components';
// import Banner from './Banner';
// import Latest from './Latest';
// import LatestArticle from './LatestArticle';
// import { AppData } from '../../Components/Data';

// const Home = () => {
//   const [data] = useContext(AppData);

//   return (
//     <>
//       <Logo />
//       <TopNavigation />
//       <Banner />
//       <Latest />
//       <LatestArticle />
//       <div>
//         {data
//           .filter((item) => item.cat === 'Home')
//           .map((d) => (
//             <div key={d.id}>
//               <h1>{d.cat}</h1>
//               <img className="imgSizeOne" alt="" src={d.img} />
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default Home;

// const Home = () => {
//     return (
//       <AppData.Consumer>
//         {(data) => (
//           <>
//             <Logo />
//             <TopNavigation />
//             <Banner />
//             <Latest />
//             <LatestArticle data={data} />
//           </>
//         )}
//       </AppData.Consumer>
//     );
//   };

//   export default Home;
