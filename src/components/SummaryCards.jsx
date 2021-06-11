import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BsChevronUp, BsChevronDown, BsChevronContract } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";

const SummaryCards = () => {
  const { transactions } = useContext(TransactionContext);

  const total = transactions.reduce((totalReduce, transaction)=> {
    if(transaction.type === 'Entrada'){
      return totalReduce = totalReduce + transaction.amount;
    }else{
      return totalReduce = totalReduce - transaction.amount;
    }
  }, 0);

  const entradas = transactions.reduce((totalReduce, transaction)=> {
    if(transaction.type === 'Entrada'){
      return totalReduce = totalReduce + transaction.amount;
    }else{
      return totalReduce;
    }
  }, 0);

  const saidas = transactions.reduce((totalReduce, transaction)=> {
    if(transaction.type === 'Saida'){
      return totalReduce = totalReduce - transaction.amount;
    }else{
      return totalReduce;
    }
  }, 0);

  return (
    <>
      <CardGroup>
        <Card bg="success" text="white" className="cards">
          <Card.Body>
            <Card.Title><BsChevronUp/>ENTRADA</Card.Title>
            <Card.Text className=".card-nota_texto ">R$ {entradas.toFixed(2)}</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="danger" text="white" className="cards">
          <Card.Body>
            <Card.Title><BsChevronDown/>SAÍDA</Card.Title>
            <Card.Text>R$ {saidas.toFixed(2)}</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" text="white" className="cards">
          <Card.Body>
            <Card.Title><BsChevronContract/>TOTAL</Card.Title>
            <Card.Text>R$ {total.toFixed(2)}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default SummaryCards;
