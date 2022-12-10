import React from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';


const Testimonial = () => {
    return (
        <>
            <Header page="Pages" />
            <Header2 title="Testimonial" subtitle="Testimonial" />
            <TestimonialSlider />
            <Footer />
        </>
    );
}


export default Testimonial;