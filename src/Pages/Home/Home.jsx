import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";

export default function Home() {
    const [products,setProducts] = useState(null);

  async function getProducts(){
    const options = {
        url : "https://ecommerce.routemisr.com/api/v1/products",
        method : "GET",
    }
    const {data} = await axios.request(options)
    setProducts(data.data);
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <>
    <HomeSlider/>
    <CategorySlider/>
        {products ? (<div className='grid grid-cols-12 gap-4'>
            { products.map((product)=>(
            <ProductCard productInfo ={product}/>
        ))} 
    </div>):(
    <Loading/>
    )}
    </>
);
}