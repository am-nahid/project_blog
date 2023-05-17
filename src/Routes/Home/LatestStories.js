import React, { useContext } from 'react'
import { AppData } from '../../Utility/ContextStore/contextAPI'

const LatestStories = () => {
    const [state] = useContext(AppData)
    console.log(state);
    console.log("log");
  return (
    <div className='Mock'>
        <h2>Rasengan</h2> 
        <h1> LatestStories </h1>
    
    </div>
  )
}

export default LatestStories





// {
//   state.filter((item)=>item.cat==="Latest Articles").map((d)=>{
//     return(
//       <div key={d.id}>
//         <h1>{d.title}</h1>
//         <img src={d.img} alt=''/>
//       </div>
//     )
//   })
// }

