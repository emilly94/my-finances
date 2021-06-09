import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const SummaryCards = () => {
  return (
    <>
      <CardGroup>
        <Card bg="success" text="white" className="text-center p-3">
          <Card.Body>
            <Card.Title>Entrada</Card.Title>
            <Card.Text>R$ 17,400,00</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="danger" text="white" className="text-center p-3">
          <Card.Body>
            <Card.Title>Saida</Card.Title>
            <Card.Text>R$ 1,259,00</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" text="white" className="text-center p-3">
          <Card.Body>
            <Card.Title>Total</Card.Title>
            <Card.Text>R$ 16,141,00</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default SummaryCards;
