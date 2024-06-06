import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer position-relative">
			<div className="footer-top">
				<div className="container-fluid">
					<div className="row">
						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-about">
								<div className="footer-logo">
									<Link to={'/'}>
										<img src={logo} alt="logo" style={{ maxWidth: '160px' }} />
									</Link>
								</div>
								<div className="footer-about-content">
									<p className='form-text' style={{maxWidth:200}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
								</div>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-menu">
								<h2 className="footer-title">Pour les patients</h2>
								<ul>
									<li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Rechercher des médecins</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  Se connecter</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  S'enregistrer</Link></li>
									<li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Réservation</Link></li>
									<li><Link to={'/'}><FaAngleDoubleRight className='icon' />  Tableau de bord des patients</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">

							<div className="footer-widget footer-menu">
								<h2 className="footer-title">Pour les médecins</h2>
								<ul>
									<li><Link to={'/'}><FaAngleDoubleRight className='icon' /> Rendez-vous</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' /> Se connecter</Link></li>
									<li><Link to={'/register'}><FaAngleDoubleRight className='icon' /> S'enregistrer</Link></li>
									<li><Link to={'/dashboard'}><FaAngleDoubleRight className='icon' /> Tableau de bord du médecin</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-contact">
								<h2 className="footer-title mt-3 mt-md-0">Contactez-nous </h2>
								<div className="footer-contact-info">
									<div className="footer-address">
										<span><i className="fas fa-map-marker-alt"></i></span>
										<p> AlQods<br /> Oujda, Maroc </p>
									</div>
									<p>
										<i className="fas fa-phone-alt"></i>
										+212 710911949
									</p>
									<p className="mb-0">
										<i className="fas fa-envelope"></i>
										boulkassoum2002@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container-fluid">

					<div className="copyright">
						<div className="row">
							<div className="col-md-6 col-lg-6">
								<div className="copyright-text">
									<p className="mb-0"><a href="templateshub.net">
										<div className="copyRight text-center">
											<p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
										</div></a></p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								<div className="copyright-menu">
									<ul className="policy-menu d-flex gap-2 justify-content-center">
										<Link to={'/'} className='text-white'>Terms and Conditions</Link>
										<Link to={'/'} className='text-white'>Policy</Link>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</footer>
	);
};

export default Footer;