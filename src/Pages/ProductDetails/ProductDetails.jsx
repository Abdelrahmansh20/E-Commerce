import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import ReactImageGallery from 'react-image-gallery';
import { cartContext } from '../../Context/Cart.context';

export default function ProductDetails() {
    const [details , setDetails] = useState(null)
    const {addProductToCart} = useContext(cartContext)
    let {id} = useParams();
    console.log(id);

    async function getProductDetails(){
        let {data } =await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        setDetails(data.data);
    }


    useEffect (()=>{
        getProductDetails()
    },[]);

    const imageItems = details?.images.map((imageURL)=> {
        return{
            original : imageURL,
            thumbnail : imageURL,
        }
    })


  return (
    <>
    {details === null ? (<Loading/>
    ):(<div className='grid grid-cols-12 mt-10'>
        <div className='col-span-4'>
            <ReactImageGallery items={imageItems}
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
            />
            
        </div>
        <div className='col-span-8 mt-10'>
            <h2 className='text-2xl font'>{details.title}</h2>
            <h3 className='text-primary font-semibold'>{details.category.name}</h3>
            <p className='mt-3'>{details.description}</p>
            <div className='flex justify-between items-center'>
                <span>{details.price} L.E</span>
                <span>
                <i className="fa-solid fa-star text-yellow-400"></i>
                {details.ratingsAverage}
                </span>

            </div>
            <button onClick={()=>{addProductToCart({id : details.id})}} className='btn-primary w-full mt-4'>Add To Cart</button>
        </div>
    </div>)}
    </>
  )
}
