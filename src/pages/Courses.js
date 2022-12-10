import React  from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import CourseSection from '../components/CourseSection';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';

const Courses = () => {
    return (
        <>
            <Header page="Courses" />
            <Header2 title="Courses" subtitle="Courses" />
            <CourseSection />
            <TestimonialSlider />
            <Footer />
        </>
    );
}


export default Courses;