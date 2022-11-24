import React from 'react'
import { Formik, Form, Field, ErrorMessage  } from 'formik'
import TextError from '../TextError';
import * as Yup from 'yup'
import img2 from '../../assets/img2.webp'
import Swal from 'sweetalert2'
import '../../App.css';

const OtpVerification = () => {
    
    // Yup validation of Formik form 

  const validationSchema =  Yup.object({
        otp: Yup.number()
            .required('Required')
            .min(1000,"Minium 4 digit required")
    });

    // Submit method will activate when Formik submit button clicked
    // In submit form section just form is loging in console  and form going to be reset

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
    <div className="mainDiv" >
       
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form
              
            >

                <img
                    src={img2} 
                    alt={img2}
                    />
                <br />
                <Field
                    type="password"
                    name='otp'
                    placeholder='Enter Otp'
                    className="inputTag"
                    onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4)
                    }}
                />
                <ErrorMessage name='otp' component={TextError} />
                <br />
                <button
                 
                    type='submit'
                    className="button"

                >
                    Verify
                </button>

            </Form>

        </Formik>
    </div>
  )
}

export default OtpVerification