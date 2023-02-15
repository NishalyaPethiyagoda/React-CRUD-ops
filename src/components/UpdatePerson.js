// import * as React from 'react';
// import Modal from 'react-modal';
// import { useState } from 'react';
// import { array } from '../data/UserData';

// const UpdatePerson =(props) =>{

//     // const userIdToFind = props.userId;

//     // const index = array.findIndex(ele => ele.userId === userIdToFind);

//     const [userId, setUserId] = useState(props.userId)
//     const [name, setName] = useState(props.name)
//     const [occupation, setOccupation] = useState(props.name)

//     const [modalIsOpen, setModalIsOpen] = useState(false)

//     return(
//         <div>
//             <Modal isOpen={true} >
//                 <h2>Update person information</h2>
//                 <form>
//                     <input
//                         className='firsthalf'
//                         type= "text"
//                         placeholder='Enter ID'
//                         value={userId}
//                         onChange={(e)=>setUserId(e.target.value)}
//                         />
//                     <input
//                         className='firsthalf'
//                         type="text"
//                         placeholder="Enter name"
//                         value={name}
//                         onChange={(e)=>setName(e.target.value)}
//                     />
//                     <input
//                         className='firsthalf'
//                         type="text"
//                         placeholder="Enter occupation"
//                         value={occupation}
//                         onChange={(e)=>setOccupation(e.target.value)}
//                         />

//                     <div className='first'>
//                         <button
//                             className='btn btn-sm'
//                             type="submit"
//                             onClick={AddArrayEntry setModalIsOpen(false)} 

//                         >submit</button></div>
//                 </form>
//             </Modal>
//         </div>
//     )
// }
// export default UpdatePerson;