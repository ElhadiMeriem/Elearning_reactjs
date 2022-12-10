import React, { Component } from 'react';

class ServiceItem extends Component {
    render() {
        return (
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={this.props.obj.delay}>
                <div className="service-item text-center pt-3">
                    <div className="p-4">
                        <i className={'fa fa-3x ' + this.props.obj.icon + ' text-primary mb-4'} />
                        <h5 className="mb-3">{this.props.obj.title}</h5>
                        <p>{this.props.obj.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceItem;