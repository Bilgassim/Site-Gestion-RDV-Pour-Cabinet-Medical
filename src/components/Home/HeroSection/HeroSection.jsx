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
                    <small>Chez Mer7ba Doc, nous croyons en une relation médecin-patient basée sur la confiance, l'écoute et le respect. <br /> Votre santé est notre mission, et nous nous engageons à vous offrir des soins adaptés à vos besoins spécifiques.</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Prendre un rdv</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;