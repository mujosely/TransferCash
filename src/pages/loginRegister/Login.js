import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Header/Footer'
import loginImg from '../images/undraw_transfer_money_rywa.svg'
import './Login.css';
import './css/nunito-font.css';
import './css/style.css';
import './fonts/Nunito/Nunito-Black.ttf';
import './fonts/Nunito/Nunito-BlackItalic.ttf'
function Login() {
    return (
      <div>
        <Header />
     <div className="page ml-64">
       
  <div className="form-v6-content">
    <div className="form-left">
      <img src={loginImg} alt="form" />
      <p className="text-black text-2xl mt-20">Login to Transfer Money with TuzaPay</p>
      <p className="text-black italic mt-2">If you don't have account <Link to="Register" className="text-yellow-400">Register Here!</Link></p>
    </div>
    <form className="form-detail">
      <h2>Login Form</h2>
      <div className="form-row">
        <input type="text" username="full-name" id="full-name" className="input-text" placeholder="Your UserName" required />
      </div>
      
      <div className="form-row">
        <input type="password" name="password" id="password" className="input-text" placeholder="Password" required />
      </div>
      
      <div className="form-row-last">
      <Link to="Home" className="cursor-pointer px-20 bg-yellow-400 py-2 text-black px-13  rounded-md">Login</Link>
      </div>
    </form>
  </div>
</div>
<Footer />
</div>

    )
}

export default Login
