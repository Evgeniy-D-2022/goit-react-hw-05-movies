import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
import { useEffect, useState } from "react";
import { getMovieReview } from "../../Api";

const Reviews = () => {
    const { id } = useParams();
    const [review, setReview] = useState([]);

    useEffect(()=> {
        getMovieReview(id).then(data=> setReview(data));
    }, [id]);

    return (
    
       <div className={css.review_wrap}>
        {review.length > 0 ? (
        <ul className={css.review_list}>
            {review.map(({ content, author, id })=> (
                <li className={css.review_item} key={id}>
                <p className={css.review_text}>Author: {author}</p>
                <p className={css.review_text}>{content}</p>
                </li>
            ))}
        </ul>) : ("Not review")}
       </div>);
    };


export default Reviews;