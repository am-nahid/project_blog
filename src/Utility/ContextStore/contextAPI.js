import React, {useState, createContext} from 'react'
import Home from '../../Routes/Home/index'


export const AppData = createContext();
function Store(props) {
    const [data,setdata] =useState([
        {id:1, cat: "Home", img:"https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg", title:"Main Image"},
        {id:2, cat: "Home", img: "https://images.pexels.com/photos/1481096/pexels-photo-1481096.jpeg", title:"Sub Image" },
        {id:3, cat: "The Latest", img: "https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg", title:"latest" },
        {id:4, cat: "Latest Articles", img: "https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg", title:"Latest Articles" },
        {id:5, cat: "Hollywood", img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A7SobaUTvb6d5Z3dpOhFxPG0RQf.jpg", title:"Ant-Man and the Wasp: Quantumania", Overview: "When it comes to their Marvel properties, there’s this slightly morbid insistence by Disney to tie every teeny tiny detail of previous movies, television shows, and character arcs together in obsessive fashion. It’s becoming such an uncontrollable urge by the studio to engage in this behavior that the cause-and-effect is resulting in disasters like “Eternals,” “Thor: Love and Thunder,” and now, “Ant-Man and the Wasp: Quantumania.”    Trying too hard to force a non-story into the already lame Ant-Man mythology, the film reunites superhero partners Scott Lang (Paul Rudd) and Hope Van Dyne (Evangeline Lilly) as Ant-Man and the Wasp. The pair find themselves thrust into the dangerous Quantum Realm along with Hope’s parents Hank Pym (Michael Douglas) and Janet Van Dyne (Michelle Pfeiffer), along with Scott’s teenage daughter, Cassie (Kathryn Newton). As they explore the unusual terrain and alien society filled with strange creatures, Janet reveals that she didn’t quite tell the group everything about the three decades she spent trapped in the realm. Facing new dangers from supervillan Kang the Conquerer (Jonathan Majors), the family must unite to stop a worldwide disaster."},
        {id:6, cat: "Bollywood", img: "", title:"" },
        {id:7, cat: "Bollywood", img: "", title:"" },
        {id:8, cat: "Bollywood", img: "", title:"" },
        {id:9, cat: "Bollywood", img: "", title:"" },
        {id:10, cat: "Bollywood", img: "", title:"" },
        {id:11, cat: "Bollywood", img: "", title:"" },
        {id:12, cat: "", img: "", title:"" },
        {id:13, cat: "", img: "", title:"" },
         {id:14, cat: "", img: "", title:"" },
         {id:15, cat: "", img: "", title:"" },
         {id:16, cat: "", img: "", title:"" },
         {id:17, cat: "", img: "", title:"" },

    ])
   

  return (
    <AppData.Provider value={[data,setdata]} >
        {/* <Home/> */}
       {props.children}
    </AppData.Provider>
  )
}

export default Store;
