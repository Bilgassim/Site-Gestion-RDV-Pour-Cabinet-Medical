import React from 'react'
import './index.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '../../images/doc/doctor 5.jpg'
import img from '../../images/logo.png'
import SubHeader from '../Shared/SubHeader';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { Empty, message } from 'antd';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { useGetDoctorsQuery } from '../../redux/api/doctorApi';
import HalimaImage from '../../images/img/Halima.jpg';
import JamalImage from '../../images/img/Jamal.jpg'; 

const medecins = [
    {
        name: 'Jamal Hafid',
        specialty: 'Médecine Générale',
        image: JamalImage, 
        bio: [
            "**Formation médicale au Maroc :** Jamal a obtenu son diplôme de médecine à l'Université Mohammed VI des Sciences de la Santé à Casablanca. Il a ensuite effectué son internat dans un hôpital public de Marrakech, où il a acquis une expérience précieuse dans la prise en charge de diverses pathologies.",
            "**Spécialisation en médecine familiale :** Passionné par la relation médecin-patient et la prise en charge globale de la santé, Jamal a choisi de se spécialiser en médecine familiale. Il a suivi une formation complémentaire à l'Université Mohammed V de Rabat, où il a approfondi ses connaissances en prévention, dépistage et traitement des maladies chroniques.",
            "**Installation en cabinet libéral à Oujda :** Après plusieurs années de pratique en milieu hospitalier, Jamal a décidé de s'installer en cabinet libéral à Oujda, sa ville natale. Il y exerce depuis maintenant 5 ans, et s'est forgé une solide réputation auprès de ses patients, qui apprécient sa disponibilité, son écoute et son professionnalisme.",
            "**Engagement associatif :** Soucieux de contribuer à l'amélioration de la santé de sa communauté, Jamal est également membre actif d'une association locale de prévention des maladies cardiovasculaires. Il participe régulièrement à des actions de sensibilisation et de dépistage auprès de la population."
        ] 
      },
      {
        name: 'Halima Ortügrul',
        specialty: 'Dentiste',
        image: HalimaImage, 
        bio:  [
            "**Études dentaires à Istanbul :** Halima a étudié la chirurgie dentaire à l'Université d'Istanbul, où elle a obtenu son diplôme avec mention. Elle a ensuite effectué un stage de spécialisation en implantologie et parodontologie dans une clinique privée réputée.",
            "**Expérience professionnelle en Turquie et à l'étranger :** Après avoir exercé pendant quelques années en Turquie, Halima a décidé de partir à l'étranger pour élargir ses horizons professionnels et découvrir de nouvelles cultures. Elle a travaillé pendant 2 ans dans un cabinet dentaire à Londres, puis a rejoint une équipe de dentistes humanitaires au Sénégal, où elle a prodigué des soins dentaires à des populations défavorisées.",
            "**Installation à Oujda :** De retour en Turquie, Halima a ressenti le besoin de changer d'environnement et de relever de nouveaux défis. Elle a choisi de s'installer à Oujda, attirée par la richesse culturelle de la ville et la possibilité d'y développer sa propre patientèle.",
            "**Approche holistique de la santé bucco-dentaire :** Halima accorde une grande importance à la prévention et à l'éducation de ses patients. Elle propose des soins dentaires complets, adaptés aux besoins de chacun, et s'efforce de créer une relation de confiance avec ses patients, basée sur l'écoute et le respect."
        ]
      }
    // ... autres médecins
  ];
  

const About = () => {
    const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 4 });
    const { data: doctorData, isLoading: DoctorIsLoading, isError: doctorIsError } = useGetDoctorsQuery({ limit: 4 });

    const blogData = data?.blogs;
    const doctors = doctorData?.doctors;

    let doctorContent = null;
    if (!DoctorIsLoading && doctorIsError) doctorContent = <div>Something Went Wrong !</div>
    if (!DoctorIsLoading && !doctorIsError && doctors?.length === 0) doctorContent = <div><Empty /></div>
    if (!DoctorIsLoading && !doctorIsError && doctors?.length > 0) doctorContent =
        <>
            {doctors && doctors.map((item, id) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={id + item.id}>
                    <div className="card shadow border-0 mb-5 mb-lg-0">
                        {item.img && <img src={item.img} class="img-fluid w-100" alt="" />}
                        <div className="p-2">
                            <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}><a>{item?.firstName + ' ' + item?.lastName}</a></h4>
                            <p>{item?.designation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>

    let content = null;
    if (!isLoading && isError) content = <div>{message.error('Something went Wrong!')}</div>
    if (!isLoading && !isError && blogData?.length === 0) content = <Empty />
    if (!isLoading && !isError && blogData?.length > 0) content =
        <>
            {
                blogData && blogData?.map((item, id) => (
                    <div className="col-lg-3 col-md-6" key={id + item.id}>
                        <div className="card shadow border-0 mb-5 mb-lg-0">
                            <img src={item?.img} alt="blog Image" width={300} height={200} className="w-100  rounded-top image-hover" style={{ objectFit: 'contain' }} />

                            <div className='p-2'>
                                <Link to={`/blog/${item?.id}`}>
                                    <h6 className="text-start mb-1 text-capitalize" style={{ color: '#223a66' }}>{truncate(item?.title, 40)}</h6>
                                </Link>
                                <div className="px-2">
                                    <p className="form-text text-start text-capitalize">{truncate(item?.description, 80)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    return (
      <>
        <Header />
        <SubHeader
          title="A propos de nous"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <div
          className="container"
          style={{ marginBottom: 100, marginTop: 100 }}
        >
          <div className="row p-5">
            <div className="col-lg-4">
              <div className="section-title text-center">
                <h2 className="text-uppercase">Qui sommes-nous ?</h2>
                <p className="form-text m-0">Notre Mission</p>
              </div>
              <p className="mt-3">
                Notre mission est de vous offrir une expérience dentaire
                positive et de vous aider à atteindre et à maintenir une santé
                bucco-dentaire optimale. Nous croyons que la prévention est le
                meilleur moyen d'éviter les problèmes dentaires, et nous nous
                engageons à vous fournir des conseils et des soins personnalisés
                pour vous aider à garder votre bouche saine.
              </p>
            </div>

            <div className="col-lg-8">
              <img
                src={ImageHeading}
                alt=""
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{ marginBottom: 100, marginTop: 100 }}
        >
          <div className="row">{content}</div>
        </div>

        <div
          className="container"
          style={{ marginBottom: 100, marginTop: 100 }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="mb-4 section-title text-center">
                <h2 className="text-uppercase">Rencontrez nos Medecins</h2>
                <p className="form-text m-0">
                  Notre équipe de médecins expérimentés s'engage à vous offrir
                  des soins de qualité et personnalisés.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {medecins.map((medecin, index) => (
              <div className="col-lg-6 mb-4" key={index}>
                {" "}
                {/* Chaque médecin occupe la moitié de la largeur sur les grands écrans */}
                <div className="card shadow border-0 h-100">
                  <div className="row g-0">
                    {" "}
                    {/* Utilisation de row g-0 pour supprimer l'espacement par défaut */}
                    <div className="col-md-4">
                      {" "}
                      {/* Image à gauche */}
                      <img
                        src={medecin.image}
                        className="img-fluid rounded-start h-100"
                        alt={`Dr. ${medecin.name}`}
                        style={{ objectFit: "cover" }}
                      />{" "}
                      {/* objectFit pour remplir l'espace */}
                    </div>
                    <div className="col-md-8">
                      {" "}
                      {/* Contenu à droite */}
                      <div className="card-body">
                        <h4 className="card-title" style={{ color: "#223a66" }}>
                          {medecin.name}
                        </h4>
                        <p className="card-text mb-0">{medecin.specialty}</p>
                        <p className="card-text form-text text-muted">
                          {medecin.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="container say-about"
          style={{ marginBottom: 100, marginTop: 100 }}
        >
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="mb-4 section-title text-center">
                <h2 className="text-uppercase">Ce que disent les medecins</h2>
                <p className="form-text m-0">
                  Ce que disent les autres medecins
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-6">
              <div className="my-2">
                <h4 style={{ color: "#223a66" }} className="my-0">
                  Amazing service !
                </h4>
                <span>Ait Haddou Mbarak</span>
              </div>
              <p className="form-text">
                "Je suis patient au cabinet depuis plusieurs années et je suis
                toujours très satisfait des soins que je reçois. Les médecins
                sont très compétents et à l'écoute, et le personnel est toujours
                accueillant et serviable. Je recommande vivement ce cabinet à
                tous ceux qui recherchent un médecin de qualité."
              </p>
            </div>

            <div className="col-lg-6 offset-lg-6">
              <div className="my-2">
                <h4 style={{ color: "#223a66" }} className="my-0">
                  J'adore !!
                </h4>
                <span>Amadou Abdou Mariama</span>
              </div>
              <p className="form-text">
                "Je suis très reconnaissant envers le cabinet pour les soins de
                qualité que j'ai reçus. Le personnel est toujours très gentil et
                disponible, et les médecins sont très compétents et à l'écoute.
                Je me sens toujours bien pris en charge au cabinet. Merci pour
                tout!"
              </p>
            </div>

            <div className="col-lg-6 offset-lg-6">
              <div className="my-2">
                <h4 style={{ color: "#223a66" }} className="my-0">
                  Troop cool 😍
                </h4>
                <span>Drighil Hatim</span>
              </div>
              <p className="form-text">
                "J'ai récemment consulté le Dr. [Nom du médecin] pour [raison de
                la consultation] et j'ai été très impressionnée par son
                professionnalisme et son empathie. Il a pris le temps de
                répondre à toutes mes questions et de m'expliquer mon état de
                santé de manière claire et concise. Je me suis sentie très à
                l'aise et en confiance pendant toute la consultation. Je
                recommande vivement le Dr. [Nom du médecin] à tous ceux qui
                recherchent un médecin compétent et attentionné."
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default About