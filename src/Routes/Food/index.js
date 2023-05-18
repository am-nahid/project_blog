import React from 'react'
import { Logo, TopNavigation } from '../../Components'
import FoodArticleList from './FoodArticleList'
import FoodTopPost from './FoodTopPosts'

const Food = () => {
  return (
    <>
    <Logo/>
    <TopNavigation/>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
    <FoodArticleList/>
    <FoodTopPost/>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Food
