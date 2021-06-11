import React, { useContext, useState } from "react";

import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FaTimes } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";

const NewTransaction = () => {
  const { addNewTransaction } = useContext(TransactionContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction() {
    handleClose();
    const transactionData = {
      title: title,
      amount: amount,
      type: type,
      category: category,
    };
    addNewTransaction(transactionData);
  }

  /*BootStrap*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow} id="buttonModal">
        Nova Transação
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>NOVA TRANSAÇÃO</Modal.Title>
          <button id="buttonClose" onClick={handleClose}><FaTimes/></button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="Titulo"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br></br>
            <Form.Control
              type="text"
              placeholder="0,00"
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
            />
            <br></br>
            <Form.Control
              as="select"
              defaultValue={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option>Selecione um tipo:</option>
              <option>Entrada</option>
              <option>Saida</option>
            </Form.Control>
            <br></br>
            <Form.Control
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCreateNewTransaction}>
            Cadastrar Transação
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewTransaction;
