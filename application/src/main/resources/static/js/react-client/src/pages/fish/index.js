// import React, { useState } from 'react';

// import axios from 'axios';
// import style from './style.module.scss';

// const Fishs = ({ fishs }) => {

//     const [fishsState, setFishsState] = useState(fishs);

//     const [fishState, setFishState] = useState({
//         name: "",
//         isSelected: false
//     });

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setFishState({
//             ...fishState,
//             [e.target.name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const userData = {
//             name: fishState.name,
//             isSelected: false
//         };

//         axios.post('http://localhost:8080/api/fishs/add-fish', userData).then((response) => {
//             console.log(response.status);
//             console.log('DATA', response.data);
//             setFishsState(response.data);
//         });
//     };

//     const handleDelete = (fishId) => {
//         axios.delete(`http://localhost:8080/api/fishs/${fishId}/delete-fish`).then((response) => {
//             console.log('Delete successful');
//             console.log('DATA', response.data);
//             setFishsState(response.data);
//         });
//     }

//     const handleSelectUpdate = (fishId, fishName) => {
//         const userData = {
//             name: fishName,
//             isSelected: true
//         }
//         axios.put(`http://localhost:8080/api/fishs/${fishId}/select-fish`, userData).then((response) => {
//             console.log('Update successful');
//             console.log('DATA', response.data);
//             setFishsState(response.data);
//         });
//     }

//     return (
//         <div className={style.fishForm}>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     value={fishState.name}
//                     onChange={handleChange}
//                     placeholder='Add a fish here'
//                 />
//                 <button type="submit">Add fish type</button>
//             </form>
//             <h3>Your fish</h3>
//             <div className={style.fishsContainer}>
//                 {fishsState.map(fish => (
//                     <div className={style.fishContainer} key={fish.id}>
//                         <p className={fish.selected ? style.selected : null} onClick={() => handleSelectUpdate(fish.id, fish.name)}>{fish.name}<button onClick={() => handleDelete(fish.id)}>x</button></p>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     );
// }

// export default Fishs;

