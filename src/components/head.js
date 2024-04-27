import React from "react";
import './head.css'
import { FaSearch } from "react-icons/fa";

function Head() {
    return (

    <>


      <div className='mt-4 container align-items-center d-flex icons' >
        <h4  className=" book  ">BookUsNow </h4>

        <div className=" hamburger d-flex  align-items-center d-lg-flex d-none ">
        <span className=" menu material-symbols-outlined  p-2 d-flex align-items-center  "> menu  </span>
        <span className=" me-2 categories">Categories</span>
        </div>
        
        
        <div className="input-wrapper search">
        <input className="gow" type="search" placeholder="D JI phantom"></input>
        <FaSearch id="search"/>
        </div>

        <span class="ms-3 material-symbols-outlined love">
        favorite
        </span>
        <h5 className="favorite ms-1 mt-1">Favorites</h5>
        <span class="material-symbols-outlined person">person</span>
        <button type="button" class="btn btn-outline-secondary  ms-3 button">Sign In</button>

       
      </div>
  
      {/* <img className='container-fluid' src={"/images/Banner.svg"} alt='Banner'/>  */}
      
        
     
    </>
    
    );
  }
  
  export default Head;