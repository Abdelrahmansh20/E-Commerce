import React, { createContext, useContext, useEffect } from 'react'
import { WishContext } from '../../Context/WishList.Context'
import Loading from '../../Components/Loading/Loading'

export default function WishList() {
const {getWishInfo,wishInfo} = useContext(WishContext)

  useEffect(()=>{getWishInfo()},[])

  return (
    <>
    {wishInfo === null ? (<Loading/>
    ): (<section className='bg-slate-200 p-5 mt-16'>
      <h2 className='font-semibold text-4xl p-7'>My Wish List</h2>
    
    {wishInfo?.length === 0 ? (
      <div className='py-16 flex flex-col justify-center items-center'>
        <h3 className='text-lg'>There are no items</h3>
      </div>
    ) : (
      
      wishInfo?.data.map((wish)=> 
      <>
      (<div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <img 
          src="https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg"
          className='w-full'
          />
        </div>
        <div className='flex justify-between items-center col-span-10 p-5'>
          <div>
            <h3 className='text-lg font-semibold'>Product Title</h3>
            <h4 className='my-1 mb-2 text-primary'> 150 L.E</h4>
            <button className='btn-primary flex flex-row justify-center items-center bg-red-500'><i className="fa-solid fa-trash mr-2"></i> Remove</button>
          </div>
          <div>
            <button className='  text-nowrap bg-transparent border rounded-lg py-5 px-12 border-primary'>Add To Cart</button>
          </div>
        </div>
      </div>)
      </>
      )
      
    )}
    
    
    
    </section>)}
  </>
  )
}
