
import { useState } from "react";


export const DataTable = () => {
    const initState = [
            {Id: "100V", Name: "Dilanka", Occupation: "Senior SE"},
            {Id: "101V", Name: "Tishan", Occupation: "Senior SE"},
            {Id: "102V", Name: "Nishalya", Occupation: "intern"}
    ];
    const [state, setState] = useState(initState);
  
    return (
      <table>
        <tr key={"header"}>
            {Object.keys(state[0]).map((key) => ( <th>{key}</th> ))}
        </tr> 

        {state.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((val) => (
              <td>{val}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
  

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//       borderCollapse: 'separate',
//       borderSpacing: '0px 4px'
//   }
//   });
  
//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//     createData("Eclair", 262, 16.0, 24, 6.0),
//     createData("Cupcake", 305, 3.7, 67, 4.3),
//     createData("Gingerbread", 356, 16.0, 49, 3.9)
//   ];
  
//   export const BasicTable = () => {
//     const classes = useStyles();
  
//     return (
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Dessert (100g serving)</TableCell>
//               <TableCell align="right">Calories</TableCell>
//               <TableCell align="right">Fat&nbsp;(g)</TableCell>
//               <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//               <TableCell align="right">Protein&nbsp;(g)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody component={Paper}>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.name}
//                 className={classes.tableRow}
//                 styles={{ marginTop: 8 }}
//               >
//                 <TableCell component="th" scope="row" style={{ width: 100 }}>
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
//                 <TableCell align="right">{row.carbs}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
//   }
  