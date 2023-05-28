import React from 'react';
import BarcodeReader from 'barcode-reader';

class Escaner extends React.Component {
  componentDidMount() {
    const codeReader = new BarcodeReader();

    codeReader
      .decodeFromCamera(document.querySelector('#barcode-scanner'), (result, error) => {
        if (result) {
          console.log('Código de barras detectado:', result.text);
          // Aquí puedes realizar la acción que necesites con el código de barras detectado
        }
        if (error && error !== 'NotFound') {
          console.error('Error al leer el código de barras:', error);
        }
      })
      .catch((error) => {
        console.error('Error al acceder a la cámara:', error);
      });
  }

  componentWillUnmount() {
    // Detener la lectura de códigos de barras
    BarcodeReader.reset();
  }

  render() {
    return (
      <div>
        {/* Coloca aquí el código JSX de tu botón */}
        <div id="barcode-scanner"></div> {/* Elemento donde se mostrará la cámara */}
      </div>
    );
  }
}

export default Escaner;