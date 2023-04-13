import React from "react";
import { createTableData } from "../../utils/functions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CustomWolumenTable = ({ header, content }) => {
  const { piece, carton, pallet } = content;
  const rows = [
    createTableData("Ilość sztuk", piece.before, piece.after),
    createTableData("Ilość kartonów", carton.before, carton.after),
    createTableData("Ilość palet", pallet.before, pallet.after),
  ];

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            {header.map((el) => (
              <TableCell
                key={el}
                align="right"
                sx={{ textTransform: "uppercase" }}
              >
                {el}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.pack}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.pack}
              </TableCell>
              <TableCell align="right">{row.before}</TableCell>
              <TableCell align="right">{row.after}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomWolumenTable;
