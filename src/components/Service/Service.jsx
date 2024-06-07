import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import img from '../../images/features/baby.png'
import img1 from '../../images/features/orthodontie.png'
import img2 from '../../images/features/endodontie.jpg'
import img3 from '../../images/features/parodontie.jpg'
import img4 from '../../images/features/chirurgieOrale.jpg'
import img5 from '../../images/features/dentistherie.jpg'
import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';

const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  }
  const services = [
    {
      title: "Orthodontie",
      description: "Alignement du sourire: Traitement des malocclusions dentaires pour enfants, adolescents et adultes.",
      image: img1, // Assuming the 'img' constant holds the image URL
    },
    {
      title: "Endodontie",
      description: "Dents sauvées: Traitement des infections des canaux radiculaires",
      image: img2,
    },
    {
      title: "Parodontie",
      description: "Gencives saines: Prise en charge des maladies des gencives, de la gingivite à la parodontite.",
      image: img3,
    },
    {
      title: "Implantologie",
      description: "Remplacement durable: Remplacement des dents manquantes par des implants dentaires.",
      image: img,
    },
    {
      title: "Chirurgie orale et maxillo-faciale",
      description: "Interventions chirurgicales: Traitement des pathologies de la bouche, des mâchoires et de la face.",
      image: img4,
    },
    {
      title: "Dentisterie esthétique",
      description: "Souriez avec confiance: Solutions pour améliorer l'apparence de votre sourire (blanchiment, facettes, etc.).",
      image: img5,
    },
    
    // ... add more service objects here if you want hihi
  ];
  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="Des solutions personnalisées pour répondre à vos besoins." />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {
            services.map((service, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="card shadow border-0 mb-5">
                  <img src={service.image} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>Nous sommes heureux de vous offrir le</h2>
                  <p className='form-text'>service dont vous avez besoin</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service