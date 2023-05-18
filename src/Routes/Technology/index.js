import React from 'react'
import { Logo, TopNavigation } from '../../Components'
import TechArticleList from './TechArticleList'
import TechTopPost from './TechTopPost'

const Technology = () => {
  return (
    <>
    <Logo/>
    <TopNavigation/>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
    <TechArticleList/>
    <TechTopPost/>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Technology
