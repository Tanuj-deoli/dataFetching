import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Field, Form } from 'react-final-form'
// import { FieldArray } from 'react-final-form-arrays'

function FinalForm() {
    const [submissions, setSubmissions] = useState([])

    const handleSubmit = (value, form) => {
        console.log(value, 'handleSubmit')

        const newSubmission = [...submissions, value]
        localStorage.setItem('submission', JSON.stringify(newSubmission))

        setSubmissions(newSubmission)
        form.restart();

    }
    useEffect(() => {
        const GetData = localStorage.getItem('submission')
        if (GetData) {
            setSubmissions(JSON.parse(GetData))
        }
    }, [])

    // const ClearLocalStore = localStorage.clear()
    console.log(submissions, 'submissions')

    const validate = (value) => {
        // console.log(value, 'validate')
        let error = {}
        if (!value.firstname) {
            error.firstname = 'Required'
        }
        if (!value.email) {
            error.email = 'Required'
        }
        if (!value.password) {
            error.password = 'Required'
        }
        return error;
    }
    return (
        <div className='GetUserAndComment FinalForm'>
            <Container>
                <Form
                    onSubmit={handleSubmit}
                    validate={validate}
                    render={({ handleSubmit, form }) => (
                        <form onSubmit={handleSubmit}>
                            <h2>React-Final Form</h2>
                            <Row>
                                <div className='col-md-4'>
                                    <Field name='firstname'>
                                        {({ input, meta }) => (
                                            <div className='FieldInner'>
                                                <label htmlFor="name">first-name</label>
                                                <input {...input} type="text" />
                                                {meta.touched && meta.error && <span className='error-msg'>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div className='col-md-4'>
                                    <Field name='email'>
                                        {({ input, meta }) => (
                                            <div className='FieldInner'>
                                                <label htmlFor="email">email</label>
                                                <input {...input} type="email" />
                                                {meta.touched && meta.error && <span className='error-msg'>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div className='col-md-4'>
                                    <Field name='password'>
                                        {({ input, meta }) => (
                                            <div className='FieldInner'>
                                                <label htmlFor="password">password</label>
                                                <input {...input} type="password" />
                                                {meta.touched && meta.error && <span className='error-msg'>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                {/* <div className="col-md-4">
                                    <Field>
                                        {props => (
                                            <div>
                                                <input {...props.input} />
                                                {console.log(props)}
                                            </div>

                                        )}
                                    </Field>
                                </div> */}
                                <div className="col-md-4">
                                    <label htmlFor="">list of Phone number</label>
                                    {/* <FieldArray>
                                        {(props) => {
                                            console.log(props)
                                            return <div>hlo</div>
                                        }}

                                    </FieldArray> */}
                                </div>

                            </Row>
                            <button type='submit' className=''>submit</button>
                        </form >
                    )
                    }
                />
                {
                    submissions.length > 0 && <div className='SubmittedData'>
                        <h2>Submitted Data</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissions.map((submission, index) => (
                                    <tr key={index}>
                                        <td>{submission.firstname}</td>
                                        <td>{submission.email}</td>
                                        <td>{submission.password}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </Container >
        </div >
    )
}

export default FinalForm
