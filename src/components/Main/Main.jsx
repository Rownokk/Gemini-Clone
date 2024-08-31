import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <img src='https://i.pinimg.com/564x/85/cc/6f/85cc6f5b64aed0e13ebe2e090a2d0f9c.jpg' alt="" />  
        </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Mowmita.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip</p>  
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summerize : urban planning</p>  
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>How to improve coding skills</p>  
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>  
              <img src={assets.message_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
            Gemini Apps Activity is on by default if you are 18 or older. Users under 18 can choose to turn it on.



 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
