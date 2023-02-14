import React from 'react';
import './App.css';
import logo from './logo.svg';
import { ListView } from './components/DataTable';
import {DataTable} from './components/DataTable';
import {BasicTable} from './components/DataTable';
import { AddData } from './components/addData2';

function App() {
    return (
        <div>
            <nav className="navbar background">
                <ul className="nav-list">
                    <div className="logo">
                        <img
                        src={logo} alt="logo" 
                        style={{width: 150, height: 150}} />
                    </div>

                    <button class="btn btn-sm" onClick={null}>Add</button>
                    <button class="btn btn-sm" onClick={null}>Update</button>
                    <button class="btn btn-sm" onClick={null}>Delete</button>
                    <button class="btn btn-sm" onClick={null}>List View</button>
                   
                    {/* <li><a href="#tutorials">Edit</a></li> */}
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
            {/* <section className="section">
                <div className="box-main">
                    <div className="secondHalf">
                        <DataTable></DataTable>
                    </div>
                </div>
            </section> */}
            <section className="section">
                
                <AddData></AddData>
            </section>
            {/* <section className="section">
                <div className="box-main">
                    <div className="secondHalf">
                        <BasicTable></BasicTable>
                    </div>
                </div>
            </section> */}

            {/* <section className="section">
                <div className="secondHalf">
                    <p className="text-small">
                        Use above buttons to do the required CRUD operations
                    </p>
                </div>
            </section> */}


            {/* <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                        <p class="text-small">
                            When compared with C++, Java codes 
                            are generally more maintainable 
                            because Java does not allow many 
                            things which may lead to 
                            bad/inefficient programming if used 
                            incorrectly. For example, 
                            non-primitives are always references
                            in Java. So we cannot pass large
                            objects (like we can do in C++) to 
                            functions, we always pass references 
                            in Java. One more example, since there
                            are no pointers, bad memory access 
                            is also not possible. When compared 
                            with Python, Java kind of fits between
                            C++ and Python. The programs are written
                            in Java typically run faster than 
                            corresponding Python programs and slower 
                            than C++. Like C++, Java does static 
                            type checking, but Python does not.
                        </p>
                    </div>
                </div>
            </section> */}
            {/* <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            Machine Learning is the field of study 
                            that gives computers the capability to 
                            learn without being explicitly 
                            programmed. ML is one of the most exciting
                            technologies that one would have ever 
                            come across. As it is evident from the 
                            name, it gives the computer that makes 
                            it more similar to humans: The ability 
                            to learn. Machine learning is actively 
                            being used today, perhaps in many more 
                            places than one would expect.
                        </p>
                    </div>
                </div>
            </section> */}
            <p className='text-big'>''</p>
            <footer className="footer">
                <p className="text-footer">
                    Website structure credit ={'>'} GeeksForGeeks
                </p>
            </footer>
        </div>
    )
}
  
export default App
