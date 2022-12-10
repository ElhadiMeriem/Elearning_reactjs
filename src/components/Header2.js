import React, { Component } from 'react';

class Header2 extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">{this.props.title}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="/">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">{this.props.subtitle}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header2;