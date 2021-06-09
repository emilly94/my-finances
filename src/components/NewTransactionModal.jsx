import React, { useState } from 'react';

import {Button, Modal} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const NewTransaction = () => {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  /*BootStrap*/
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>Nova Transação</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Nova Transação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="Titulo">
              <Form.Control type="text" placeholder="Titulo" />
            </Form.Group>
            <br></br>
            <Form.Group controlId="preco">
              <Form.Control type="text" placeholder="0" />
            </Form.Group>
            <br></br>
            <Form.Group controlId="tipo">
              <Form.Control as="select">
                <option>Entrada</option>
                <option>Saida</option>
              </Form.Control>
              <br></br>
            </Form.Group>
            <Form.Group controlId="Categoria">
              <Form.Control type="text" placeholder="Categoria" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cadastrar Transação
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewTransaction;
