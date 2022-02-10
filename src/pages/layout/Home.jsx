import React from 'react'
import {Link} from 'react-router-dom';
import './style.css'
import Header from '../Header/Header'
import man from '../../assets/1.jpg'
import Footer from '../Header/Footer'
// import fast from '../../assets/speed-test.png'
import affo from '../../assets/afford_white.png'
import safer from '../../assets/safe_white.png'
import women1 from '../../assets/Support Maternal Health-01.png'
import women3 from '../../assets/Support Girl Child Education Image-01.png'
import women2 from '../../assets/Support Widows-01.png'
import apple from '../../assets/store.jpg'
import phone from '../../assets/Mobile App Download-01.png'
// var loadjs = require('loadjs');


function Home() {
     
// loadjs(['./js/country-list.js', './js/script.js'], 'foobar');
 
// loadjs.ready('foobar', function() {
//   /* foo.js & bar.js loaded */
//   console.log("It worked");
// });
    return (
        <>
           <Header /> 
           <section className="relative w-screen">
               
           <div style={{backgroundImage:`url(${man})`, backgroundRepeat:"no-repeat",backgroundSize:"contain"}} className="w-full flex flex-col-reverse bg-custom-yellow my-16 lg:flex-row  items">
               
               <div className="money flex-1 flex-col text-white ml-8 top-2 items-center lg:items-start">
                    <h2 className="ml-2 font-extrabold mt-24 text-5xl md:text-4 ">
                        Send Money <br/>  Instantly to Africa
                    </h2>
                    <p className="text-lg py-14 font-bold ml-2 items-center text-center lg:text-left mb-6">
                        Contribute to social cause  Each Time <br/> You Send Money to Africa.
                    </p>
                    {/* <p className="text-lg py-5  items-center  text-center lg:text-left mb-6">
                    Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each.
                    </p>  */}
                    <button type="button" className="bg-black py-3 px-7 text-white rounded-md  text-xl-2"><Link to="/Payment" >Send Money Now</Link></button>

               </div>

                    {/* <div class="flex bg-yellow-400">
                        <img src={man} className="" alt="happy" width="500px"  />
                    </div> */}
                    <div class="flex justify-center ml-72 right-0 mt-8 flex-1 md:mb-16 lg:mb-0 ">
                       <div className="wrapper px-36 py-36">
                            <header className=" flex flex-col text-xl-4">Exchange Rate</header>
                            <header className="text-xl-2 mt-2">  1 UGX= 0.27 RWF</header>
  <form action="#">
    <div className="amount">
      <p>Enter Amount</p>
      <input type="text" defaultValue={1} />
    </div>
    <div className="drop-list">
      <div className="from">
        <p>From</p>
        <div className="select-box">
          <img src="https://flagcdn.com/48x36/us.png" alt="flag" />
          <select> {/* Options tag are inserted from JavaScript */} </select>
        </div>
      </div>
      <div className="icon"><i className="fas fa-exchange-alt" /></div>
      <div className="icon"><i class="fas fa-exchange-alt"></i></div>
      <div className="to">
        <p>To</p>
        <div className="select-box">
          <img src="https://flagcdn.com/48x36/rw.png" alt="flag" />
          <select> {/* Options tag are inserted from JavaScript */} </select>
        </div>
      </div>
    </div>
    <div className="exchange-rate">Getting exchange rate...</div>
    <button>Get Exchange Rate</button>
  </form>
</div>

                    </div>

           </div>
           </section>
           <section className="relative bg-black">
               {/* heading */}
               <div className="grid grid-cols-1 mx-48 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-screen-lg">
                   <div className="flex flex-col ">
                       <div className="p-6 flex flex-col items-center">
                           <img className="" src={affo} alt="fast" width="90px" />
                           <h3 className="mt-5 mb-2 text-white font-black text-lg">Fast</h3>
                           <p className="mb-2 text-white font-light">Our Transfer are ready in a Minutes, no need to Queue make it so easily</p>
                       </div>
                       
                   </div>
                   <div className="flex flex-col ">
                       <div className="p-6 flex flex-col items-center">
                           <img className="" src={affo} alt="fast" width="90px" />
                           <h3 className="mt-5 mb-2 text-white font-bold text-lg">Affordable</h3>
                           <p className="mb-2 text-white font-light">Our Transfer are ready in a Minutes, no need to Queue make it so easily</p>
                       </div>
                       
                   </div> 
                   <div className="flex flex-col ">
                       <div className="p-6  flex flex-col items-center">
                           <img className="" src={safer} alt="fast" width="90px" />
                           <h3 className="mt-5 mb-2 text-white font-bold text-lg">Safe</h3>
                           <p className="mb-2 rounded-lg shadow-xl text-white font-light">we are fast for sure, you can afford our prices no need to be charged more, do for less price </p>
                       </div>
                       
                   </div>
               </div>
           
           </section>
           <section className="relative bg-yellow-400 h-20">
             <div className="flex flex-col-1 items-center text-center">
               <h2 className="text-4xl px-52 mt-4 font-bold " >Contribute to Social Impact Cause in Africa.</h2>
             </div>
           </section>
           {/* ------------------------------- */}

           <section className="relative bg-white border-b">
               {/* heading */}
               <div className="container grid grid-cols-1 ml-36 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-screen-lg ">
                   <div className="flex flex-col ">
                       <div className="w-full p-6 flex flex-col items-center">
                           <img  className="flex items-center justify-center"src={women2} alt="fast" />
                           
                       <div class="max-w-sm rounded mt-5 bg-yellow-400 overflow-hidden shadow-lg">
                       <div class="px-6 py-4 ">
                        <div class="font-bold text-xl mb-2 text-center">Support Widows and Children</div>
                        <p class="text-black-600 text-base text-center">
                        Each Time You <br/>Send Money
                        </p>
                    </div>
                        </div>

                       {/* ----- */}
                       </div>
                       
                   </div>
                   <div className="flex flex-col ">
                       <div className="p-6 flex flex-col items-center">
                           <img  className="flex items-center justify-center"src={women3} alt="fast" />
                           
                       <div class="max-w-sm rounded mt-5 bg-yellow-400 overflow-hidden shadow-lg">
                       <div class="px-6 py-4 ">
                        <div class="font-bold text-xl mb-2 text-center">Support Girl Child Education</div>
                        <p class="text-black-600 text-base text-center">
                        Each Time You <br/>Send Money
                        </p>
                    </div>
                        </div>

                       {/* ----- */}
                       </div>
                       
                   </div>
                   <div className="flex flex-col ">
                       <div className="p-6 flex flex-col items-center">
                           <img  className="flex items-center justify-center"src={women1} alt="fast" />
                           
                       <div class="max-w-sm rounded mt-5 bg-yellow-400 overflow-hidden shadow-lg">
                       <div class="px-6 py-4 ">
                        <div class="font-bold text-xl mb-2 text-center">Support Maternal Health</div>
                        <p class="text-black-600 text-base text-center">
                        Each Time You <br/>Send Money
                        </p>
                    </div>
                        </div>

                       {/* ----- */}
                       </div>
                       
                   </div>
               </div>
           
           </section>

           {/* -------------- */}
           <section className="relative bg-black">
               {/* heading */}
               <div className="container grid grid-cols-1 mx-80 md:grid-cols-2 lg:grid-cols-3 gap-y-48 max-w-screen-lg ">
                   
                       <div className="flex flex-col items-center">
                           <img className="h-700 w-300  flex items-center justify-center" src={phone} alt="fast" />
                           
                       </div>

                   <div className="flex flex-col ">
                       <div className="p-6 flex flex-col py-20 items-center">
                           <img className="h-300 w-260  flex items-center justify-center" src={apple} alt="fast"  />
                           
                       </div>
                       
                   </div> 
                   </div>
                   </section>
                   <Footer />
        </>
    )
}

export default Home
