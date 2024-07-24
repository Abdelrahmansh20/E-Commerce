import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';

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
    {categories?  (<section className='mb-5 mt-10'>
        <h2>Shop Popular Categories</h2>
        <swiper-container loop={true} slides-per-view={6}>
            {categories.map((category)=>(
                <swiper-slide key={category._id}>
                    <img 
                    src={category.image}
                    className='w-full h-72 object-cover'
                    />
                    <h3>{category.name}</h3>
                </swiper-slide>
            ))}
        </swiper-container>
    </section>): (<Loading/>)}
    </>
  )
}

