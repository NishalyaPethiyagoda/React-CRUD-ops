
import React, {useState} from 'react'
import Modal from 'react-modal'
import { array } from '../data/UserData'


const AddPerson =( {onAddEntry} )=> {

    const [userId, setUserId] = useState('')
    const [name , setName] = useState('')
    const [occupation, setOccupation] =useState('')

    
    const AddArrayEntry = (event) => {

        event.preventDefault();

        const newEntry ={userId, name, occupation} ;

        onAddEntry(newEntry);
        setUserId("");
        setName("");
        setOccupation("");
        setModalIsOpen(false);
    };

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <button className='btn btn-sm'
                onClick={() => setModalIsOpen(true) }>
                Add Person
            </button>
            <Modal isOpen={modalIsOpen}>
                <h2>Add Person</h2>
                <div>
                    <form>
                        <input 
                            className='firsthalf'
                            type="text"
                            placeholder="Enter Id"
                            value={userId}
                            onChange={(e)=>setUserId(e.target.value)}
                        />
                        <input
                            className='firsthalf'
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <input
                            className='firsthalf'
                            type="text"
                            placeholder="Enter occupation"
                            value={occupation}
                            onChange={(e)=>setOccupation(e.target.value)}
                            />

                        <div className='first'>
                            <button
                                className='btn btn-sm'
                                type="submit"
                                onClick={AddArrayEntry} 

                            >submit</button></div>
                        </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddPerson;