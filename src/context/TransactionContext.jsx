import React, { createContext, useEffect, useState } from 'react';

export const TransactionContext = createContext({});

const TransactionsProvider = ({children}) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem('@my-finances:transactions');
    if(data){
      setTransactions(JSON.parse(data));
    }
  }, []);
  //Desenvolva toda a logica do projeto aqui

  const addNewTransaction = (transactionData) => {
    const newTransactions = [...transactions, transactionData];
    setTransactions(newTransactions);
    localStorage.setItem('@my-finances:transactions', JSON.stringify(newTransactions));
  }

  const removeTransaction = (indiceTransaction) => {
    const newTransactions = transactions.filter((transaction, index) =>{
      return index !== indiceTransaction;
    });
    setTransactions(newTransactions);
    localStorage.setItem('@my-finances:transactions', JSON.stringify(newTransactions));
  }

return (
  <TransactionContext.Provider value={{
    transactions,
    addNewTransaction,
    removeTransaction,
  }}>
    {children}
  </TransactionContext.Provider>
)
}

export default TransactionsProvider;