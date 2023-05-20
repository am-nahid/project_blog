import React from 'react'
import { Logo, TopNavigation } from '../../Components'
import HollyArticleList from './HollyArticleList'
import TechTopPost from './HollyTopPost'
import Store from '../../Utility/ContextStore/contextAPI'

const Hollywood = () => {
  return (
    <>
    <Logo/>
    <TopNavigation/>
    <Store>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
    <HollyArticleList/>
    <TechTopPost/>
    </div>
    </div>
    </div>
    </Store>
    </>
  )
}

export default Hollywood
