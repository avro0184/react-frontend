import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [ischeck, setischeck] = useState(false)
    // useEffect(() => {
    //     if (token) {
    //         const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRATE)
    //         console.log(user)
    //     }
    // }, [])

    async function LoginForm(event) {
        event.preventDefault();
        try {
            axios.post("http://localhost:5000/api/user/login", { email, password, ischeck })
                .then((e) => {
                    if (e.data) {
                        swal({
                            title: "Good job!",
                            text: e.data.accessToken,
                            icon: "info",
                            button: "ok",
                        });
                    } else {
                        alert("Nouser")
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        alert(error.response.data.message);
                    } else {
                        console.error('Network or request error:', error.message);
                    }
                });
        } catch (err) {
            console.log(err)
        }

    }



    return (
        <div className='bg-body-tertiary p-5 font-monospace fs-5'>
            <section className="">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={LoginForm}>
                                <div className="form-outline mb-4">
                                    <input value={email} onChange={e => setemail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input value={ischeck} onChange={(e) => setischeck(!ischeck)} className="form-check-input me-2" type="checkbox" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="" className="text-body text-decoration-none">Forgot password?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                                        className="link-danger">Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
