import React from 'react';
import './InfoPage.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InfoPage = () => {
    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Ce qui nous distingue</h3>
                            <p>
                            Chez Mer7ba Doc, nous plaçons votre bien-être au cœur de notre pratique médicale. Nous vous offrons :
                                <ul>
                                    <li>Une équipe médicale expérimentée et passionnée, dédiée à votre santé.</li>
                                    <li>Une approche personnalisée, où chaque patient est unique.</li>
                                    <li>Des soins de qualité, dans un environnement moderne et accueillant.</li>
                                    <li>Un accès facilité à votre dossier médical, pour une transparence totale.</li>
                                    <li>Des tarifs transparents et compétitifs, pour des soins accessibles à tous.</li>
                                </ul>
                            </p>
                            <div className="text-center">
                                <Link href="/" className="more-btn">Apprendre plus <i className="bx bx-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Rendez-vous</h4>
                                        <small className='text-secondary'>24 Heures de Service</small>
                                        <p>Plus besoin d'attendre au téléphone ou de vous déplacer. Avec notre plateforme de prise de rendez-vous en ligne, réservez votre consultation en quelques clics, à l'heure qui vous convient, 24 heures sur 24, 7 jours sur 7.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHeadset className="icon"/>
                                        <h4>Cas d'urgence</h4>
                                        <h6 className='text-secondary'>+212 710911949</h6>
                                        <p>Ne prenez pas de risque avec votre santé. En cas d'urgence, appelez-nous sans attendre au +212 710911949. Nous sommes prêts à intervenir rapidement pour vous apporter les soins nécessaires.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaClock className="icon"/>
                                        <h4>Heures de travail</h4>
                                        <small className='text-secondary'>Emploi de temps</small>
                                        <ul className='list-group list-group-flush'>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Dim - Mer : </p> <p>8:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Mar - Ven : </p> <p>9:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sam - Dim : </p> <p>10:00 - 17: 00</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoPage