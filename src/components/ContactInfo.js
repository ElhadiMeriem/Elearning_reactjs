import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <h5>Get In Touch</h5>
                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                <div className="d-flex align-items-center mb-3">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                        <i className="fa fa-map-marker-alt text-white" />
                    </div>
                    <div className="ms-3">
                        <h5 className="text-primary">Office</h5>
                        <p className="mb-0">123 Street, New York, USA</p>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                        <i className="fa fa-phone-alt text-white" />
                    </div>
                    <div className="ms-3">
                        <h5 className="text-primary">Mobile</h5>
                        <p className="mb-0">+012 345 67890</p>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                        <i className="fa fa-envelope-open text-white" />
                    </div>
                    <div className="ms-3">
                        <h5 className="text-primary">Email</h5>
                        <p className="mb-0">info@example.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;