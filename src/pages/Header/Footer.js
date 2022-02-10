import React from 'react'

function Footer() {
    return (
        <div className="footer">
            
            <section className="relative bg-yellow-400">
               {/* heading */}
               <div className="container grid grid-cols-1 mx-24 md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-screen-lg ">
                   <div className="flex flex-col ">
                       <div className="p-6 flex flex-col items-left">
                          
                           <h3 className="mt-5 mb-2 text-black font-black text-lg">TuzaPay</h3>
                           <p className="mb-2 text-black font-light">TuzaPay is a social impact remittance company enabling African diaspora send money to their families and also enable them support social causes in their communities back home in Africa</p>
                       </div>
                       
                   </div>
                   <div className="flex flex-col ">
                       <div className="p-6 flex flex-col items-center">
                           
                           <h3 className="underline mt-5 mb-2 text-black  font-bold text-lg">Quick Link</h3>
                           <div class="space-y-4 ...">
                                <span className="block ...">Countries</span>
                                <span className="block ...">Privacy Policy</span>
                                <span className="block ...">Blog</span>
                            </div>
                       </div>
                       
                   </div> 
                   <div className="flex flex-col ">
                       <div className="p-6  flex flex-col items-center">
                           
                           <h3 className="underline mt-5 mb-2 text-black font-bold text-lg">About Us</h3>
                           <div class="space-y-4 ...">
                                <span className="block ...">Our Story</span>
                                <span className="block ...">PTestimonies</span>
                                <span className="block ...">Office</span>
                            </div>
                       </div>
                       
                   </div>
                   
               </div>
           
           </section>

           <section className="relative bg-black-200 h-18 border-2 border-white-500 border-opacity-75 md:border-opacity-50">
             <div className=" content-center ml-16  text-center ">
               <h2 className="text-xl  mt-4 font-bold ">Copyright@ 2022 TuzaPay all rights  reserved.</h2>
             </div>
           </section>
           
        </div>
    )
}

export default Footer
