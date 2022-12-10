import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

class ContactSection extends Component {
    render() {
        return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <ContactInfo />
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <iframe title="formulaire" className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 300, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0}>
                            </iframe>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>


        );
    }
}

export default ContactSection;