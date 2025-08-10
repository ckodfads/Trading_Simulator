import { Box, Button, Typography } from "@mui/material";
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const formatFloat = (value) => {
  return value !== undefined && value !== null ? value.toFixed(2) : '';
};

export const ExportTransactions = ({ transactions }) => {
  const exportAsCSV = () => {
    const csvContent = [
      ['ID', 'Action', 'Symbol', 'Name', 'Price', 'Quantity', 'Total Cash Value', 'Type', 'Duration', 'Date and Time'],
      ...transactions.map(tx => [
        tx.id,
        tx.action,
        tx.symbol,
        tx.name,
        `$${formatFloat(tx.tradePrice / tx.quantity)}`,
        tx.quantity,
        `$${formatFloat(tx.tradePrice)}`,
        tx.type,
        tx.duration,
        tx.dateTime
      ])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'transactions.csv');
  };

  const exportAsPDF = () => {
    const doc = new jsPDF();
    doc.text('Transactions', 20, 10);
    doc.autoTable({
      head: [['ID', 'Action', 'Symbol', 'Name', 'Price', 'Quantity', 'Total Cash Value', 'Type', 'Duration', 'Date and Time']],
      body: transactions.map(tx => [
        tx.id,
        tx.action,
        tx.symbol,
        tx.name,
        `$${formatFloat(tx.tradePrice / tx.quantity)}`,
        tx.quantity,
        `$${formatFloat(tx.tradePrice)}`,
        tx.type,
        tx.duration,
        tx.dateTime
      ]),
    });
    doc.save('transactions.pdf');
  };

  return (
    <Box display='flex' alignItems='center' gap={1} mt={1}>
      <Typography>Export as:</Typography>
      <Button variant='outlined' onClick={exportAsCSV}>CSV</Button>
      <Button variant='outlined' onClick={exportAsPDF}>PDF</Button>
    </Box>
  );
};