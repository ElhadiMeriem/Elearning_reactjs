import React, { Component } from 'react';
import course1 from '../Images/course-1.jpg';
import course2 from '../Images/course-2.jpg';
import course3 from '../Images/course-3.jpg';
import CourseItem from './items/CourseItem';


const courses = [
    {
        "instructor": "John Doe",
        "hour": "1.49 Hrs",
        "students": "30 Students",
        "titre": "Web Design & Development Course for Beginners",
        "img": course1,
        "price": "$149.00",
        "delay":"0.1s",
        "view" :"123"
    },
    {
        "instructor": "John Doe",
        "hour": "1.49 Hrs",
        "students": "30 Students",
        "titre": "Web Design & Development Course for Beginners",
        "img": course2,
        "price": "$149.00",
        "delay":"0.3s",
        "view" :"123"


    },
    {
        "instructor": "John Doe",
        "hour": "1.49 Hrs",
        "students": "30 Students",
        "titre": "Web Design & Development Course for Beginners",
        "img": course3,
        "price": "$149.00",
        "delay":"0.5s",
        "view" :"123"


    }
]

class CourseSection extends Component {
    render() {
        return (
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Popular Courses</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {courses.map((c,index)=>(
                            <CourseItem key={index} obj={c}/>

                       ))}
                    </div>
                </div>
            </div>


        );
    }
}

export default CourseSection;