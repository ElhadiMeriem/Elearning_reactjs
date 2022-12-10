import React  from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary"><i className="fa fa-book me-3" />eLEARNING</h2>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className={props.page === "Home" ? "nav-item nav-link active" : "nav-item nav-link"}>Home</Link>
                    <Link to="/about" className={props.page === "About" ? "nav-item nav-link active" : "nav-item nav-link"}>About</Link>
                    <Link to="/course" className={props.page === "Courses" ? "nav-item nav-link active" : "nav-item nav-link"}>Courses</Link>
                    <div className="nav-item dropdown">
                        <a href="/" className={props.page === "Pages" ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to="/team" className="dropdown-item">Our Team</Link>
                            <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                            <Link to="/404" className="dropdown-item">404 Page</Link>
                        </div>
                    </div>
                    <Link to="/contact" className={props.page === "Contact" ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</Link>
                </div>
                <a href="/" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></a>
            </div>
        </nav>
    );
}

export default Header;