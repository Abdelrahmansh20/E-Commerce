import amazonPayLogo from "../../assets/images/amazon-pay.png"
import americanExpressLogo from "../../assets/images/American-Express-Color.png"
import masterCardLogo from "../../assets/images/mastercard.webp"
import paypalLogo from "../../assets/images/paypal.png"
import googlePlay from "../../assets/images/get-google-play.png"
import appStore from "../../assets/images/get-apple-store.png"
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-slate-100 absolute left-0 right-0 bottom-0'>
        <div className="container py-4">
            <h2 className='text-3xl font-semibold'>Get Freshcart App</h2>
            <p>We will send you a link,open it on your phone </p>
            <div className='flex gap-4'>
            <input type='text' className='form-control flex-grow' placeholder='Email...'/>
            <button className='btn-primary'>Share app link</button>
            </div>


            <div className ="flex justify-between items-center mt-4"> 
              <div className="flex gap-2 items-center">
                <span>Payment Parteners :</span>
              
              <div className="flex gap-2 items-center ">
              <img src={amazonPayLogo}  className="w-16 "  alt="" />
              <img src={americanExpressLogo}  className="w-16 " alt="" />
              <img src={masterCardLogo} className="w-16 "  alt="" />
              <img src={paypalLogo} className="w-16 "  alt="" />
              </div>
              </div>


              <div className="flex gap-2 items-center">
                <span>Get Deliveries with Fresh Cart :</span>
              
              <div className="flex gap-2 items-center ">
              <img src={googlePlay}  className="w-20 "  alt="" />
              <img src={appStore}  className="w-20 " alt="" />
              </div>
              </div>
            </div>
        </div>
    </footer>
  )
}
