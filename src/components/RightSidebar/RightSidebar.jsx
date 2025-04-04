import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'
import { logout } from '../../config/firebase'

const RightSidebar = () => {
  return (
    <div className='rs'>
        <div className="rs-profile">
            <img src="rpm.png" alt="" />
            <h3>Rupam Kumar <img src={assets.green_dot} /></h3>
            <p>Hey there, I am using ChatApp!!</p>
        </div>
        <hr />
        <div className="rs-media">
            <p>Media</p>
            <div>
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
                <img src={assets.pic3} alt="" />
                <img src={assets.pic4} alt="" />
                <img src={assets.pic1} alt="" />
                <img src={assets.pic3} alt="" />
            </div>
        </div>
        <button onClick={()=>logout()}>Logout</button>
    </div>
  )
}

export default RightSidebar