
import logo from './logo.svg';
import React, { useState } from 'react';
import AddPerson from './components/AddPerson';
import DataTable from './components/Table';
import { array } from './data/UserData';

export const PageComponents1 = () => {
    
    const[dataArray, setDataArray] = useState(array);

    const handleAddArray = (newEntry) => {
        setDataArray([...dataArray, newEntry]);
    }

    const deleteEntry = (rowId) => {
        const UpdatedDataAArray = dataArray.filter((entry)=>entry.userId !== rowId);
        setDataArray(UpdatedDataAArray);
        
    }

    return (
        <div>
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img
                        src={logo} alt="logo" 
                        style={{width: 150, height: 150}} />
                    </div>
                    <div>
                       <AddPerson onAddEntry={handleAddArray}></AddPerson>
                    </div>
            
                    {/* <button class="btn btn-sm" onClick={null}>Delete</button> */}
                </ul>
  
                <div className="rightNav">
                    <input type="text" name="search" id="search" />
                    <button className="btn btn-sm">Search ID</button>
                </div>
            </nav>
  
            {/* <section className="section"> */}
                <div>
                    <div className="firstHalf">
                        <h1 className="text-big">
                            Table to perform CRUD operations
                        </h1>
                        
                    </div>
                </div>
            {/* </section> */}
            
            <section className="section">
                <DataTable array1={dataArray} onDelete={deleteEntry}></DataTable>
            </section>
            
            <p className='text-big'></p>
            <footer className="footer">
                <p className="text-footer">
                    Website structure credit ={'>'} GeeksForGeeks
                </p>
            </footer>
        </div>
    )
}
  
