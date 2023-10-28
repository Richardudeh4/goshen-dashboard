// import React from 'react'

// const Billings = () => {
//   return (
//     <div>
//       richard
//     </div>
//   )
// }

// export default Billings

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit,unit1, unit2, unit3,unit4,unit5) {
  return qty + unit + unit1 + unit2 + unit3 + unit4 + unit5 ;
}

function createRow(desc, qty,unit,unit1,unit2,unit3,unit4,unit5) {
  const price = priceRow(qty, unit, unit1, unit2, unit3, unit4, unit5);
  return { desc, qty, unit,unit1,unit2,unit3,unit4,unit5, price};
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Jss1', 45000, 4500,5000,1500,6000,9430,2000),
  createRow('Jss2', 45600, 4500,6000,2000,6500,9430, 2000),
  createRow('Jss3', 49500, 4500,6000,2000,6500,9000,2000),
  createRow('SS1', 52000, 4500,6500,2000,6500,9000,2000),
  createRow('SS2', 56000, 4500,7000,2500,6500,9000,2000),
  createRow('SS3', 60000, 4500,7000,2500,6500,9000,2000),
];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Billings() {
  return (
    <TableContainer component={Paper}>
      
      <h1 className="text-center text-4xl pt-12 font-agbalumo">Billings</h1>
      <Table sx={{ minWidth: 700, my: '4rem', mx: '5rem',ml:'20%'}} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={8} className="text-bold text-xl">
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell align="right"># Tution Fee</TableCell>
            <TableCell align="right">Sport fee</TableCell>
            <TableCell align="right">Health fee</TableCell>
            <TableCell align="right">PTA fee</TableCell>
            <TableCell align="right">Utility fee</TableCell>
            <TableCell align="right">Internet fee</TableCell>
            <TableCell align="right">Security fee</TableCell>
            <TableCell align="right">Sum Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{row.unit1}</TableCell>
              <TableCell align="right">{row.unit2}</TableCell>
              <TableCell align="right">{row.unit3}</TableCell>
              <TableCell align="right">{row.unit4}</TableCell>
              <TableCell align="right">{row.unit5}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}
