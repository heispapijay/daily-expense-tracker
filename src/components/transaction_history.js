import React, { useContext } from 'react';
import { Transaction } from './transaction';
import { GlobalContext } from '../context/_api';

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Today's History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
