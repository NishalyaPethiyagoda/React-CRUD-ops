
import React from 'react';

const DataTable = ({array})=> {
    return (

        <table >
            <thead>
                <tr>
                    <th > Id</th>
                    <th > Name</th>
                    <th >Occupation </th>
                
                </tr >
                </thead>
                <tbody >

                {array.map((ele) => (
                    <tr key={ele.userId}>

                    <td>{ele.userId}</td>
                    <td>{ele.name}</td>
                    <td>{ele.occupation}</td>
                    
                    </tr>
                ))}
                </tbody>
            
            </table>
    )
}

export default DataTable;