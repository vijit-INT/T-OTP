import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import img1 from '../../assets/img1.png'
import * as Yup from 'yup'
import TextError from '../TextError'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../App.css';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils'

const UserRegister = () => {

    const navigate = useNavigate();
    const initialValues = {
        name: '',
        email: '',
        mobileNumber: ''
    }

    // Submit method will activate when Formik submit button clicked
    // In submit form section just form is loging in console  and form going to be reset

    const handleSubmit = (values, action) => {

        console.log("values", values)

        Swal.fire({
            icon: 'success',
            title: 'User data send successfully',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        }).then(() => {
            navigate('/otpVerification')
            action.resetForm();
        })


    }


      // Yup validation of Formik form 
      
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email id')
            .required('Required'),

        name: Yup.string()
            .required('Required')
            .min(2),

        mobileNumber: Yup.number()
            .required("Required")
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(1000000000, "Minimum 10 digit required")
            .max(9999999999, "Maximum 10 digit required")

    });



    return (
        <div className="mainDiv">

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}

            >
                {({
                    values,
                    errors,
                    touched,
                    isValid,
                    handleChange,
                    setFieldValue,
                    setFieldTouched,
                    submitForm,
                }) => {
                    return (
                        <Form
                            className="FormDiv"
                        >

                            <img
                                className="mainImg"
                                src={img1} />
                            <br />
                            <Field
                                type="text"
                                name='name'
                                placeholder='Enter Name'
                                className="inputTag"
                            />
                            <ErrorMessage name='name' component={TextError} />
                            <br />
                            <Field
                                type="text"
                                name='email'
                                placeholder='Enter Email'
                                className="inputTag"
                            />
                            <ErrorMessage name='email' component={TextError} />
                            <br />
                            <Field
                                type="number"
                                name='mobileNumber'
                                placeholder='Enter Mobile Number'
                                className="inputTag"
                                onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                                }}
                                value={values.mobileNumber}
                            />
                            <ErrorMessage name='mobileNumber' component={TextError} />

                            <br />
                            <button
                                onClick={() => handleSubmit}
                                type='submit'
                                className="button"

                            >
                                Submit
                            </button>

                        </Form>
                    )
                }}
            </Formik>
        </div>

    )
}

export default UserRegister