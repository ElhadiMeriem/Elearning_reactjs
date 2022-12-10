import React, { Component } from 'react';
import course1 from '../Images/course-1.jpg';
import course2 from '../Images/course-2.jpg';
import course3 from '../Images/course-3.jpg';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Quick Link</h4>
                            <a className="btn btn-link" href="/">About Us</a>
                            <a className="btn btn-link" href="/">Contact Us</a>
                            <a className="btn btn-link" href="/">Privacy Policy</a>
                            <a className="btn btn-link" href="/">Terms &amp; Condition</a>
                            <a className="btn btn-link" href="/">FAQs &amp; Help</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-twitter" /></a>
                                <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-youtube" /></a>
                                <a className="btn btn-outline-light btn-social" href="/"><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Gallery</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={course1} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={course2} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={course3} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={course1} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={course2} alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src={course3} alt=""  />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;