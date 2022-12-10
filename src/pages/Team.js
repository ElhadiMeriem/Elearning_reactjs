import React from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Instructors from '../components/Instructors';
import Footer from '../components/Footer';


const Team = () => {
    return (
        <>
            <Header page="Pages" />
            <Header2 title="Our team" subtitle="Team" />
            <Instructors />
            <Footer />
        </>

    );
}


export default Team;