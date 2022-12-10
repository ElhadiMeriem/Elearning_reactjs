import React, { Component } from 'react';
import team1 from '../Images/team-1.jpg';
import team2 from '../Images/team-2.jpg';
import team3 from '../Images/team-3.jpg';
import team4 from '../Images/team-4.jpg';

import InstructorItem from './items/InstructorItem';

const instructors = [
    {
        "name":"Instructor Name",
        "img": team1,
        "designation":"Designation",
        "delay":"0.1s"

    },
    {
        "name":"Instructor Name",
        "img":team2,
        "designation":"Designation",
        "delay":"0.3s"

    },
    {
        "name":"Instructor Name",
        "img": team3,
        "designation":"Designation",
        "delay":"0.5s"

    },
    {
        "name":"Instructor Name",
        "img": team4,
        "designation":"Designation",
        "delay":"0.7s"

    }
]
class Instructors extends Component {
    render() {
        return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                        <h1 className="mb-5">Expert Instructors</h1>
                    </div>
                    <div className="row g-4">   
                    {instructors.map((i,index)=>(
                           <InstructorItem key={index} obj={i} />
                        ))}                  
                    </div>
                </div>
            </div>


        );
    }
}

export default Instructors;