import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home/Home'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import UserProvider from './Context/User.context'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import CartProvider from './Context/Cart.context'
import Checkout from './Pages/Checkout/Checkout'
import AllOrder from './Pages/AllOrder/AllOrder'
import Products from './Pages/Products/Products'
import Categories from './Pages/Categories/Categories'
import WishList from './Pages/WishList/WishList'

import Brands from './Pages/Brands/Brands'
import WishProvider from './Context/WishList.Context'

export default function App() {
  const routes= createBrowserRouter([
    {
      path: "/",
      element: (<ProtectedRoute>
        <Layout/>
        </ProtectedRoute>),
      children: [
        {index:true,element:
          <Home/>
          },
        
        {path: "/categories",element:<Categories/>},
        {path: "/products",element:<Products/>},
        {path: "/product/:id",element:<ProductDetails/>},
        {path: "/cart",element:<Cart/>},
        {path: "/wishlist",element:<WishList/>},
        {path: "/brands",element:<Brands/>},
        {path: "/allorders",element:<AllOrder/>},
        {path: "/checkout",element:<Checkout/>},
        {path: "*",element:<NotFound/>},
      ]
    },


    {path: "/auth",element:<Layout/>, children:[

      {path: "login",element:<Login/>},
      {path: "signup",element:<Register/>},
    ]},
  
  ])

  


  return (
    <>
    <UserProvider>
      <CartProvider>
      <WishProvider>
    <RouterProvider router={routes}></RouterProvider>
    <Toaster/>
    </WishProvider>
    </CartProvider>
    </UserProvider>
    
    </>
  )
}
