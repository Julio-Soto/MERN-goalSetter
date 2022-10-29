import React from "react";
import { useState } from "react";
import {FaUser} from 'react-icons/fa'

function Login() {
    const [formData, setFormData]  = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.table(formData)
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    const {email,password} = formData

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser/> Login
                </h1>
                <p>Enter Your Email and Password</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name='email' value={email} placeholder='Enter Your Email' onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name='password' value={password} placeholder='Enter Your password' onChange={onChange} />
                    </div>

                    <div className="form-group">
                        <button type='submit' className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login