import React from 'react';

const StudyCard = ({ institution, logo, startDate, status, level, title, certificateLink }) => {
  return (
    <div className="estudios-info-tarjeta">
      <h4 className="name-inst">{institution}</h4>
      <img src={logo} alt={`logo de la institucion de ${institution}`}
        className="estudios-info-tarjeta-logo" />
      <div className="fecha-estudios">
        <p>Fecha de inicio:</p><input type="text" name="" id="" value={startDate} readOnly />
        <p>Estado:</p> <input type="text" name="" id="" value={status} readOnly />
        <p>Nivel de formación:</p> <input type="text" name="" id="" value={level} readOnly />
        <label htmlFor="titulo-obtenido">
          <p>Titulo obtenido</p>
        </label>
        <textarea name="" id="titulo-obtenido" readOnly
          className="titulo-obtenido">{title}</textarea>
      </div>
      {certificateLink && (
        <a href={window.location.origin + certificateLink} className="btn-certificados" download="Certificado.pdf">Descargar Certificado</a>
      )}
    </div>
  );
};

export default StudyCard;
