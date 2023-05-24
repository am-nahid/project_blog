import React from 'react'
import { Logo, TopNavigation } from '../../Components'
import FitArticleList from './FitArticleList'
import FitTopPost from './FitTopPost'
import Store from '../../Utility/ContextStore/contextAPI'


const Fitness = () => {
  return (
    <>
    <Logo/>
    <TopNavigation/>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            <Store>
    <FitArticleList/>
    <FitTopPost/>
    </Store>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Fitness
