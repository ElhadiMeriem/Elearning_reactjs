import React, { Component } from 'react';

class InsctructorItem extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={this.props.obj.delay}>
                <div className="team-item bg-light">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={this.props.obj.img} alt =""/>
                    </div>
                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                        <div className="bg-light d-flex justify-content-center pt-2 px-1">
                            <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-sm-square btn-primary mx-1" href="/"><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <h5 className="mb-0">{this.props.obj.name}</h5>
                        <small>{this.props.obj.designation}</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default InsctructorItem;