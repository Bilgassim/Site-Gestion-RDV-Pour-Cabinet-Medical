import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import Specialites from '../Specialites/Specialites';
import NosDocteurs from '../NosDocteurs/NosDocteurs';
import Availabe from '../AvailableFeatures/Available';
import HeroSection from '../HeroSection/HeroSection';
import InfoPage from '../InfoPage/InfoPage';
import Header from '../../Shared/Header/Header';
import Service from '../Services/Service';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <InfoPage />
            <Service />
            <Specialites />
            <NosDocteurs />
            <Blog />
            <Availabe />
            <Testimonial />
            <Gallery/>
            <Footer />
        </>
    );
};

export default Home;