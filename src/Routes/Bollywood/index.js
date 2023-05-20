import React, { useContext } from 'react'
import { AppData } from '../../Components/Data'
import { Logo, TopNavigation } from '../../Components'
import ArticleList from './ArticleList'
import TopPost from './TopPost'
import '../../App.css'
import Store from '../../Utility/ContextStore/contextAPI'

function Bollywood() {
    
  return (
    <>
      <Logo/>
      <TopNavigation/>
      <Store>
      <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
      <ArticleList/>
      <TopPost/>
      </div>
      </div>
      </div>

      </Store>


    </>
  )
}

export default Bollywood
