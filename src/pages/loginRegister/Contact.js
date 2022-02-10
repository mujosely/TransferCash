import React from 'react'
import '../layout/Header.css'
import Header from '../layout/Header'
function Contact() {
    return (
        <div>
        <Header />
       
         <div className="container flex py-40">
         <div>
         <p className="text-3xl text-black mr-40">We serve better services <br/>for you with digital solution!<br/> Train your Kids to use their mind!</p>
         <p className="text-sm py-70 text-black">Education is not just about learning facts<br/>, but more so about learning how to think. <br/> It is learning to make good choices. It is learning to act with purpose.</p>
         <button className="button">Get Started</button>
         </div>
         <div>
         <h4>OUR MISSION</h4>
         <p text-2xl text-black > Little minds are open and ready to grasp maximum knowledge and we encourage them towards this. <br />Rooted in innovative childhood practices, <br/>our curriculum empowers kids to turn into critical thinkers and<br /> ingenious learners who are passionate about lifelong learning</p>
         <h4 class="oppo">Do you know what my favorite part of the game is, Opportunity to play</h4>
         </div>
          
         </div>
        
        </div>
    )
}

export default Contact
