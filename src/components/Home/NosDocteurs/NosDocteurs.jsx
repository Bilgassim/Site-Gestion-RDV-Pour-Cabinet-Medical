import React from 'react';
import './NosDocteurs.css';
import HalimaImage from '../../../images/img/Halima.jpg';
import JamalImage from '../../../images/img/Jamal.jpg'; 

function NosDocteurs() {
  const doctorsData = [
    {
      name: 'Jamal Hafid',
      specialty: 'Médecine Générale',
      image: JamalImage, 
      bio: 'Médecin généraliste expérimenté, passionné par la santé de ses patients et soucieux de leur bien-être.'
    },
    {
      name: 'Halima Ortügrul',
      specialty: 'Dentiste',
      image: HalimaImage, 
      bio: 'Dentiste spécialisé dans les soins dentaires complets, avec une approche douce et attentionnée.'
    }
  ];

  return (
    <section className="nos-docteurs">
      <h2>Notre Équipe Médicale</h2>
      <div className="docteurs-container">
        {doctorsData.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.image} alt={`Dr. ${doctor.name}`} />
            <h3>Dr. {doctor.name}</h3>
            <p className="specialty">{doctor.specialty}</p>
            <p className="bio">{doctor.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NosDocteurs;
