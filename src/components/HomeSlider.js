import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { Component } from 'react';
import bg1 from "../img/carousel-1.jpg";
import bg2 from "../img/carousel-2.jpg";

class HomeSlider extends Component {
    render() {
        return (
            <div className="container-fluid p-0 mb-5">
                <OwlCarousel
                    className="header-carousel position-relative"
                    items={1}
                    autoplay
                    loop
                    nav
                >
                    <div className="item">
                        <div className="position-relative">
                            <img className="img-fluid" src={bg1} alt="" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                            <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                            <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="position-relative">
                            <img className="img-fluid" src={bg2} alt="" />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                            <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                            <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                            <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

        );
    }
}

export default HomeSlider;