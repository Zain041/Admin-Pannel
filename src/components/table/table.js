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
  createData('Text Card Title Goes Here', "$159",   3.7,4.3, 24, ),
  createData('Text Card Title Goes Here', "$237",  4.0,6.0, 24),
  createData('Text Card Title Goes Here', "$262", 4.3,9.0, 37),
  createData('Text Card Title Goes Here', "$305", 6.0 ,16.0, 67 ),

];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor: '#f2f4f5'}}>
          <TableRow>
            <TableCell><span style={{fontWeight:'600'}}>Deal</span></TableCell>
            <TableCell align="left"><span  style={{fontWeight:'600'}}>Price</span>   <span clasName="text-secondary" style={{ fontSize: '8px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-13px', marginTop: '5px' }} class="fas ps-2 fa-caret-up"></i></span></TableCell>
            <TableCell align="left"><span  style={{fontWeight:'600'}}>Exposure</span>    <span clasName="text-secondary" style={{ fontSize: '8px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-13px', marginTop: '5px' }} class="fas ps-2 fa-caret-up"></i></span></TableCell>
            <TableCell align="left"><span  style={{fontWeight:'600'}}>Opens </span>  <span clasName="text-secondary" style={{ fontSize: '8px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-13px', marginTop: '5px' }} class="fas ps-2 fa-caret-up"></i></span></TableCell>
            <TableCell align="left"><span  style={{fontWeight:'600'}}>Engagments</span>   <span clasName="text-secondary" style={{ fontSize: '8px', opacity: '0.5' }}><i class="fas ps-2 fa-caret-down"></i><i style={{ position: 'absolute', marginLeft: '-13px', marginTop: '5px' }} class="fas ps-2 fa-caret-up"></i></span></TableCell>
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
