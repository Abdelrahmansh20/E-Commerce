import { useContext, useEffect } from "react"
import logo from "../../assets/images/freshcart-logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { userContext } from "../../Context/User.context"
import { cartContext } from "../../Context/Cart.context"
export default function Navbar() {
    const {token,logOut} = useContext(userContext)
    const {getCartInfo,cartInfo} =useContext(cartContext)


    useEffect(()=>{
        getCartInfo()
    },[])

    return (
    <nav className='bg-slate-100 text-gray-500 p-8 align-middle flex justify-between fixed top-0 left-0 right-0 z-50'>
        <div className='container  flex gap-8'>
        <h1>
            <Link to="/">
                <img src= {logo} className=' mr-2 w-48'/>
            </Link>
            </h1>


        {token ? <ul className='flex gap-6 items-center block ms-auto  text-xl'>
            <li>
                <NavLink className={({isActive})=>{
                    return`relative  before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold text-black":"before:w-0"}`
                }} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>{
                    return`relative  before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold text-black":"before:w-0"}`
                }} to='/cart'>Cart</NavLink>
            </li>
            {/* <li>
                <NavLink className={({isActive})=>{
                    return`relative  before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold text-black":"before:w-0"}`
                }} to='/wishlist'>Wishlist</NavLink>
            </li> */}
            <li>
                <NavLink className={({isActive})=>{
                    return`relative  before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold text-black":"before:w-0"}`
                }} to='/Products'>Products</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>{
                    return`relative  before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold text-black":"before:w-0"}`
                }} to='/Categories'>Categories</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>{
                    return`relative  before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold text-black":"before:w-0"}`
                }} to='/brands'>Brands</NavLink>
            </li>
            
        </ul> 
        
        :""}

        <Link to="/cart" className="ms-auto relative">
        <i className="fa-solid fa-cart-shopping text-3xl flex justify-center "></i>
        <span className="bg-primary text-white h-5 w-5 font-bold text-sm flex justify-center items-center rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
        {cartInfo === null ? <i className="fa-solid fa-spinner fa-spin"></i> 
        : cartInfo.numOfCartItems || 0} </span>
        </Link>

        {/* <ul className='flex gap-6 items-center '> 
            <li>
                <a href='http://www.facebook.com'></a>
                <i className='fa-brands fa-facebook'></i>
            </li>
            <li>
                <a href='http://www.twitter.com'></a>
                <i className='fa-brands fa-twitter'></i>
            </li>
            <li>
                <a href='http://www.tiktok.com'></a>
                <i className='fa-brands fa-tiktok'></i>
            </li>
            <li>
                <a href='http://www.youtube.com'></a>
                <i className='fa-brands fa-youtube'></i>
            </li>
            <li>
                <a href='http://www.instagram.com'></a>
                <i className='fa-brands fa-instagram'></i>
            </li>
        </ul> */}


        <ul className='flex gap-6 items-center'>
            {!token ? <>
                <li>
                <NavLink className={({isActive})=>{
                    return`relative  before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold":"before:w-0"}`
                }} to='/auth/login'>Login</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>{
                    return`relative  before:h-[2px] before:bg-primary before:absolute before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold":"before:w-0"}`
                }} to='/auth/signup'>Sign up</NavLink>
            </li>
            </> : <li className="cursor-pointer">
                <span onClick={logOut} href=' ' className="font-semibold text-xl">
                Log Out
                </span>
            </li> }
            
        </ul>
        </div>
    </nav>
    )
}
