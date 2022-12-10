import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import testimonial1 from '../Images/testimonial-1.jpg';
import testimonial2 from '../Images/testimonial-2.jpg';
import testimonial3 from '../Images/testimonial-2.jpg';
import testimonial4 from '../Images/testimonial-2.jpg';
import TestimoialItem from './items/TestimonialItem';



const testimonials = [
    {
        "name": "Client Name",
        "subtitle": "Profession",
        "img": testimonial1,
        "designation": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",


    },
    {
        "name": "Client Name",
        "subtitle": "Profession",
        "img": testimonial2,
        "designation": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",


    },
    {
        "name": "Client Name",
        "subtitle": "Profession",
        "img": testimonial3,
        "designation": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",


    },
    {
        "name": "Client Name",
        "subtitle": "Profession",
        "img": testimonial4,
        "designation": "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",

    }
]
class TestimonialSlider extends Component {
    render() {
        return (
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                        <h1 className="mb-5">Our Students Say!</h1>
                    </div>
                    <OwlCarousel
                        className="testimonial-carousel position-relative"
                        items={3}
                        autoplay
                    >
                        <div className="item">
                            {testimonials.map((t, index) => (
                                <TestimoialItem key={index} obj={t} />
                            ))}
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default TestimonialSlider;