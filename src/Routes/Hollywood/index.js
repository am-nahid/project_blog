import React from 'react'
import { Logo, TopNavigation , LogoMobile} from '../../Components'
import HollyArticleList from './HollyArticleList'
import HollyTopPost from './HollyTopPost'
import Store from '../../Utility/ContextStore/contextAPI'

const Hollywood = () => {
  return (
    <>
    <div className='LMobile' ><LogoMobile/></div>
    <div className='LLocal' ><Logo/>
      <TopNavigation/></div>
    <Store>
    <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
    <HollyArticleList/>
    <HollyTopPost/>
    </div>
    </div>
    </div>
    </Store>
    </>
  )
}

export default Hollywood
