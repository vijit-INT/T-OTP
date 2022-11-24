import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from "./UserRegister.module.css"
import img1 from '../../assets/img1.png'
import * as Yup from 'yup'
import TextError from '../TextError'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const UserRegister = () => {
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        email: '',
        mobileNumber: ''
    }

    const handleSubmit = (values, action) => {

        console.log("values", values)
       
        Swal.fire({
            icon: 'success',
            title: 'User data send successfully',
            confirmButtonText: 'OK',
            allowOutsideClick: false
          }).then(()=>{
            navigate('/otpVerification')
            action.resetForm();
          })
       
       
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email id')
            .required('Required'),

        name: Yup.string()
            .required('Required')
            .min(2),

        mobileNumber: Yup.number()
            .required("Required")
            .max(9999999999, "<Mobile Number must be equal to 10 digit")
            .min(1000000000, "Mobile Number must  be equal to 10 digit")

    });

    return (
        <div className={styles.mainDiv}>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form
                    className={styles.FormDiv}
                >

                    <img
                        className={styles.mainImg}
                        src={img1} />
                    <br />
                    <Field
                        type="text"
                        name='name'
                        placeholder='Enter Name'
                        className={styles.inputTag}
                    />
                    <ErrorMessage name='name' component={TextError} />
                    <br />
                    <Field
                        type="text"
                        name='email'
                        placeholder='Enter Email'
                        className={styles.inputTag}
                    />
                    <ErrorMessage name='email' component={TextError} />
                    <br />
                    <Field
                        type="number"
                        name='mobileNumber'
                        placeholder='Enter Mobile Number'
                        className={styles.inputTag}
                    />
                    <ErrorMessage name='mobileNumber' component={TextError} />

                    <br />
                    <button
                        onClick={() => handleSubmit}
                        type='submit'
                        className={styles.button}

                    >
                        Submit
                    </button>

                </Form>

            </Formik>
        </div>

    )
}

export default UserRegister