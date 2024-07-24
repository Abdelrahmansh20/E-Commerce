import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import { userContext } from '../../Context/User.context';

export default function Login() {
    const [errorMsg ,setErrorMsg] = useState(null);
    const {token, setToken} = useContext(userContext);
    
    const navigate = useNavigate()


    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required").email("Email is not valid"),
        password: Yup.string().required("Password is required").matches(/^[A-Z][0-9a-zA-z]{5,25}$/, "Password should start with Uppercase letter"),

    })



    async function sendDataToLogin(values){
        let id; 
try {
        const options = {
            url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
            method: "POST",
            data: values,
        };
    
        let id = toast.loading("waiting...")
    
    
        const {data} = await axios.request(options);
        console.log(data);
    
        toast.dismiss(id);
        toast.success("User Loggedin Successfully");


        if(data.message === "success"){
            localStorage.setItem("token",data.token)
            setToken(data.token)
            navigate("/");
        }
} catch (error) {
    toast.dismiss(id);
    toast.error(error.response.data.message)
    console.log(error);
    setErrorMsg(error.response.data.message)
}
}

const formik = useFormik({
    initialValues:{
        "email":"",
        "password":"",
    },

    validationSchema,

    onSubmit: sendDataToLogin,
})




  return (
    <>
    <section className='mt-16'>
        <h2 className='my-7 text-3xl text-primary font-bold '>
            <i className='fa-regular fa-circle-user me-3'></i>
            <span>Login Now</span>
            </h2>
            <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
            <div>
                <input type="email" className='form-control w-full' placeholder='Emal'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email? (
                                <div className='text-red-600 mt-2 font-semibold'>*{formik.errors.email}</div>

            ): ""}
            </div>
            
            <div>
                <input type="password" className='form-control w-full' placeholder='password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
            {formik.errors.password && formik.touched.password ? (
                                <div className='text-red-600 mt-2 font-semibold'>*{formik.errors.password}</div>

            ): ""}
            </div>
            


            <button type='submit' className='btn-primary mt-5'>LOGIN</button>
            </form>

        
    </section>
    
    </>
  )
}
