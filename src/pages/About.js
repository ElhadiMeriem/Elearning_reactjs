import React from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Services from '../components/Services';
import Aboutsection from '../components/Aboutsection';
import Instructors from '../components/Instructors';
import Footer from '../components/Footer';


const About = () => {
        return (
            <>
                <Header page="About" />
                <Header2  title="About Us" subtitle="About"/> 
                <Services />
                <Aboutsection />
                <Instructors />
                <Footer />
            </>

        );
}


export default About;