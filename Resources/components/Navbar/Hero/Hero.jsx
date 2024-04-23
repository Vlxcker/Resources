// Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='HeroTitle slide-up'>
                <h2>Catálogo Umanizales</h2>
            </div>
            <div className='HeroText slide-up'>Aquí encontrarás todos los recursos disponibles para la construcción de tus módulos</div>
        </div>
    );
};

export default Hero;