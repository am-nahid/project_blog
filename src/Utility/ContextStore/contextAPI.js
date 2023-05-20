import React, { useState, createContext } from "react";
// import Home from '../../Routes/Home/index'

export const AppData = createContext();
function Store(props) {
  const [data, setdata] = useState([
    {
      id: 1,
      cat: "Home",
      img: "https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg",
      title: "Main Image",
    },
    {
      id: 2,
      cat: "Home",
      img: "https://images.pexels.com/photos/1481096/pexels-photo-1481096.jpeg",
      title: "Sub Image",
    },
    {
      id: 3,
      cat: "The Latest",
      img: "https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/theodor-lundqvist-438530-1516888037.jpg",
      title: "latest",
    },
    {
      id: 4,
      cat: "Latest Articles",
      img: "https://cdn.uniacco.com/blog/wp-content/uploads/2021/01/22153121/shanna-beasley-C6o32dvMvc8-unsplash-1536x1152.jpg",
      title: "Latest Articles",
    },
    {
      id: 5,
      cat: "Hollywood",
      Overview1:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img1: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A7SobaUTvb6d5Z3dpOhFxPG0RQf.jpg",

      title1: "Ant-Man and the Wasp: Quantumania",

      deccibe1:
        "When it comes to their Marvel properties, there’s this slightly morbid insistence by Disney to tie every teeny tiny detail of previous movies, television shows, and character arcs together in obsessive fashion. It’s becoming such an uncontrollable urge by the studio to engage in this behavior that the cause-and-effect is resulting in disasters like “Eternals,” “Thor: Love and Thunder,” and now, “Ant-Man and the Wasp: Quantumania.”    Trying too hard to force a non-story into the already lame Ant-Man mythology, the film reunites superhero partners Scott Lang (Paul Rudd) and Hope Van Dyne (Evangeline Lilly) as Ant-Man and the Wasp. The pair find themselves thrust into the dangerous Quantum Realm along with Hope’s parents Hank Pym (Michael Douglas) and Janet Van Dyne (Michelle Pfeiffer), along with Scott’s teenage daughter, Cassie (Kathryn Newton). As they explore the unusual terrain and alien society filled with strange creatures, Janet reveals that she didn’t quite tell the group everything about the three decades she spent trapped in the realm. Facing new dangers from supervillan Kang the Conquerer (Jonathan Majors), the family must unite to stop a worldwide disaster.",

      title2: "John Wick: Chapter 4",
      
      img2: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      Overview2:
        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",

      img3: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      title3: "Creed III",
      Overview3:
        "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. ",

      img4: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      title4: "Guardians of the Galaxy Vol. 3",
      Overview4:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",

      img5: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
      title5: "Ghosted",
      Overview5:
        "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",

      img6: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      title6: "Avatar: The Way of Water",
      Overview6:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",

      img7: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
      title7: "Shazam! Fury of the Gods",
      Overview7:
        'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
    },
    {
      id: 6,
      cat: "",
      Overview2:
        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      img2: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      title2: "John Wick: Chapter 4",
    },
    { id: 7, cat: "Bollywood", img: "", title: "" },
    { id: 8, cat: "Bollywood", img: "", title: "" },
    { id: 9, cat: "Bollywood", img: "", title: "" },
    { id: 10, cat: "Bollywood", img: "", title: "" },
    { id: 11, cat: "Bollywood", img: "", title: "" },
    { id: 12, cat: "", img: "", title: "" },
    { id: 13, cat: "", img: "", title: "" },
    { id: 14, cat: "", img: "", title: "" },
    { id: 15, cat: "", img: "", title: "" },
    { id: 16, cat: "", img: "", title: "" },
    { id: 17, cat: "", img: "", title: "" },
  ]);

  return (
    <AppData.Provider value={[data, setdata]}>
      {/* <Home/> */}
      {props.children}
    </AppData.Provider>
  );
}

export default Store;
