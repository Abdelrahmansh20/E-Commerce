import axios from "axios";
import { createContext, useContext, useState } from "react";
import { userContext } from "./User.context";
import toast from "react-hot-toast";

export const WishContext = createContext(null);

export default function WishProvider({children}){
    const [wishInfo,setWishInfo] = useState(null)
    const {token} = useContext(userContext)
    
    
    async function getWishInfo(){
        const options = {
            url : "https://ecommerce.routemisr.com/api/v1/wishlist",
            method : "GET",
            headers : {
                token,
            }
        }


        let {data} = await axios.request(options);
            console.log(data);
            setWishInfo(data)
    
    }
    
    
    async function addToWish({id}){
        try {
            const options ={
                url: "https://ecommerce.routemisr.com/api/v1/wishlist",
                method:"POST",
                headers: {
                    token,
                },
                data:{
                    productId:id
                }
    
                
            }
            let {data} = await axios.request(options)
            console.log(data);
            toast.success("product added to WishList")
        } catch (error) {
            console.log(error);
        }

    }
    return( <WishContext.Provider value={{addToWish,getWishInfo}}>
        {children}
    </WishContext.Provider>
)
}