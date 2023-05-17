import React, {useState, createContext} from 'react'
import Home from '../../Routes/Home/index'


export const AppData = createContext();
function Store(props) {
    const [data,setdata] =useState([
        {id:1, cat: "Home", img:"https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg", title:"Main Image"},
        {id:2, cat: "Home", img: "https://images.pexels.com/photos/1481096/pexels-photo-1481096.jpeg", title:"Sub Image" },
        {id:3, cat: "The Latest", img: "https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg", title:"latest" },
        {id:4, cat: "Latest Articles", img: "https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg", title:"Latest Articles" },
        {id:5, cat: "Bollywood", img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/peyto-lake-at-sunrise-brook-tyler-photography.jpg", title:"Top Post" },
        {id:6, cat: "", img: "", title:"" },
        {id:7, cat: "", img: "", title:"" },
        {id:8, cat: "", img: "", title:"" },
        {id:9, cat: "", img: "", title:"" },
        {id:10, cat: "", img: "", title:"" },
        {id:11, cat: "", img: "", title:"" },
        {id:12, cat: "", img: "", title:"" },
        {id:13, cat: "", img: "", title:"" },
         {id:14, cat: "", img: "", title:"" },
         {id:15, cat: "", img: "", title:"" },
         {id:16, cat: "", img: "", title:"" },
         {id:17, cat: "", img: "", title:"" },

    ])
    console.log(data);

  return (
    <AppData.Provider value={[data,setdata]} >
        {/* <Home/> */}
       {props.child}
    </AppData.Provider>
  )
}

export default Store;
// export {AppData};



// // Data/index.js
// import React, { useState, createContext } from 'react';

// export const AppDataContext = createContext();

// function Store() {
//   const [data, setData] = useState([
//     {id:1, cat: "Home", img:"https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg", title:"Main Image"},
//     {id:2, cat: "Home", img: "https://images.pexels.com/photos/1481096/pexels-photo-1481096.jpeg", title:"Sub Image" },
//     {id:3, cat: "The Latest", img: "https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg", title:"latest" },
//     {id:4, cat: "Latest Articles", img: "https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg", title:"Latest Articles" },
//     {id:5, cat: "Bollywood", img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/peyto-lake-at-sunrise-brook-tyler-photography.jpg", title:"Top Post" },
//     {id:6, cat: "", img: "", title:"" },
//     {id:7, cat: "", img: "", title:"" },
//     {id:8, cat: "", img: "", title:"" },
//     {id:9, cat: "", img: "", title:"" },
//     {id:10, cat: "", img: "", title:"" },
//     {id:11, cat: "", img: "", title:"" },
//     {id:12, cat: "", img: "", title:"" },
//     {id:13, cat: "", img: "", title:"" },
//      {id:14, cat: "", img: "", title:"" },
//      {id:15, cat: "", img: "", title:"" },
//      {id:16, cat: "", img: "", title:"" },
//      {id:17, cat: "", img: "", title:"" },

//   ]);

//   return (
//     <AppDataContext.Provider value={{ data, setData }}>
//       <Home />
//     </AppDataContext.Provider>
//   );
// }

// export default Store;

