import React,{useEffect, useState} from "react";
import reviewsbackground from '../../assets/reviewsbackground.jpg';
import axios from "axios";
import style from './style.module.scss';

const Reviews = () => {

    const [reviews, setReviews] = useState(null);
    const [reviewState, setReviewState] = useState({name:"", text:""})
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/api/reviews');
            setReviews(result.data);
        }
        fetchData()
    }, []);


    const handleChange = (e) => {
        const value = e.target.value;
        setReviewState({
            ...reviewState,
            [e.target.name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        console.log(reviewState)
        axios.post('/api/reviews', reviewState).then((response) => {
            setReviews(response.data)
        });
    };

    return (
        <div className={style.reviews}>
            <p className={style.statement}><span>We appreciate any feedback. Please leave a review and let us know what you thought of our page! </span></p>
        <div className={style.review__form}>
            <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={reviewState.name} onChange={handleChange} placeholder='Enter Your Name' />
                    <textarea type="text" name="text" value={reviewState.text} onChange={handleChange} placeholder='Enter Your Review' />
                    <button type="submit">Submit Review</button>
                  
            </form>    

        </div > 
        <div className={"review__section"}>
            {reviews==null ? <h2>Loading Reviews ...</h2> :
                <div >
                    <h2><span>Reviews</span></h2>
                    <div className={"review__text"}>
                    <ul>
                        {reviews.map(review => (
                        <div className="new__review" key={review.reviewId}>
                            <div className = {"individual__review"}>
                                <p>Review Name: {review.name}</p>
                                <p>Review Text: {review.text}</p>
                            </div>
                        </div>
                        ))}
                    </ul>
                    </div>
                </div>
            }
           </div> 
        </div>
        
    )
}

export default Reviews;