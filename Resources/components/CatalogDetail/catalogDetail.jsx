import React from 'react';
import { useParams } from 'react-router-dom';
import './catalogDetail.css';
import recursos from '../../src/data/recursos.json';
import prueba from '../../src/assets/prueba svg.svg';
import './catalogDetail.css'; // Importa tus estilos CSS para la página
import DetailAccordion from './detailAccordion';
import CategoriesAccordion from './categoriesAccordion';

const CatalogDetail = () => {
  const { id } = useParams();
  const recurso = recursos.find(item => item.id.toString() === id);

  if (!recurso) {
    return <div>No se encontró el recurso.</div>;
  }

  return (
    <div className="catalog-detail-container">
      <div className="content">
        {/* Contenido principal del detalle del catálogo */}
        <div className="catalogDetail">
          <div className='image'>
            <img src={prueba} alt={recurso.title} />
          </div>
          <div className="details glass"> {/* Agregamos la clase "details" al div contenedor */}
            <h2>{recurso.title}</h2>
            <p>{recurso.description}</p>
            <CategoriesAccordion />
          </div>
        </div>
      </div>
      <div className="accordion-container">
        {/* Aquí se renderiza el acordeón */}
        <DetailAccordion />
      </div>
    </div>
  );
};

export default CatalogDetail;
