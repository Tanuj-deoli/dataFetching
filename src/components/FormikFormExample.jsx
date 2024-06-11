import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

function FormikForm() {


    const initialValues = {
        name: '',
        email: '',
        password: '',
        comments: '',
        Address: '',
        social: {
            faceBook: '',
            instagram: ''
        },
        phoneNum: ['', ''],
        phnumber: [''],
    }


    const onSubmit = values => {
        console.log(values, 'form-data')
    }


    const validationSchema = Yup.object({
        name: Yup.string().required("Required!"),
        email: Yup.string().email(" invalid email format").required("Required!"),
        password: Yup.string().min(8, "Password must be at least 8 characters long")
            .matches(/[a-zA-Z]/, "Password must contain at least one letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .required("Password is Required!"),
        comments: Yup.string().required('comments is Required!'),
        // Address: Yup.string().required('Address is Required!')
    })


    return (
        <div className='FormikFormPage'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            <Form>
                                <div className='FormikForm'>
                                    <label htmlFor="name">Name</label>
                                    <Field
                                        type="text"
                                        name='name'
                                        id='name'
                                    />
                                    <ErrorMessage name='name' render={msg => <div className='errorMsg'>{msg}</div>} />
                                </div>

                                <div className='FormikForm'>
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        name='email'
                                        id='email'
                                    />
                                    <ErrorMessage name='email' render={msg => <div className='errorMsg'>{msg}</div>} />
                                </div>

                                <div className='FormikForm'>
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name='password'
                                        id='password'
                                    />
                                    <ErrorMessage name='password' render={msg => <div className='errorMsg'>{msg}</div>} />
                                </div>
                                <div className='FormikForm'>
                                    <label htmlFor="Address">Address</label>
                                    <Field id='Address' name='Address'>
                                        {(props) => {
                                            const { field, form, meta } = props
                                            // console.log('Render props', props)
                                            return (
                                                <div>
                                                    <input id='Address' className='w-100'  {...field} />
                                                    {meta.touched && meta.error ? <div className='errorMsg'>{meta.error}</div> : null}
                                                </div>
                                            )
                                        }
                                        }
                                    </Field>
                                </div>

                                {/* nested object  */}

                                <div className='FormikForm'>
                                    <label htmlFor="FaceBook">FaceBook</label>
                                    <Field type="text" name='social.faceBook' id='FaceBook' />
                                </div>
                                <div className='FormikForm'>
                                    <label htmlFor="Instagram">Instagram</label>
                                    <Field type="text" name='social.instagram' id='Instagram' />
                                </div>

                                {/* array  */}
                                <div className='FormikForm'>
                                    <label htmlFor="primeryph">Primery Phone Number</label>
                                    <Field type="number" name='phoneNum[0]' id='primeryph' />
                                </div>
                                <div className='FormikForm'>
                                    <label htmlFor="Secondaryph">Secondary Phone Number</label>
                                    <Field type="number" name='phoneNum[1]' id='Secondaryph' />
                                </div>


                                {/* array  */}
                                <div className='FormikForm'>
                                    <label htmlFor="phnumber">List of Phone Number</label>
                                    <FieldArray name='phnumber'>
                                        {
                                            (FieldArrayProps) => {
                                                console.log(FieldArrayProps, 'FieldArrayProps')
                                                const { form, push, remove } = FieldArrayProps
                                                const { values } = form
                                                const { phnumber } = values
                                                return <div>
                                                    {phnumber.map((phnum, index) => (
                                                        <div key={index} className='FieldArrayInput'>
                                                            <Field name={`phnumber[${index}]`} />
                                                            {
                                                                index > 0 &&
                                                                <button type='button' onClick={() => { remove(index) }}> -</button>

                                                            }
                                                            <button type='button' onClick={() => { push('') }}>+</button>
                                                        </div>
                                                    ))}
                                                </div>
                                            }
                                        }
                                    </FieldArray>
                                </div>




                                <div className='FormikForm'>
                                    <label htmlFor="password">comments</label>
                                    <Field
                                        as='textarea'
                                        name='comments'
                                        id='comments'
                                    />
                                    <ErrorMessage name='comments' render={msg => <div className='errorMsg'>{msg}</div>} />
                                </div>
                                <button type='submit'> submit</button>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
                <Link to={'/Oldformik'}>Oldformik</Link>
            </Container>
        </div>
    )
}

export default FormikForm
