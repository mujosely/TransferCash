import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from '../Header/Header.jsx'
import Footer from '../Header/Footer'
import loginImg from '../images/undraw_mobile_pay_re_sjb8.svg'
import './Login.css';
import './css/nunito-font.css';
import './css/style.css';
import './fonts/Nunito/Nunito-Black.ttf';
import './fonts/Nunito/Nunito-BlackItalic.ttf'
function Register() {

  function registerHandler(){
    axios.post('https://tuzapay-abea0-default-rtdb.firebaseio.com/',{
      name:'MURAGIJEMARIYA',
      age:20,
      password:"20ekekie"
    }).then((result=>{ 
      console.log("successful created")
    })).catch(error=>{
      console.log(error);
    })
  }
          

    return (
      <div>
         <Header />
     <div className="page ml-64">
      
  <div className="form-v6-content">
    <div className="form-left">
      <img className="py-14" src={loginImg} alt="form" />
      <p className="text-black text-2xl mt-18">Register to Transfer</p>
    </div>
    <form className="form-detail" action="#" method="post">
      <h2>Register Form</h2>
      <div className="form-row">
        <input type="text" name="full-name" id="full-name" className="input-text" placeholder="Your Name" required="required" />
      </div>``
      <div className="form-row">
        <input type="text" name="your-email" id="your-email" className="input-text" placeholder="Email Address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
      </div>
      <div className="form-row">
        <input type="password" name="password" id="password" className="input-text" placeholder="Password" required />
      </div>
      <div className="form-row">
        <input type="password" name="comfirm-password" id="comfirm-password" className="input-text" placeholder="Comfirm Password" required />
      </div>
      <div className="form-row-last" onClick={registerHandler}>
      <Link to="Login" className="cursor-pointer px-20 bg-yellow-400 py-2 text-black px-13  rounded-md">Register</Link>
      </div>
    </form>
  </div>
  
</div>
<Footer />
</div>

    )
}

export default Register