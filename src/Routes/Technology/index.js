import React from 'react'
import { Logo, TopNavigation } from '../../Components'
import TechArticleList from './TechArticleList'
import TechTopPost from './TechTopPost'
import Store from '../../Utility/ContextStore/contextAPI'

const Technology = () => {
  return (
    <>
    <Logo/>
    <TopNavigation/>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            <Store>
    <TechArticleList/>
    <TechTopPost/>
    </Store>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Technology
