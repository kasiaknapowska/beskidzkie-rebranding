import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat) {
    return { name, calories, fat };
  }
  
  const rows = [
    createData('Ilość sztuk', 1, 1),
    createData('Ilość kartonów', 1, 1),
    createData('Ilość palet', 1, 1),
  ];

const CustomTable = () => {
  return (
    <TableContainer component={Paper} variant="outlined">
    <Table aria-label="table">
      <TableHead>
        <TableRow>
          <TableCell>Nazwa produktu / kg</TableCell>
          <TableCell align="right">Było</TableCell>
          <TableCell align="right">Jest</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default CustomTable