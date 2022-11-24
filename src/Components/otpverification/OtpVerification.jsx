import React from 'react'
import { Formik, Form, Field, ErrorMessage  } from 'formik'
import TextError from '../TextError';
import * as Yup from 'yup'
import img2 from '../../assets/img2.webp'
import styles from './OtpVerification.module.css'
import Swal from 'sweetalert2'

const OtpVerification = () => {
  const validationSchema =  Yup.object({
        otp: Yup.number()
            .required('Required')
            .min(1000,"Minium 4 digit required")
            .max(9999,"maximum 4 digit required"),

       

    });
    const onSubmit = (values, action) => {
      console.log(values)
      Swal.fire({
        icon: 'success',
        title: 'Data Added successfully',
        confirmButtonText: 'OK',
        allowOutsideClick: false
      })
      action.resetForm();
    }

    const initialValues = {
        otp:''
    }
  return (
    <div className={styles.mainDiv} >
       
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form
              
            >

                <img
                    //className={styles.mainImg}
                    src={img2} 
                    alt={img2}
                    />
                <br />
                <Field
                    type="password"
                    name='otp'
                    placeholder='Enter Otp'
                    className={styles.inputTag}
                />
                <ErrorMessage name='otp' component={TextError} />
                <br />
                <button
                 
                    type='submit'
                    className={styles.button}

                >
                    Verify
                </button>

            </Form>

        </Formik>
    </div>
  )
}

export default OtpVerification