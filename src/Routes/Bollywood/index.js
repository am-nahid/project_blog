import React, { useContext } from 'react'
import { AppData } from '../../Components/Data'
import { Logo, TopNavigation } from '../../Components'
import ArticleList from './ArticleList'
import TopPost from './TopPost'
import '../../App.css'

function Bollywood() {
    
  return (
    <>
      <Logo/>
      <TopNavigation/>
      <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
      <ArticleList/>
      <TopPost/>
      </div>
      </div>
      </div>


    </>
  )
}

export default Bollywood
