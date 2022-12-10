import React, { Component } from 'react';
import ServiceItem from './items/ServiceItem';

const services = [
    {
        "icon": "fa-graduation-cap",
        "title": "Skilled Instructors",
        "description": "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        "delay" : "0.1s"

    },
    {
        "icon": "fa-globe",
        "title": "Online Classes",
        "description": "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        "delay" : "0.3s"


    },
    {
        "icon": "fa-home",
        "title": "Home Projects",
        "description": "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        "delay" : "0.5s"

    },
    {
        "icon": "fa-book-open",
        "title": "Book Library",
        "description": "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        "delay" : "0.7s"


    }
]

class Services extends Component {
    render() {
        return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                     {services.map((s,index)=>(   
                       <ServiceItem  key={index} obj={s} />       
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

export default Services;