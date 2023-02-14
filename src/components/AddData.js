import React from 'react';
import { useState,useRef } from 'react';
import { array } from '../data/UserData';



export const AddData =() => {

  const [dataArray ,setArray] = useState(array)

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
          <div className='first'>
            <button
            className='btn btn-sm'
            type="submit"
           
            onClick={e => {
                e.preventDefault();
            
                setArray(dataArray=>[...array,{userId:userId, name:name, occupation:occupation}])
            }}
          >add</button></div>
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
              {dataArray.map((numList) => (
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
