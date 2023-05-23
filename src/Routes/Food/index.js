import React from 'react'
import { Logo, TopNavigation } from '../../Components'
import FoodArticleList from './FoodArticleList'
import FoodTopPost from './FoodTopPosts'
import Store from '../../Utility/ContextStore/contextAPI'

const Food = () => {
  return (
    <>
    <Logo/>
    <TopNavigation/>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            <Store>
    <FoodArticleList/>
    <FoodTopPost/>
    </Store>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Food
