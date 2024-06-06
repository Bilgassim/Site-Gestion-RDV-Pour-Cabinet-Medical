import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import SocialSignUp from './SocialSignUp';
import { useForm } from "react-hook-form";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import { useResetPasswordMutation, useUserLoginMutation } from '../../redux/api/authApi';
import { message } from 'antd';
import { useMessageEffect } from '../../utils/messageSideEffect';

const SignIn = ({ handleResponse }) => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [infoError, setInfoError] = useState('');
    const [show, setShow] = useState(true);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [userLogin, { isError, isLoading, isSuccess, error }] = useUserLoginMutation();
    const [forgotEmail, setForgotEmail] = useState('');
    const [resetPassword, { isError: resetIsError, isSuccess: resetIsSuccess, error: resetError, isLoading: resetIsLoading }] = useResetPasswordMutation();

    setTimeout(() => {
        setShow(false);
    }, 10000);

    const onSubmit = async (event) => {
        userLogin({ ...event })
    }

    const onHandleForgotPassword = async (e) => {
        e.preventDefault();
        resetPassword({ email: forgotEmail })
        setForgotEmail("");
        setShowForgotPassword(false);
    }
    useMessageEffect(resetIsLoading, resetIsSuccess, resetIsError, resetError, "Successfully Reset Password, Please check your Email!!")
    useEffect(() => {
        if (isError) {
            message.error(error?.data?.message)
            setInfoError(error?.data?.message)
        }
        if (isSuccess) {
            message.success('Successfully Logged in');
            navigate('/')
        }
    }, [isError, error, isSuccess, navigate])

    const handleShowForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
    }

    return (
        <>
            {
                showForgotPassword
                    ?
                    <form className="sign-in-form" onSubmit={onHandleForgotPassword}>
                        <h2 className="title">Mot de passe oublié</h2>
                        <div>Mot de passe oublié, veuillez entrer votre email</div>
                        <div className="input-field">
                            <span className="fIcon"><FaEnvelope /></span>
                            <input value={forgotEmail !== undefined && forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} placeholder="Entrer Votre Email" type="email" required />
                        </div>
                        <div onClick={handleShowForgotPassword} className='text-bold' style={{ cursor: "pointer", color: '#4C25F5' }}>Vous vous souvenez toujours du mot de passe ?</div>
                        <button className="iBtn" type="submit" value="sign In" >
                            {resetIsLoading ? <Spinner animation="border" variant="info" /> : "Submit"}
                        </button>
                    </form>
                    :
                    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                        <Toast show={show} onClose={() => setShow(!show)} className="signInToast">
                            <Toast.Header>
                                <strong className="mr-auto">Identifiant de démonstration</strong>
                            </Toast.Header>
                            <Toast.Body>Utilisez ce compte pour vous connecter en tant que médecin <br />
                                <hr />
                                <div className='bg-dark text-white p-2 px-3 rounded'>
                                    email : doctor@gmail.com <br />
                                    password : 123456 <br />
                                </div>
                                <hr />
                                <div className='bg-primary p-2 rounded text-white'>
                                    S'il vous plaît, n'abusez pas de l'installation
                                </div>
                            </Toast.Body>
                        </Toast>
                        <h2 className="title">Se connecter</h2>
                        <div className="input-field">
                            <span className="fIcon"><FaEnvelope /></span>
                            <input {...register("email", { required: true })} placeholder="Entrer Votre Email" type="email" />
                        </div>
                        {errors.email && <span className="text-danger">Ce champ est obligatoire</span>}
                        <div className="input-field">
                            <span className="fIcon"><FaLock /></span>
                            <input {...register("password", { required: true })} type="password" placeholder="Entrer Votre Mot De Passe" />
                        </div>
                        {errors.password && <span className="text-danger">Ce champ est obligatoire</span>}
                        {infoError && <p className="text-danger">{infoError}</p>}
                        <div onClick={handleShowForgotPassword} className='text-bold' style={{ cursor: "pointer", color: '#4C25F5' }}>Mot De Passe Oublié ?</div>
                        <button className="iBtn" type="submit" value="sign In" >
                            {isLoading ? <Spinner animation="border" variant="info" /> : "Sign In"}
                        </button>
                        <p className="social-text">Ou Connectez-vous avec les plateformes sociales</p>
                        <SocialSignUp handleResponse={handleResponse} />
                    </form>
            }
        </>
    );
};

export default SignIn;