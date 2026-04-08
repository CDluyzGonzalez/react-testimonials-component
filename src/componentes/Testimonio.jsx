import React from 'react'
import './hojas-de-estilo/Testimonio.css';

function parseBold(text) {
  if (!text) return null;
  // Partimos el string por segmentos que tengan **algo**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*(.+)\*\*$/); // si coincide **...**
    if (m) return <strong key={i}>{m[1]}</strong>;
    return part; // texto plano
  });
}
function Testimonio(props) { /*los props son los datos que se pasan a la componente*/
  return (
    <div className='contenedor-testimonio'>
        <img
        className='imagen-testimonio'
        src={(`/imagenes/testimonio-${props.imagen}.jpg`)}
        alt={`Foto de ${props.nombre}`}/>

        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
              <strong>{props.nombre}</strong> en {props.pais}
              </p>
            <p className='cargo-testimonio'>
              <strong>{props.cargo}</strong> en <strong>{props.empresa}</strong>
              </p> 
            <p className='texto-testimonio'>
              {parseBold(props.testimonio)}</p>
        </div>
    </div>
  );
}

export default Testimonio;
