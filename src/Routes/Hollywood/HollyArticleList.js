import React, {useContext} from 'react'
import { Header, DateExt } from '../../Components'
import '../../App.css'
import { AppData } from '../../Utility'
import { useNavigate } from 'react-router-dom';

function HollyArticleList() {

  const [data] =useContext(AppData)

  // console.log(data);
  // const params = useParams();  
  const navi = useNavigate(); 

    // const location = useLocation();  
const handleImage=(d)=>{
  // console.log('works', params);
 navi(`/Hollywood/${d.id}`, {state: d})

}

  return (
    <div className='ArticleList'>
      <div className='ArticleListHead'>
     <Header headerText={"Hollywood"} />
     </div>
    
<div className='ArticleListSpace'  >

{
        data.filter((item)=>item.cat==="Hollywood" && item.for==="ArticleList"
        ).map((d, index)=>(

<div key={d.id}>
     <div className="LatestArtBlock">
          <div >
            
            <img
            onClick={( )=> handleImage(d)}
              src={d.img}
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>{d.title}</h2>
            <p className="LatestArtDetail">
            {d.Overview}
            </p>
            <p className="LatestArtDate">
              <span className="genericDateTravel">{d.cat}</span>
              <DateExt dateExt={`  / ${d.date} `} />
            </p>
          </div>
        </div>
       

        {index !== 6 && (
        <div className="spacer">
          <hr className="commonHr" />
        </div>
        )
        }
  


        {/* <div className="LatestArtBlock">
          <div>
            <img
            src={d.img2}
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>{d.title2}</h2>
            <p className="LatestArtDetail">
            {d.Overview2}
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
              src={d.img3}
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>{d.title3}</h2>
            <p className="LatestArtDetail">
              {d.Overview3}
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
            src={d.img4}
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>{d.title4}</h2>
            <p className="LatestArtDetail">
            {d.Overview4}
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
            src={d.img5}
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>{d.title5}</h2>
            <p className="LatestArtDetail">
            {d.Overview5}
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
            src={d.img6}
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>{d.title6}</h2>
            <p className="LatestArtDetail">
            {d.Overview6}
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
            src={d.img7}
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>{d.title7}</h2>
            <p className="LatestArtDetail">
            {d.Overview7}
            </p>
            <p className="LatestArtDate">
              <span className="genericDateTravel">Travel</span>
              <DateExt dateExt=" / August 21 2017" />
            </p>
          </div>
        </div>*/}
        </div> 
        
        ))
}


        </div>

    </div>
  )
}

export default HollyArticleList
