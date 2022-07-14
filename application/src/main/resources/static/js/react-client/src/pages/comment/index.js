// import React, { useState } from 'react';
// // import React from 'react';
// import axios from 'axios';
// import style from './style.module.scss';
// // import phoneIcon from '../../assets/contact.png';

// const Comments = ({ comments }) => {

//     const [commentsState, setCommentsState] = useState(comments);

//     const [commentState, setCommentState] = useState({
//         writeComment: "",
//         isSelected: false
//     });

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setCommentState({
//             ...commentState,
//             [e.target.writeComment]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const userData = {
//             writeComment: commentState.writeComment,
//             isSelected: false
//         };

//         axios.post('http://localhost:8080/api/comments/add-comment', userData).then((response) => {
//             console.log(response.status);
//             console.log('DATA', response.data);
//             setCommentsState(response.data);
//         });
//     };

//     const handleDelete = (commentId) => {
//         axios.delete(`http://localhost:8080/api/comments/${commentId}/delete-comment`).then((response) => {
//             console.log('Delete successful');
//             console.log('DATA', response.data);
//             setCommentsState(response.data);
//         });
//     }

//     const handleSelectUpdate = (commentId, commentName) => {
//         const userData = {
//             writeComment: commentName,
//             isSelected: true
//         }
//         axios.put(`http://localhost:8080/api/comments/${commentId}/select-comment`, userData).then((response) => {
//             console.log('Update successful');
//             console.log('DATA', response.data);
//             setCommentsState(response.data);
//         });
//     }

//     return (
//         <div className={style.commentForm}>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="writeComment"
//                     value={commentState.writeComment}
//                     onChange={handleChange}
//                     placeholder='Add a comment here'
//                 />
//                 <button type="submit">Add Comment</button>
//             </form>
//             <h3>Your comments</h3>
//             <div className={style.commentsContainer}>
//                 {commentsState.map(comment => (
//                     <div className={style.commentContainer} key={comment.id}>
//                         <p className={comment.selected ? style.selected : null} onClick={() => handleSelectUpdate(comment.id, comment.writeComment)}>{comment.writeComment}<button onClick={() => handleDelete(comment.id)}>x</button></p>
//                     </div>
//                 ))}
//             </div>
//         </div>

//     );
// }

// export default Comments;


