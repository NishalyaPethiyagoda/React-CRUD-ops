
import React, {useState} from 'react'
import Modal from 'react-modal'


export const AddPerson = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            <button className='btn btn-sm'
                onClick={() => setModalIsOpen(true) }>
                Add Person
            </button>
            <Modal isOpen={modalIsOpen}>
                <h2>Add Person</h2>
                <p> fill the following fields to add a person</p>
            </Modal>
        </div>
    )
}