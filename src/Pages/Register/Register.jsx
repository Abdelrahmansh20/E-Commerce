import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from "yup"

export default function Register() {
    const [errorMsg,setErrorMsg] = useState(null);
    const navigate = useNavigate()

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

    const validationSchema = Yup.object({
        name: Yup.string().required("name is required").min(3,"name must be at least 3 charachters").max(15,"name must be at most 15 charachters"),
        email: Yup.string().required("Email is required").email("Email is not valid"),
        phone: Yup.string().required("phone is required").matches(phoneRegex, "Phone Number is not valid"),
        password: Yup.string().required("Password is required").matches(/^[A-Z][0-9a-zA-z]{5,25}$/, "Password should start with Uppercase letter"),
        rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref("password")],"Password & RePassword should be the same"),

    })



    async function sendDataToRegister(values){
        let id; 
try {
        const options = {
            url:"https://ecommerce.routemisr.com/api/v1/auth/signup",
            method: "POST",
            data: values,
        };
    
        let id = toast.loading("waiting...")
    
    
        const {data} = await axios.request(options);
        console.log(data);
    
        toast.dismiss(id);
        toast.success("User Created Successfully");


        if(data.message === "success"){
            navigate("/auth/login");
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
        "name": "",
        "email":"",
        "password":"",
        "rePassword":"",
        "phone":""
    },

    validationSchema,

    onSubmit: sendDataToRegister,
})




  return (
    <>
    <section className='mt-16'>
        <h2 className='my-7 text-3xl text-primary font-bold '>
            <i className='fa-regular fa-circle-user me-3'></i>
            <span>Register Now</span>
            </h2>
            <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
            <div>
                <input type="text" className='form-control w-full' placeholder='username'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                />
            {formik.errors.name && formik.touched.name ? (
                                <div className='text-red-600 mt-2 font-semibold'>*{formik.errors.name}</div>

            ): ""}
            </div>
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
                <input type="tel" className='form-control w-full' placeholder='Phone'
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone? (
                                <div className='text-red-600 mt-2 font-semibold'>*{formik.errors.phone}</div>

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
            <div>
                <input type="password" className='form-control w-full' placeholder='Re-password'
                name='rePassword'
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
            {formik.errors.rePassword && formik.touched.rePassword ? (
                                <div className='text-red-600 mt-2 font-semibold'>*{formik.errors.rePassword}</div>

            ): ""}
            </div>


            <button type='submit' className='btn-primary mt-5'>SIGN UP</button>
            </form>

        
    </section>
    
    </>
  )
}
