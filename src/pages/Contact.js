import React  from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Header page="Contact" />
            <Header2 title="Contact Us" subtitle="contact" />
            <ContactSection />
            <Footer />
        </>
    );
}


export default Contact;