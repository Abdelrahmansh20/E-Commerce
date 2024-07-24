import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../Context/Cart.context"
import { WishContext } from "../../Context/WishList.Context"




export default function ProductCard({productInfo}) {
    const {images, title, price, category, ratingsAverage, id} = productInfo
    const {addProductToCart}=useContext(cartContext)
    const {addToWish} = useContext(WishContext)
    return (
    <>
    <div   className="lg:col-span-3 md:col-span-6 sm:col-span-12 shadow-lg hover:shadow-primary rounded-md overflow-hidden mt-10">
        <div className="relative">
        <Link to={`product/${id}`}>
        <img src={images[0]} className="w-full"/>
        </Link>
        
        </div>
        <div className="p-3">
            <h3 className="text-primary">{category.name}</h3>
            <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
            <div className="flex items-center justify-between mt-4 ">
                <span>{price} L.E</span>
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-star text-yellow-500"></i>
                    <span>{ratingsAverage}</span>
                </div>
                
            </div>
            <div className="flex justify-between items-center mt-3">
                    <button onClick={()=>{addProductToCart({id})}} className="animate__backInUp btn-primary px-32 flex flex-row justify-center items-center gap-2">
                    <i className="fa-solid fa-plus text-white"></i>
                        Add</button>
                        {/* <div onClick={()=>{addToWish({id})}}>
                    <i  className="fa-solid fa-heart text-3xl"></i>
                    </div> */}
                </div>
        </div>
    </div>
    </>
  )
}
