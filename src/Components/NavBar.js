import React from "react";

function NavBar() {
    return(
        <>
            <div>
               <h1 className="center" ><span className="vertical">The</span> Siren</h1>
            </div>
            <div className="flexProperty">
                <div className="navTag">
                <div className="home" >Home</div>
                <div className="home" >Bollywood</div>
                <div className="home" >Technology</div>
                <div className="home" >Hollywood</div>
                <div className="home" >Fitness</div>
                <div className="home" >Food</div>
                </div>
            </div>

           <div className="flexProperty">  <hr/> </div> 

        </>
    )
}

export default NavBar;