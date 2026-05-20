import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

const Formik = () => {
    const PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
          username:yup.string().min(3,"username should not be less than 3 character").max(30,"username has exceeded limit of 30 characters").required("username is required"),
          email:yup.string().email("Must be a valid email address").required("email is required"),
          password:yup.string().min(8, "password should not be less than 8 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,"password should include number and letters").required("password is required")
        }),
        onSubmit:(value)=>{
          console.log(value);
          formik.setValues({
            email:"",
            username:"",
            password:""
          })
        }
    })
    console.log(formik.errors);
    console.log(formik.touched);
    
  return (
    <div>
        <form className='py-3 px-3 mx-auto w-50 shadow-md' onSubmit={formik.handleSubmit} action="">
        <input value={formik.values.username} onBlur={formik.handleBlur} className='form-control mt-3' name='username' onChange={formik.handleChange} type="text" />
        <small className='text-danger fs-6'>{formik.touched.username && formik.errors.username}</small>
        <input value={formik.values.email} onBlur={formik.handleBlur}   className='form-control mt-3' name='email' onChange={formik.handleChange} type="text" />
        <small className='text-danger fs-6'>{formik.touched.email && formik.errors.email}</small>
        <input value={formik.values.password} onBlur={formik.handleBlur}   className='form-control mt-3' name='password' onChange={formik.handleChange} type="text" />
        <small className='text-danger fs-6'>{formik.touched.password && formik.errors.password}</small>
        <button className='mt-3 btn btn-dark' type='submit' >submit</button>
        </form>
    </div>
  )
}

export default Formik