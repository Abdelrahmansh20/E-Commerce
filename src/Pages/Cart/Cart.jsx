import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/Cart.context'
import Loading from '../../Components/Loading/Loading';

export default function Cart() {
    const {getCartInfo, cartInfo , removeProductFromCart,updateProductCount, clearCart} = useContext(cartContext);


    useEffect(()=> {
        getCartInfo();
    },[]);
  return (
    <>
    {cartInfo === null ? <Loading/> : (<section className='mt-16 bg-slate-200 p-5 mt-10 h-70'>
        <h2 className='text-xl'>
            <i className="fa-solid fa-cart-shopping "></i>
            <span>Shop Cart</span>
        </h2>


        {cartInfo.length === 0 ? (<div className='flex justify-center items-center flex-col py-12 gap-2'>
            <h3 className='text-lg'>there are no items yet</h3>
            <Link to="/" className='bg-primary p-3 rounded-lg text-white'>ADD YOUR FIRST PRODUCT TO CART</Link>
        </div>) : (
            <>
            {cartInfo.data.products.map((product)=>(<div key={product._id} className='product grid grid-cols-12 p-5 '>
                <div className='col-span-1'>
                    <img src= {product.product.imageCover} />
                </div>
                <div className='col-span-11 flex justify-between items-center'>
                    <div className='p-5'>
                        <h3 className='text-xl font-semibold'>{product.product.title}</h3>
                        <h4 className='text-primary text-lg'>Price : {product.price} L.E</h4>
                        <button
                        onClick={()=>{
                            removeProductFromCart({id:product.product.id })
                        }}
                        className='btn-primary bg-red-500 mt-3'> 
                        <i className="fa-solid fa-trash mr-2"></i> Remove
                        </button>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button
                        onClick={()=>{
                            updateProductCount({id : product.product.id ,count : product.count+1})
                        }}
                        className='btn-primary '><i className="fa-solid fa-plus"></i></button>
                        <span className='text-lg font-semibold'>{product.count}</span>
                        <button
                        onClick={()=>{
                            updateProductCount({id : product.product.id ,count : product.count-1})
                        }}
                        className='btn-primary '><i className="fa-solid fa-minus"></i></button>
                    </div>
                </div>
            </div>
            
        )
        )}
        
        <button onClick={clearCart} className='btn-primary bg-red-500 block ms-auto mt-5 mr-5'>Clear Cart</button>
        </>
        )}

    </section> )}
        <Link to="/checkout" className='btn-primary w-fit mt-4 block ms-auto'>NEXT STEP</Link>
    </>
  )
}

