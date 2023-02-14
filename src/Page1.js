
import logo from './logo.svg';
import { AddData } from './components/AddData';
import { Modal } from 'react-modal';

import Button from '@mui/material';
import Box from '@mui/material';
import Typography from '@mui/material';
import { AddPerson } from './components/AddPerson';


export const PageComponents1 = () => {

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
                       <AddPerson></AddPerson>
                    </div>
                    
                    {/* <button class="btn btn-sm" onClick={null}>Add</button>
                    <button class="btn btn-sm" onClick={null}>Update</button>
                    <button class="btn btn-sm" onClick={null}>Delete</button>
                 */}
                </ul>
  
                <div className="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search ID</button>
                </div>
            </nav>
  
            <section className="section">
                <div>
                    <div className="firstHalf">
                        <h1 className="text-big">
                            Table to perform CRUD operations
                        </h1>
                        
                    </div>
                </div>
            </section>
            
            <section className="section">
                
                <AddData></AddData>
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
  
