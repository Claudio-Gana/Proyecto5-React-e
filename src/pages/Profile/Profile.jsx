import React, { useContext, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext.jsx';
import './profile.css';

export const Profile = () => {
  const userCtx = useContext(UserContext);
  const { user } = userCtx;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');

  const handleContactMeClick = () => {
    if (phoneNumber && selectedOption) {
      setMessage(
        `${user.fullName} nos contactaremos contigo al número ${phoneNumber} o ${user.email} por el motivo de ${selectedOption} dentro de las próximas 24 horas.`
      );
      setPhoneNumber('');
      setSelectedOption('');
    } else {
      setMessage('Por favor, complete todos los campos.');
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Card className="profile-card">
      <Card.Body>
        <Card.Text className="profile-welcome">
          ¡Bienvenido, {user.fullName}!
        </Card.Text>
        <Card.Text className="profile-motivation">
          Estamos encantados de tenerte aquí en nuestra página. En {user.fullName} Luxury Watches, nos apasiona ofrecerte los relojes más exclusivos y elegantes para complementar tu estilo y sofisticación. Con una amplia variedad de diseños únicos y una calidad excepcional, estamos seguros de que encontrarás el reloj perfecto que se adapte a tus gustos y preferencias.
        </Card.Text>
        <Card.Title className="profile-title">Perfil de Usuario</Card.Title>
        <Card.Text className="profile-text">ID: {user._id}</Card.Text>
        <Card.Text className="profile-text">
          Nombre Completo: {user.fullName}
        </Card.Text>
        <Card.Text className="profile-text">Correo: {user.email}</Card.Text>


      <p> si necesitas contactarte con nosotros por cualquier motivo, un ejecutivo se contactara en menos de 48 horas,
         solo tienes que completar los datos :</p>



        <Form.Group controlId="phoneNumber">
          <Form.Label>Número de Teléfono</Form.Label>
          <Form.Control
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="selectOption">
          <Form.Label>Motivo</Form.Label>
          <Form.Control
            as="select"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Seleccionar opción</option>
            <option value="reclamo">Reclamo</option>
            <option value="devolucion">Devolución</option>
            <option value="compra">Compra</option>
            <option value="cambio">Cambio de producto</option>
            <option value="cambio">Otro</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={handleContactMeClick}>
          Contáctame
        </Button>
        <p>{message}</p>
      </Card.Body>
    </Card>
  );
};
