import React, { useRef } from 'react';
import Quagga from 'quagga';

const Boton1 = ({ onBarcodeScan }) => {
  const scannerRef = useRef(null);

  const openBarcodeScanner = () => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: scannerRef.current,
        constraints: {
          facingMode: "environment"
        },
      },
      decoder: {
        readers: ['ean_reader']
      }
    }, (err) => {
      if (err) {
        console.error('Error al inicializar Quagga:', err);
        return;
      }

      Quagga.start();

      Quagga.onDetected((result) => {
        const barcode = result.codeResult.code;
        Quagga.stop();

        onBarcodeScan(barcode);
      });
    });
  };

  return (
    <div>
      <button onClick={openBarcodeScanner}>Movistar</button>
      <div ref={scannerRef} style={{ width: '100%' }}></div>
    </div>
  );
};

export default Boton1;
