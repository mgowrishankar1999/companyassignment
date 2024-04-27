
import React from 'react';
import './navbar.css';

function Navbar(){

    
    return(

        <div className=' main   '>
            
                
                <div className='address d-flex'>
                <span className="material-symbols-outlined  location">
                location_on
                </span>
                <span className='mumbai ms-2   '>
                    Mumbai, India
                </span>
                <span className="material-symbols-outlined arrow ">
                arrow_forward_ios
                </span>
                </div>
                
                
            
                <ul className=" nav nav-underline   mt-3  navbar  ">
                    <li className="nav-item  ms-2  ">
                        <a className="nav-link text-secondary "  aria-current="page"  href="#"> Live shows</a>
                    </li>
                    <li className="nav-item mx-2 ">
                        <a className="nav-link text-secondary" href="#">Streams</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-secondary" href="#">Movies</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-secondary" href="#">Plays</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-secondary" href="#">Events</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-secondary" href="#">Sports</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link text-secondary" href="#">Activites</a>
                    </li>
                
                </ul>
                
                gowrishankar
            
            
            


        </div>
    )
}

export default Navbar