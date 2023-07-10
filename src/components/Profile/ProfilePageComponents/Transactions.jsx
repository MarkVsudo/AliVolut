/* eslint-disable import/no-extraneous-dependencies */
import '../../../App.css';
import './Transactions.css';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const Transactions = () => {
  // Generate dummy transactions
  const generateTransactions = () => {
    const startDate = new Date();
    const transactions = [];
    let transactionIdCounter = 10000000;

    const countries = [
      { name: 'USA', flag: '🇺🇸' },
      { name: 'Canada', flag: '🇨🇦' },
      { name: 'Germany', flag: '🇩🇪' },
      { name: 'France', flag: '🇫🇷' },
      { name: 'United Kingdom', flag: '🇬🇧' }
    ];

    const getRandomCountry = () => {
      const randomIndex = Math.floor(Math.random() * countries.length);
      return countries[randomIndex];
    };

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
      const transactionId = `#${transactionIdCounter
        .toString()
        .padStart(8, '0')}`;
      transactionIdCounter += 1;

      const country = getRandomCountry();
      const status = getRandomStatus();
      const type = getRandomType();
      const amount = (i + 1) * 100.0;
      const formattedAmount = formatCurrency(amount);

      const transaction = {
        date: new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() - i
        ).toLocaleDateString('en-GB'),
        transactionId,
        country: `${country.flag} ${country.name}`,
        status,
        type,
        description: `Product ${i + 1}`,
        amount: formattedAmount,
        statusClass: status.toLowerCase(),
        typeClass: type.toLowerCase()
      };

      transactions.push(transaction);
    }

    return transactions;
  };

  const [transactions, setTransactions] = useState([]);
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    const transactionsData = generateTransactions();
    setTransactions(transactionsData);
  }, []);

  const sortTransactionsByDate = () => {
    const sorted = [...transactions].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortAscending ? dateA - dateB : dateB - dateA;
    });
    setSortedTransactions(sorted);
    setSortAscending(!sortAscending);
  };

  const displayedTransactions = sortedTransactions.length
    ? sortedTransactions
    : transactions;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ display: 'flex' }}>
              Date <SwapVertIcon onClick={sortTransactionsByDate} />
            </TableCell>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedTransactions.map((transaction) => (
            <TableRow key={transaction.transactionId}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.transactionId}</TableCell>
              <TableCell>{transaction.country}</TableCell>
              <TableCell className={transaction.statusClass}>
                {transaction.status}
              </TableCell>
              <TableCell className={transaction.typeClass}>
                {transaction.type}
              </TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Transactions;