import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>Mer7ba Doc</small>
                    <h1>Votre Bien-être <br />Notre Priorité</h1>
                    <small>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Commencer</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Prendre un rdv</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;