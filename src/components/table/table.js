import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Text Card Title Goes Here', "$159", 6.0, 24, 4.0),
  createData('Text Card Title Goes Here', "$237", 9.0, 37, 4.3),
  createData('Text Card Title Goes Here', "$262", 16.0, 24, 6.0),
  createData('Text Card Title Goes Here', "$305", 3.7, 67, 4.3),

];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Deal</b></TableCell>
            <TableCell align="left"><b>Price</b>   <span clasName="text-secondary" style={{ fontSize: '8px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-13px', marginTop: '5px' }} class="fas ps-2 fa-caret-up"></i></span></TableCell>
            <TableCell align="left"><b>Exposure</b>    <span clasName="text-secondary" style={{ fontSize: '8px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-13px', marginTop: '5px' }} class="fas ps-2 fa-caret-up"></i></span></TableCell>
            <TableCell align="left"><b>Opens</b>   <span clasName="text-secondary" style={{ fontSize: '8px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-13px', marginTop: '5px' }} class="fas ps-2 fa-caret-up"></i></span></TableCell>
            <TableCell align="left"><b>Engagments</b>   <span clasName="text-secondary" style={{ fontSize: '8px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-13px', marginTop: '5px' }} class="fas ps-2 fa-caret-up"></i></span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover={true} key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
