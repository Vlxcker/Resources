import React, { useState, useEffect } from 'react';
import './catalogCard.css';
import foto from '../../src/assets/prueba svg.svg';
import recursos from '../../src/data/recursos.json';

const CatalogCard = () => {
  const [error, setError] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    try {
      if (!recursos || recursos.length === 0) {
        throw new Error("No se encontraron recursos disponibles.");
      }
    } catch (error) {
      setError(error.message);
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  if (error) {
    return (
      <div className="error-message">
        <span>Error:</span>
        <span className="error-text">{error}</span>
      </div>
    );
  }

  return (
    <ul className="cards">
      {recursos.map((recurso) => (
        <li key={recurso.id}>
          <a href="#" className="card" onMouseEnter={() => handleMouseEnter(recurso.id)} onMouseLeave={handleMouseLeave}>
            <img src={recurso.image} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                <div className="card__header-text">
                  <h3 className={`card__title ${hoveredCardId === recurso.id ? 'animate__animated animate__heartBeat' : ''}`}>{recurso.title}</h3>
                  
                </div>
              </div>
              <p className="card__description">{recurso.description}</p>
            </div>
          </a>
        </li>
        
      ))}
   
    </ul>
    
  );
};

export default CatalogCard;



    /*
    <div className="catalogCardsContainer">
      {recursos.map((recurso) => (
        <div key={recurso.id} className="catalogCardWrapper">
          <Link to={`/item/${recurso.id}`} className="card-link">
            <Card 
              className={`catalogCard glass slide-up-card`}
              onMouseEnter={() => handleMouseEnter(recurso.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img src={foto} className="card-img" />
              <div className="card-content">
                <Card.Body className="card-body">
                  <Card.Title 
                    className={`card-title ${hoveredCardId === recurso.id ? 'animate__animated animate__heartBeat' : ''}`}
                  >
                    {recurso.title}
                  </Card.Title>
                  <Card.Text className='card-description'>{recurso.description}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
    */ 