import React, { useEffect, useState } from 'react';
import './Nav.css'
function Nav(props) {
    const [show,handleShow]=useState(false)
   const trnasitionNavBar=()=>{
        if(window.scrollY>100)
        {
            handleShow(true)
        }
        else
        {
            handleShow(false)
        }
    }

    useEffect(()=>{
  window.addEventListener('scroll',trnasitionNavBar);

  return ()=>{
    window.removeEventListener('scroll',trnasitionNavBar)
  }

    },[])
    return (
        <div className={`nav ${ show && 'nav_black'}`}>
            <div className="nav_content">
          <img className='nav_logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt=""  />
          <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        
          </div>
        </div>
    );
}

export default Nav;