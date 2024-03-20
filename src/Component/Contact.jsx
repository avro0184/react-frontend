import React from 'react'
import { Link } from 'react-router-dom'
import "../Assets/Css/Contact.css"
import map from "../../src/Assets/Image/Icon/map.png"
import email from "../../src/Assets/Image/Icon/gmail.png"
import phone from "../../src/Assets/Image/Icon/smartphone.png"

export default function Contact() {
    return (
        <>
            <section id="contact" class="contact font-monospace ">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <p style={{ fontSize: "40px", textAlign: "center" }}>Contact Us</p>
                    </div>

                    <div>
                        <iframe style={{ border: "0px", width: "100%", height: "270px" }}
                            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3659.9731402395105!2d91.18140285056676!3d23.461433334657695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d23.4613549!2d91.1833819!4m3!3m2!1d23.4615559!2d91.18340529999999!5e0!3m2!1sen!2sbd!4v1678513770172!5m2!1sen!2sbd"
                            frameborder="0" allowfullscreen title="Location" />
                    </div>

                    <div class="row mt-5">

                        <div class="col-lg-4">
                            <div class="info" style={{ padding: "20px" }} >
                                <div class="address">
                                    <Link to="https://goo.gl/maps/YB3s1ye7sqnk2ae18" target="_blank"><i class="bi bi-phone"><img src={map} alt="" style={{ height: "30px" }} /></i></Link>

                                    <h4>Location:</h4>
                                    <p>Rajgonj, comilla, Bangladesh</p>
                                </div>

                                <div class="email">
                                    <Link to="mailto:jahidji0188@gmail.com"><i class="bi bi-phone"><img src={email} alt="" style={{ height: "30px" }} /></i></Link>
                                    <h4>Email:</h4>
                                    <Link to="mailto:jahidji0188@gmail.com" style={{ color: "black", marginLeft: "10px", textDecoration: "none" }}>jahidji0188@gmail.com</Link>
                                </div>

                                <div class="phone" style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Link to="tel:+8801884689484"><i class="bi bi-phone"><img src={phone} alt="" style={{ height: "30px" }} /></i></Link>
                                    <h4>Call:</h4>
                                    <Link to="tel:+8801884689484" style={{ color: "black", marginLeft: "10px", textDecoration: "none" }}><span>+880-1884689484</span></Link>
                                </div>

                            </div>

                        </div>

                        <div class="col-lg-8 mt-5 mt-lg-0" id="contact-form-section">

                            <form action="" method="post" class="php-email-form" style={{ padding: "20px" }}>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email : name@gmail.com"
                                            required />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="description" rows="5" placeholder="Message" required></textarea>
                                </div>

                                <div class="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>



    )
}
