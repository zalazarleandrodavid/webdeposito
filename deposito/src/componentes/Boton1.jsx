import React from 'react';

const Boton1 = ({ onClick }) => {
  return (
    <button onClick={() => onClick('Movistar')}>"Movistar"</button>
  );
};
export default Boton1;

