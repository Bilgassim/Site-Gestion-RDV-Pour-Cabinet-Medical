import React from 'react';
import image1 from '../../../images/specialities/teath.png';
import * as fa from "react-icons/fa";
import './index.css';

const Specialites = () => {
	return (
		<section className="section section-specialities position-relative">
			<div className="container-fluid">
				<div className='mb-5 section-title text-center'>
					<h2>Notre Specialité</h2>
					<p className='m-0'>Notre expertise : des soins dentaires de pointe et une médecine générale attentive pour votre bien-être complet.</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex justify-content-center align-items-center gap-5">
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={image1} className="img-fluid" alt="" />
									<span><i><fa.FaCheckDouble/></i></span>
								</div>
								<p>Dentiste</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Specialites;