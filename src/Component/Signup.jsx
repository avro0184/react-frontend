import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [number, setnumber] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    async function RegisterForm(event) {
        event.preventDefault();
        try {
            axios.post("http://localhost:5000/api/signup", { email, number, password, confirmPassword })
                .then((res) => {
                    console.log('Response:', res);
                    if (res.status === 200) {
                        alert('Success: User created successfully');
                    } else {
                        alert('Error: ' + res.status);
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        alert('Error: ' + error.response.data.message);
                    } else {
                        console.error('Network or request error:', error.message);
                    }
                });
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className='bg-body-tertiary p-1'  >
            <div className='container font-monospace '>
                <section className="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 text-black p-0 "  >

                                <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                    <form style={{ width: "23rem" }} onSubmit={RegisterForm}>

                                        <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign Up</h3>

                                        <div className="form-outline mb-4">
                                            <input value={email} onChange={e => setemail(e.target.value)} type="email" className="form-control form-control-lg" placeholder='Enter your email.....' required />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input value={number} onChange={e => setnumber(e.target.value)} type="text" className="form-control form-control-lg" placeholder='Enter your phone number.....' required />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input value={password} onChange={e => setpassword(e.target.value)} type="password" className="form-control form-control-lg" placeholder='Enter your password.....' required />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} type="password" className="form-control form-control-lg" placeholder='Re-type your password.....' required />
                                        </div>

                                        <div className=" mb-4 d-flex justify-content-between">
                                            <button className="btn btn-info btn-lg btn-block" type="submit">Submit</button>
                                            <p className="pb-lg-2 fs-5"><Link to="/login" className="text-muted text-decoration-none">Forgot password?</Link></p>
                                        </div>

                                        <div className="text-center text-lg-start ">
                                            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/signup"
                                                className="link-danger text-decoration-none">Login</Link></p>
                                        </div>


                                    </form>

                                </div>

                            </div>
                            <div className="col-sm-6 px-0 d-none d-sm-block position-relative"  >
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img2.webp"
                                    alt="" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left", maxHeight: "600px", borderRadius: "50px" }} />
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div >
    )
}
