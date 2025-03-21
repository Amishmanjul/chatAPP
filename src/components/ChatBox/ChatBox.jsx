import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'
const ChatBox = () => {
  return (
    <div className='chat-box'>
        <div className="chat-user">
            <img src="rpm.png" alt="" />
            <p>Rupam Kumar <img src={assets.green_dot} className='dot' alt="" /></p>
            <img src={assets.help_icon} className='help' alt="" />
        </div>

        <div className="chat-message">
            <div className="s-msg">
                <p className="msg">Just tasting the beauty of Cloud Computing</p>
                <div>
                    <img src="rpm.png" alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>

            <div className="s-msg">
                 <img src={assets.pic1} className='msg-img' alt="" />   
                <div>
                    <img src="rpm.png" alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
        
        <div className="r-msg">
                <p className="msg">Just tasting the beauty of Cloud Computing</p>
                <div>
                    <img src="rpm.png" alt="" />
                    <p>2:30 PM</p>
                </div>
            </div>
            </div>




        <div className="chat-input">
            <input type="text" placeholder='Send a message..' />
            <input type="file" id  = 'image' accept='image/png, image/jpeg' hidden  />
            <label htmlFor="image">
                <img src={assets.gallery_icon} alt="" />
            </label>
            <img src={assets.send_button} alt="" />
        </div>
    </div>
  )
}

export default ChatBox