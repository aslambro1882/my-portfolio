import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <About />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;