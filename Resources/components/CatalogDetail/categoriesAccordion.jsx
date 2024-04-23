import React, { useState } from 'react';
import './categoriesAccordion.css'; // Importa los estilos CSS para el acordeón
import logo from '../../src/assets/UM+Centro de Educación a Distancia.png';

const CategoriesAccordion = () => {
  // Utiliza el hook useState para mantener el estado de si el acordeón está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar entre abrir y cerrar el acordeón
  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Invierte el estado actual del acordeón
  };

  return (
    <div className="accordion"> {/* Contenedor principal del acordeón */}
      {/* Encabezado del acordeón */}
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-header-text">
          {/* Texto que cambia según si el acordeón está abierto o cerrado */}
          {isOpen ? 'Cerrar Acordeón' : 'Abrir Acordeón'}
        </div>
        {/* Icono que cambia según si el acordeón está abierto o cerrado */}
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {/* Icono de flecha o cualquier otro indicador visual */}
          {isOpen ? '-' : '+'}
        </div>
      </div>
      {/* Contenido del acordeón, se muestra solo si el acordeón está abierto */}
      {isOpen && (
        <div className="accordion-content">
          {/* Contenido del acordeón */}
          <div>
          <img src={logo} alt="logo de prueba" />
          <p>Categoria 1</p>
          </div>
          <div>
          <img src={logo} alt="logo de prueba" />
          <p>Categoria 2</p>
          </div>
          <div>
          <img src={logo} alt="logo de prueba" />
          <p>Categoria 3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesAccordion;
