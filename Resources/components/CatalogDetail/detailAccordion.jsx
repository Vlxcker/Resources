import React, { useState } from 'react';
import './detailAccordion.css'; // Importa los estilos CSS para el acordeón

const DetailAccordion = () => {
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
          {isOpen ? '¡Recuerda enviar la información completa!' : '¿Que información necesita el CEDUM para producir este recurso?'}
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
          <p>Este es el contenido del acordeón. Puedes colocar aquí cualquier texto o componente que desees mostrar.</p>
        </div>
      )}
    </div>
  );
};

export default DetailAccordion;
