import React from 'react'
import { Logo, TopNavigation } from '../../Components'
import FitArticleList from './FitArticleList'
import FitTopPost from './FitTopPost'


const Fitness = () => {
  return (
    <>
    <Logo/>
    <TopNavigation/>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
    <FitArticleList/>
    <FitTopPost/>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Fitness
