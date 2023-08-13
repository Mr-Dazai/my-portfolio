import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col, Alert } from 'react-bootstrap';
export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: '',
    name: '',
    message: '',
    loading: false,
    show: false,
    alertmessage: '',
    variant: '',
  });
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Sebin | Contact</title>
        </Helmet>
        <Row>
          <Col lg='8'>
            <h1>Contact Me</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg='5'>
            <h3>Get in touch</h3>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
