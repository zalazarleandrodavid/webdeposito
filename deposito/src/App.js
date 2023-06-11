import React from 'react';
import './App.css';
import Boton1 from './componentes/Boton1.jsx';
import Boton2 from './componentes/Boton2.jsx';
import Login from './componentes/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <Boton1 />
            <Boton2 />
            {/* Otros componentes */}
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
