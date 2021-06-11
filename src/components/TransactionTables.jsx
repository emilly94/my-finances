import React, {useContext} from 'react';

import Table from 'react-bootstrap/Table';
import { BsTrash } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";

const TransactionTables = () =>{
  const { transactions, removeTransaction } = useContext(TransactionContext);
  return(
    <Table striped bordered hover variant="dark" id="table">
  <thead>
    <tr>
      <th>TÍTULO</th>
      <th>PREÇO</th>
      <th>TIPO</th>
      <th>CATEGORIA</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {transactions.map((transaction, index) =>(
    <tr key={index}>
      <td>{transaction.title}</td>
      <td>R$ {transaction.amount}</td>
      <td>{transaction.type}</td>
      <td>{transaction.category}</td>
      <td><button onClick={() => removeTransaction(index)}><BsTrash/></button></td>
    </tr>
    ))}
  </tbody>
</Table>
  );
}

export default TransactionTables;