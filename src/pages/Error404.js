import React from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Error from '../components/Error';
import Footer from '../components/Footer';


const Error404 = () => {
    return (
        <>
            <Header page="Pages" />
            <Header2 title="Not Found" subtitle="404" />
            <Error />
            <Footer />
        </>


    );
}


export default Error404;