// import { useContext } from "react"
import { Link } from "react-router-dom"
// import { cartContext } from "../../Context/Cart.context"



export default function categoryCard({categoryInfo}) {
    const {images,  category,  id} = categoryInfo
    // const {addProductToCart}=useContext(cartContext)
    return (
    <>
    <div   className="col-span-3 shadow-lg hover:shadow-primary rounded-md overflow-hidden mt-10">
        <div className="relative">
        <Link to={`category/${id}`}>
        <img src={images[0]} className="w-full"/>
        </Link>
        
        </div>
        <div className="p-3">
            <h3 className="text-primary">{category.name}</h3>
            
        </div>
    </div>
    </>
  )
}
