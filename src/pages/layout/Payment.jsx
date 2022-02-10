import React from 'react'
import './pay.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Header/Footer'
import tuza from '../../assets/logo.jpg'
function Payment() {
    return (
<div>
           <Header /> 
           <section className="relative w-screen ">
<div className="card mt-50 mb-50">
  <div className="flex flex-row card-title mx-auto gap-12"> Transfer Now 
  <img src={tuza} alt="tuza logo" width="110px" height="110px" />
  </div>
  <div className="nav">
    <ul className="mx-auto">
      <li className="active"><a href="#">Simple, Low Price</a></li>
    </ul>
  </div>
  <form> <span id="card-header">Saved cards:</span>
    <div className="row row-1">
      <div className="col-2"><img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /></div>
      <div className="col-7"> <input type="text" placeholder="**** **** **** 3193" /> </div>
      <div className="col-3 d-flex justify-content-center"> <a href="#"><span className="pf pf-mastercard-securecode"></span> card</a> </div>
    </div>
    <div className="row row-1">
      <div className="col-2"><img className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" /></div>
      <div className="col-7"> <input type="text" placeholder="**** **** **** 4296" /> </div>
      <div className="col-3 d-flex justify-content-center"> <a href="#">Credit card</a> </div>
    </div> <span id="card-header">Send to:</span>
    <div className="row-1">
      <div className="row row-2"> <span id="card-inner">Client holder name</span> </div>
      <div className="row row-2"> <input type="text" placeholder="Bojan Viner" /> </div>
    </div>
    <div className="row three">
      <div className="col-7">
        <div className="row-1">
          <div className="row row-2"> <span id="card-inner">Phone number</span> </div>
          <div className="row row-2"> <input type="text" placeholder="5134-5264-4" /> </div>
        </div>
      </div>
      <div className="col-2"> <input type="text" placeholder="Exp. date" /> </div>
      <div className="col-2"> <input type="text" placeholder="CVV" /> </div>
    </div> 
    
    <button type="button" className=" bg-yellow-400 py-2  text-white rounded-md px-7 text-xl-2"><Link to="Success" >Transfer</Link></button>
  </form>
 </div>
 </section>
 <Footer />
 </div>
 
    )
}

export default Payment