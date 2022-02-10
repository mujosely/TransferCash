import React from 'react'
import Header from '../Header/Header.jsx';
import Footer from '../Header/Footer'
import asap from '../../assets/asaph.jpg';
import kate from '../../assets/katende.jpg'
import irumva from '../../assets/irumva.jpg'
import './How.css';

function HowItWork() {
    return (
      <div>
        <Header />
<div>
      <section className="relative">
  <div className="about-section my-20">
    <h1 class>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>We know how important it is to send money to your loved ones when they most need it. At WorldRemit, we ensure it’s quick, secure and convenient. But most importantly, by offering better exchange rates than most conventional banks and money transfer providers, we make sure your hard-earned money goes further.</p>
  </div>
  <h2 style={{textAlign: 'center'}}>Our Team</h2>
  <div className="row">
    <div className="column">
      <div className="card">
      <img src={kate} alt="Mike" width="640px" height="640px" layout="fill" />
        <div className="container">
          <h2>Hamza Katende</h2>
          <p className="title">CEO &amp; Founder</p>
          <p>Entreprenuer </p>
          <p>Hamza.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src={irumva} alt="Mike"  width="640px" height="640px" layout="fill" />
        <div className="container">
          <h2>Joselyne MURAGIJEMARIYA</h2>
          <p className="title">Front-End</p>
          <p>Some text that describes me .</p>
          <p>josemurgije@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
      <img src={asap} alt="Mike" width="640px" height="640px" layout="fill" />
        <div className="container">
          <h2>Asaph IRABARUTA</h2>
          <p className="title">Back-End</p>
          <p>Some text that describes me .</p>
          <p>iasaph.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
  </section>
</div>

<Footer />
</div>

    )
}

export default HowItWork
