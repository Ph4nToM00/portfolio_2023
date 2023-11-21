import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Bonjour, je m'appelle <span className='font-semibold'>Tristan</span> 👋🏻
      <br />
       Je suis développeur fullstack en France 🇫🇷
    </h1>
  ),
  2: (
    <InfoBox 
      text="j'ai acquis de nombreuses compétences en cours de route."
      link='/about'
      btnText='En savoir plus à propos de moi'
    />
  ),
  3: (
    <InfoBox 
      text="J'ai mené à bien de nombreux projets au fil du temps. Curieux de connaître l'impact ?"
      link='/projects'
      btnText='Visitez mon portfolio'
    />
  ),
  4: (
    <InfoBox 
      text="Vous avez besoin d'un projet ou vous cherchez un développeur ? je suis à quelques clics de souris."
      link='/contact'
      btnText='Parlons-en !'
    />
  ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo