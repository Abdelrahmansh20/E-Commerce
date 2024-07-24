import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../Context/User.context'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';

export default function AllOrder() {
    const [orders , setOrders] = useState(null)
    const {token} = useContext(userContext);
    const {id} = jwtDecode(token)
    console.log(id);
    

    async function getUserOrders(){
        const options = {
            url : `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
            method: "GET",

        }

        const {data} = await axios.request(options);
        console.log(data);
        setOrders(data)
    }
  
    useEffect(()=>{
        getUserOrders()
    },[])
  
  
    return (
    <>
    {!orders ? <Loading/> 
    : (orders.map((order)=>
    (<>
    <div className='order border  border-gray-400 rounded p-4 mt-10'>
        <div className='flex justify-between items-center'>
            <div>
                <h2>Order ID</h2>
                <h3>#{order.id}</h3>
            </div>
            <div>
        {order.isDelivered ? (
                            <span className='btn-primary inline-block font-cairo bg-blue-500 me-2'>تم التوصيل</span>
        ) : 
        <span className='btn-primary inline-block font-cairo bg-blue-500 me-2'>قيد التوصيل</span>

        }

                {order.isPaid ? (<span className='btn-primary inline-block font-cairo bg-lime-500'> مدفوع</span>)
            : 
            <span className='btn-primary inline-block font-cairo bg-red-500'>غير مدفوع</span>    
            }
            </div>
        </div>
        <div className='grid gap-3 grid-cols-12 mt-2'> 
            {order.cartItems.map((product)=> (
                <>
                <div className='product border border-gray-400 rounded col-span-2 p-3'>
            <img 
            src={product.product.imageCover}
            className='w-full'
            />
            <h3 className='font-semibold my-2'>{product.product.title}</h3>
            <span>{product.price} L.E</span>
            </div>
            </>
            )
        )}
        </div>
    </div>
    </>)
    ))
}
    </>
  )
}
