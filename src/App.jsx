import React from 'react';
import Dashboard from "./pages/Dashboard";
import { initialData } from '../src/data/initialData';

import "../src/assets/global.css"
import TransactionsProvider from './context/TransactionContext';

function App() {
  return (
    <TransactionsProvider>
      <Dashboard/>
    </TransactionsProvider>
  );
}

export default App;
