import React, { useContext } from 'react'
import { Header, DateExt } from '../../Components'
import '../../App.css'
import { AppData } from '../../Utility'

function ArticleList() {
    const [data]= useContext(AppData)
    console.log(data);
  return (
    <div className='ArticleList'>
      <div className='ArticleListHead'>
     <Header headerText={"Bollywood"} />
     </div>

    
<div className='ArticleListSpace'>
{
        data.filter((item)=>item.cat==="Hollywood"
        ).map((d)=>(
     <div className="LatestArtBlock" key={d.id}>
          <div >
            <img
              src={d.img}
              alt=""
              className="latestArtImg2"
            />
          </div>
          <div>
            <h2>{d.title}</h2>
            <p className="LatestArtDetail">
            {d.brief}
            </p>
            <p className="LatestArtDate">
              <span className="genericDateTravel">Travel</span>
              <DateExt dateExt=" / August 21 2017" />
            </p>
          </div>
        </div>
  ))
}
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

        </div>
    </div>
  )
}

export default ArticleList
