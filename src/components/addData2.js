import React from 'react';
import { useState,useRef } from 'react';
import { userDataArray } from '../userData';

export const AddData =() => {

  const [userDataArray ,setarray] = useState([])

  const [userId, setUserId] = useState('')
  const [name , setName] = useState('')
  const [occupation, setOccupation] =useState('')
  
  
  return (

    <div>
    <p className='firsthalf'>Add your data using the below form</p>
    <p></p>  
      <form>
          <input 
            className='firsthalf'
            type="text"
            onChange={(e)=>setUserId(e.target.value)}
            placeholder="Enter Id"
          />
          <input
            className='firsthalf'
            type="text"
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter name"
          />
          
          <input
            className='firsthalf'
            type="text"
            onChange={(e)=>setOccupation(e.target.value)}
            placeholder="Enter occupation"
            />
          <button
            className='btn btn-sm'
            type="submit"
           
            onClick={e => {
                e.preventDefault();
            
                setarray(userDataArray=>[...userDataArray,{userId:userId, name:name, occupation:occupation}])
                console.log(userDataArray)
            }}
          >add</button>
          </form>
          <table className="table table-dark table-striped table-bordered">
            <thead>
              <tr>
                <th > Id</th>
                <th > Name</th>
                <th >Occupation </th>
              
              </tr>
            </thead>
            <tbody>
              {userDataArray.map((numList) => (
                <tr>
                <td>{numList['userId']}</td>
                <td>{numList['name']}</td>
                <td>{numList['occupation']}</td>
                  
                </tr>
              ))}
            </tbody>
           
          </table>
    </div>
  );
}
