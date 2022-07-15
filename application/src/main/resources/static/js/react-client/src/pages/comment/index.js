import React from 'react';
// import phoneIcon from '../../assets/contact.png';
import style from './style.module.scss';

const CommentScreen = () => {
    return (
        <div className={style.comment}>
            <label>Review Box</label>
            <form>
                <textarea placeholder='Leave a review here please!' rows="10" cols="50" required></textarea>
                <button type='submit'>Submit</button>
                
            </form>


            {/* <h2><img src={phoneIcon} alt='phone icon' />Contact Us Today!</h2>
            <h4>(555) 555-5555</h4>
            <br></br>
            <h3>Comment<textarea rows={10} cols={30} placeholder='Leave a comment here with your Name and contact please!'></textarea></h3> */}
           
        </div>
    );
}

export default CommentScreen;





