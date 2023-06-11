import React, { useRef, useState } from 'react';
import Quagga from 'quagga';

const Boton2 = ({ onBarcodeScan }) => {
  const scannerRef = useRef(null);
  const [scannedBarcode, setScannedBarcode] = useState('');

  const openBarcodeScanner = () => {
    Quagga.init(
      {
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
      },
      (err) => {
        if (err) {
          console.error('Error al inicializar Quagga:', err);
          return;
        }

        Quagga.start();

        Quagga.onDetected((result) => {
          const barcode = result.codeResult.code;
          Quagga.stop();

          setScannedBarcode(barcode); // Actualiza el estado con el código de barras escaneado
          if (typeof onBarcodeScan === 'function') {
            onBarcodeScan(barcode);
          }

          // Abre una nueva ventana del navegador con la información del código de barras
          
        });
      }
    );
  };

  return (
    <div>
      <button className="boton1" onClick={openBarcodeScanner}>Telefonica</button>
      <div ref={scannerRef} className="scanner" style={{ width: '100%' }}></div>
      {scannedBarcode && <p>Código de barras escaneado: {scannedBarcode}</p>}
    </div>
  );
};

export default Boton2;