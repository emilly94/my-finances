import React from 'react';

import Table from 'react-bootstrap/Table';

const TransactionTables = () =>{
  return(
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Titulo</th>
      <th>Preço</th>
      <th>Tipo</th>
      <th>Categoria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Desenvolvimento de sites</td>
      <td>R$ 12.000,00</td>
      <td>Entrada</td>
      <td>Dev</td>
    </tr>
    <tr>
      <td>Pão de Açucar</td>
      <td>R$ 153,64</td>
      <td>Saida</td>
      <td>Mercado</td>
    </tr>
    <tr>
      <td>Cartão de Credito</td>
      <td>R$ 1,000,00 </td>
      <td>Saida</td>
      <td>Despesa</td>
    </tr>
  </tbody>
</Table>
  );
}

export default TransactionTables;