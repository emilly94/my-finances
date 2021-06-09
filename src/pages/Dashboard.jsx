import React from 'react';

import Header from '../components/Header';
import SummaryCards from '../components/SummaryCards';
import TransactionTables from '../components/TransactionTables';

const Dashboard = () => {
  return(
    <div>
      <Header/>
    <main>
      <SummaryCards />
      <TransactionTables />
    </main>
    </div>

  )
}

export default Dashboard;