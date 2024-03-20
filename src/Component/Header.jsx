import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='bg-body-tertiary py-2'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4" >BOOK_STORE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 fs-5 font-monospace ">
                            <li className="nav-item me-5">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} aria-current="page" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item me-5 ">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} aria-current="page" to="/contact">Contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} aria-current="page" to="/about">About</NavLink>
                            </li>

                        </ul>
                    </div>

                    <div className='d-flex'>
                        <ul className="navbar-nav mb-2 mb-lg-0 fs-5 font-monospace ">
                            <li className="nav-item ">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} aria-current="page" to="/login">Login</NavLink>
                            </li>

                            <li className="nav-item  ">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} aria-current="page" to="">/</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} aria-current="page" to="/signup">SignUp</NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
