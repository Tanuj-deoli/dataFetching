import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function FormikFormOld() {


    const initialValues = {
        name: '',
        email: '',
        password: ''
    }


    const onSubmit = values => {
        console.log(values, 'form-data')
    }


    const validate = values => {
        let errors = {};
        if (!values.name) {
            errors.name = "required"
        }
        if (!values.email) {
            errors.email = "required"
        }
        if (!values.password) {
            errors.password = "required"
        }


        return errors
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required!"),
        email: Yup.string().email(" invalid email format").required("Required!"),
        password: Yup.string().min(8, "Password must be at least 8 characters long")
            .matches(/[a-zA-Z]/, "Password must contain at least one letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .required("Password is Required!")
    })



    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })
    console.log(formik.touched, "visited field")

    return (
        <div className='FormikFormPage'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='FormikForm'>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    id='name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name} />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className='errorMsg'>{formik.errors.name}</div>)
                                    : null}
                            </div>

                            <div className='FormikForm'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} />
                                {formik.touched.email && formik.errors.email ?
                                    (<div className='errorMsg'>{formik.errors.email}</div>)
                                    : null}
                            </div>

                            <div className='FormikForm'>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    id='password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password} />
                                {formik.touched.password && formik.errors.password ?
                                    (<div className='errorMsg'>{formik.errors.password}</div>)
                                    : null}
                            </div>
                            <button type='submit'> submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FormikFormOld
