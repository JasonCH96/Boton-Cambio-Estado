import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';



function BotonCambio() {
  const [mensaje, setMensaje] = useState("Apagado");

  const cambiarEstado = () => {
    if (mensaje === "Apagado") {
      setMensaje("Encendido");
    } else {
      setMensaje("Apagado");
    }
  };

  return (
    <div className="BtnCambio text-center mt-5">
      <Card className="shadow p-4 mx-auto" style={{ maxWidth: '400px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>Botón de Cambio de Estado</Card.Title>
          <Card.Text>Estado actual: {mensaje}</Card.Text>
          <Button variant="primary" onClick={cambiarEstado}>
            Cambiar Estado
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BotonCambio;