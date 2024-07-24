import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading';

export default function CategorySlider() {
    const [categories ,setCategories] = useState(null);

    async function getCategories(){
        const options ={
            url: "https://ecommerce.routemisr.com/api/v1/categories",
            method: "GET",
        }
        const {data} = await axios.request(options)
        setCategories(data.data)
    }

    useEffect(()=>{
        getCategories();
    },[])


  return (
    <>
    {categories?  (<section className='mb-5 mt-16'>
        
        <div className='grid grid-cols-12 gap-4 mt-16'>
            {categories.map((category)=>(
                <div className='col-span-4 shadow-lg hover:shadow-primary rounded-md overflow-hidden mt-10' key={category._id}>
                    <img 
                    src={category.image}
                    className='w-full h-96 object-cover'
                    />
                    <h3 className='text-3xl py-8 text-center'>{category.name}</h3>
                </div>
            ))}
            </div>
    </section>): (<Loading/>)}
    </>
  )
}

