import React, { Component } from 'react';

class TestimonialItem extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src={this.props.obj.img} style={{ width: 80, height: 80 }} alt="" />
                    <h5 className="mb-0">{this.props.obj.name}</h5>
                    <p>{this.props.obj.subtitle}</p>
                    <div className="testimonial-text bg-light text-center p-4">
                        <p className="mb-0">{this.props.obj.designation}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestimonialItem;