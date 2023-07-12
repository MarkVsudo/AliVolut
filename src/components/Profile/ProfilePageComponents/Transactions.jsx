/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import '../../../App.css';
import '../../../styles/Transactions.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const Transactions = () => {
  const [transactionsState, setTransactionsState] = useState([]);
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);

  // Generate dummy transactions
  const generateTransactions = () => {
    const startDate = new Date();
    const transactions = [];
    let transactionIdCounter = 10000;

    const getRandomStatus = () => {
      const statuses = ['Pending', 'Completed', 'Canceled'];
      const randomIndex = Math.floor(Math.random() * statuses.length);
      return statuses[randomIndex];
    };

    const getRandomType = () => {
      const types = ['Withdraw', 'Deposit', 'Transfer'];
      const randomIndex = Math.floor(Math.random() * types.length);
      return types[randomIndex];
    };

    const formatCurrency = (amount) => {
      return `$${amount.toFixed(2)}`;
    };

    for (let i = 0; i < 15; i += 1) {
      const id = `#${transactionIdCounter.toString().padStart(5, '0')}`;
      transactionIdCounter += 1;

      const status = getRandomStatus();
      const type = getRandomType();
      const amount = (i + 1) * 100.0;
      const formattedAmount = formatCurrency(amount);

      const transaction = {
        id,
        transferUserId:
          type === 'Transfer' ? `#${transactionIdCounter - 1}` : null,
        timestamp: new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() - i
        ).toLocaleString('en-GB'),
        nonce: Math.floor(Math.random() * 1000),
        previousBalance: formatCurrency(amount - (i + 1) * 10.0),
        type,
        status,
        amount: formattedAmount,
        statusClass: status.toLowerCase(),
        typeClass: type.toLowerCase()
      };

      transactions.push(transaction);
    }

    return transactions;
  };

  const sortTransactionsByDate = () => {
    const sorted = [...sortedTransactions].sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return sortAscending ? dateA - dateB : dateB - dateA;
    });
    setSortedTransactions(sorted);
    setSortAscending(!sortAscending);
  };

  useEffect(() => {
    const transactionsData = generateTransactions();
    setTransactionsState(transactionsData);
    setSortedTransactions(transactionsData);
  }, []);

  const displayedTransactions = sortedTransactions.length
    ? sortedTransactions
    : transactionsState;

  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead className="table-head">
          <TableRow>
            <TableCell sx={{ display: 'flex' }}>
              Timestamp{' '}
              <SwapVertIcon
                onClick={sortTransactionsByDate}
                sx={{ cursor: 'pointer', marginLeft: '.5rem' }}
              />
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Transfer User ID</TableCell>
            <TableCell>Nonce</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Previous Balance</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.timestamp}</TableCell>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.transferUserId}</TableCell>
              <TableCell>{transaction.nonce}</TableCell>
              <TableCell className={transaction.typeClass}>
                {transaction.type}
              </TableCell>
              <TableCell className={transaction.statusClass}>
                {transaction.status}
              </TableCell>
              <TableCell>{transaction.previousBalance}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Transactions;
