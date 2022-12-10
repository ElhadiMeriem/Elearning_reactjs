import React from 'react';
import Aboutsection from '../components/Aboutsection';
import Header from '../components/Header';
import Services from '../components/Services';
import Instructors from '../components/Instructors';
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import CourseSection from '../components/CourseSection';

const Home = () => {
    return (
        <>
            <Header page="Home" />
            <HomeSlider />
            <Services />
            <Aboutsection />
            <CourseSection />
            <Instructors />
            <TestimonialSlider />
            <Footer />
        </>
    );
}


export default Home;