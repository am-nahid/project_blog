import React from 'react'
import { Logo, TopNavigation } from '../../Components'
import HollyArticleList from './HollyArticleList'
import TechTopPost from './HollyTopPost'

const Hollywood = () => {
  return (
    <>
    <Logo/>
    <TopNavigation/>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
    <HollyArticleList/>
    <TechTopPost/>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Hollywood
