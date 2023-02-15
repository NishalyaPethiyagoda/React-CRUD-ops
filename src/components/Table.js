
import * as React from 'react';
import UpdatePerson from './UpdatePerson'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Button, TableContainer } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link, useNavigate} from 'react-router-dom'
//import { array } from '../data/UserData';

const DataTable = (props )=> {
    
    
    
    
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Occupation</TableCell>
              <TableCell></TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                props.array1 && props.array1.length >0
                ?
                props.array1.map((eachRow) => (
                
                    <TableRow key={eachRow.userId}>

                    {/* <TableCell component="th" scope="row">{eachRow.userId}</TableCell> */}
                    <TableCell align="left">{eachRow.userId}</TableCell>
                    <TableCell align="left">{eachRow.name}</TableCell>
                    <TableCell align="left">{eachRow.occupation}</TableCell>
                    <TableCell>
                        <Button className="btn " onClick={()=> {}}>Update</Button>
                    </TableCell>
                    <TableCell>
                    <Button className="btn " onClick={() =>props.onDelete(eachRow.userId) }>Delete</Button>
                    </TableCell>
                    </TableRow>
                    ))
                : "no data available"
                    
            }
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default DataTable;
  