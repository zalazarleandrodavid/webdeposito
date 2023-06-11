import React, { useState } from 'react';
import Boton1 from './Boton1.jsx';
import Boton2 from './Boton2.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica si el correo electrónico termina con "@telefonica.com"
    if (email.endsWith('@telefonica.com')) {
      setLoggedIn(true);
    } else {
      alert('El correo electrónico no es válido');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
  };

  if (loggedIn) { //cierre de sesion
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
        <Boton1 handleLogout={handleLogout} />
        <Boton2 handleLogout={handleLogout} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
