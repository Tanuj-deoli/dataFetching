import React from 'react'
import { useForm } from 'react-hook-form'
import Loader from './Loader'
import { Container } from 'react-bootstrap'

function FormExample() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm()

    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d * 1000)
        })
    }

    const onSubmit = async (data) => {
        await delay(2)
        console.log(data)
    }

    return (
        <Container>
            <div className='ReactHookForm'>
                {isSubmitting && <div>Loading.....</div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("userName", { required: { value: true, message: 'This Field is required' }, minLength: { value: 3, message: 'min length is 3' }, maxLength: { value: 8, message: 'max length is 8' } })}
                        placeholder='username'
                        type='text'
                    />
                    {errors.userName && <div>{errors.userName.message}</div>}
                    <input
                        {...register("password", { required: true, minLength: { value: 8, message: 'min length is 3' } })}
                        placeholder='password'
                        type='password'
                    />
                    {errors.password && <div>{errors.password.message}</div>}
                    <input disabled={isSubmitting} type="submit" />
                </form>
            </div>
        </Container>
    )
}

export default FormExample
