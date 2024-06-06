import React, { useEffect, useState } from 'react';
import { FaCheck, FaEnvelope, FaLock, FaTimes, FaUser } from 'react-icons/fa';
import SocialSignUp from './SocialSignUp';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';
import axios from '../../axiosConfig';
import { message } from 'antd';

const SignUp = ({ setSignUp }) => {
      const [loading, setLoading] = useState(false);
      const formField = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
      const [user, setUser] = useState(formField);
      const [userType, setUserType] = useState('patient');
      const [passwordValidation, setPasswordValidation] = useState({
        carLength: false,
        specailChar: false,
        upperLowerCase: false,
        numeric: false,
      });
    
      const [emailError, setEmailError] = useState(false);
      const [validationErrors, setValidationErrors] = useState({});
      const [errorMessage, setErrorMessage] = useState('');    
      const handleSignUpSuccess = () => {
        setLoading(false);
        setUser(formField);
      };
    
      useEffect(() => {
        if (errorMessage) {
          message.error("Une erreur s'est produite !");
          setLoading(false);
        }
      }, [errorMessage]);
    
      const handleEmailError = (name, value) => {
        if (name === 'email') {
          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          setEmailError(!isValidEmail); // Inverser la valeur pour indiquer une erreur
          setValidationErrors(prevErrors => ({ ...prevErrors, email: isValidEmail ? '' : "L'adresse e-mail n'est pas valide." }));
        }
      };      
    
      const hanldeValidation = (name, value) => {
        if (name === 'password') {
          const validations = {
            carLength: value.length > 8,
            specailChar: /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value),
            upperLowerCase: /^(?=.*[a-z])(?=.*[A-Z])/.test(value),
            numeric: /^(?=.*\d)/.test(value),
          };
          setPasswordValidation(validations);
    
          // Mettre à jour les erreurs de validation pour le mot de passe
          setValidationErrors(prevErrors => ({
            ...prevErrors,
            password: Object.values(validations).every(Boolean) ? '' : "Le mot de passe ne respecte pas les critères."
          }));
        }
      };
    
      const hanldeOnChange = (e) => {
        let { name, value } = e.target;
        hanldeValidation(name, value);
        handleEmailError(name, value);
        const newUser = { ...user, [name]: value };
        setUser(newUser);
      };
    
      const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
      };
    
      const hanldeOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
    
        try {
          const response = await axios.post('/register', {
            nom: user.firstName,
            prenom: user.lastName,
            email: user.email,
            password: user.password,
            role: userType,
          });
    
          if (response.status === 201) {
            swal({
              icon: 'success',
              text: `Compte ${userType === 'doctor' ? 'Docteur' : 'Patient'} créé avec succès. Veuillez vous connecter.`,
              timer: 2000,
            }).then((result) => {
              if (result.isConfirmed) {
                setSignUp(false); 
              }
            });
          } else {
            setErrorMessage("Erreur lors de l'inscription : " + response.data.message);
          }
        } catch (error) {
          setErrorMessage("Erreur lors de l'inscription. Veuillez vérifier les informations saisies.");
        } finally {
          setLoading(false);
        }
      };
    
  // Début du JSX (return)
  return (
    <form className="sign-up-form" onSubmit={hanldeOnSubmit}>
      <h2 className="title">S'inscrire</h2>
      <div className="input-field">
        <span className="fIcon"><FaUser /></span>
        <input placeholder="Nom" name="firstName" type="text" onChange={hanldeOnChange} value={user.firstName} />
      </div>
      <div className="input-field">
        <span className="fIcon"><FaUser /></span>
        <input placeholder="Prénom" name="lastName" type="text" onChange={hanldeOnChange} value={user.lastName} />
      </div>
      <div className="input-field">
        <span className="fIcon"><FaEnvelope /></span>
        <input placeholder="Email" name="email" type="email" onChange={hanldeOnChange} value={user.email} />
        {emailError && <div className="text-danger">L'adresse e-mail n'est pas valide.</div>} 
      </div>

      <div className="input-field">
        <span className="fIcon"><FaLock /></span>
        <input type="password" name="password" placeholder="Mot De Passe" onChange={hanldeOnChange} value={user.password} />
        {validationErrors.password && <div className="text-danger">{validationErrors.password}</div>}
      </div>
      <div className='input-field d-flex align-items-center gap-2 justify-content-center'>
        <div className='text-nowrap'>JE SUIS </div>
        <select
          className="form-select w-50"
          aria-label="select"
          onChange={handleUserTypeChange}
          defaultValue='patient'
        >
          <option value="patient">Patient</option>
          <option value="doctor">Docteur</option>
        </select>
      </div>

      {/* Affichage de l'erreur générale */}
      {errorMessage && <div className="text-danger text-center">{errorMessage}</div>} 

      <button type="submit" className="btn btn-primary btn-block mt-2 iBtn" disabled={!Object.values(passwordValidation).every(Boolean) || emailError}>
        {loading ? <Spinner animation="border" variant="info" /> : "Sign Up"}
      </button>
      <div className="password-validatity mx-auto">
        <div style={!emailError ? { color: "green" } : { color: "red" }}>
          <p>{!emailError ? <FaCheck /> : <FaTimes />} <span className="ms-2">Doit avoir un e-mail valide.</span></p>
        </div>
        <div style={passwordValidation.carLength ? { color: "green" } : { color: "red" }}>
          <p>{passwordValidation.carLength ? <FaCheck /> : <FaTimes />} <span className="ms-2">Le mot de passe doit comporter au moins 8 caractères.</span></p>
        </div>
        <div style={passwordValidation.specailChar ? { color: "green" } : { color: "red" }}>
          <p>{passwordValidation.specailChar ? <FaCheck /> : <FaTimes />} <span className="ms-2">Le mot de passe doit comporter un caractère spécial.</span></p>
        </div>
        <div style={passwordValidation.upperLowerCase ? { color: "green" } : { color: "red" }}>
          <p>{passwordValidation.upperLowerCase ? <FaCheck /> : <FaTimes />} <span className="ms-2">Le mot de passe doit contenir des majuscules et des minuscules.</span></p>
        </div>
        <div style={passwordValidation.numeric ? { color: "green" } : { color: "red" }}>
          <p>{passwordValidation.numeric ? <FaCheck /> : <FaTimes />} <span className="ms-2">Le mot de passe doit avoir un numéro.</span></p>
        </div>
      </div>

      <p className="social-text">Ou Inscrivez-vous avec un réseau social</p>
      <SocialSignUp />
    </form>
  );
};

export default SignUp;
