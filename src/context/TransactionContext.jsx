import React, { createContext, useEffect, useState } from 'react';

export const TransactionContext = createContext({});

const TransactionProvider = ({children}) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {

  }, []);
  //Desenvolva toda a logica do projeto aqui

  const handleCreateNewTransaction = (transactionData) => {

  }


return (
  <TransactionContext.Provider value={{
    transactions,
  }}>
    {children}
  </TransactionContext.Provider>
)
}

export default TransactionContext;
