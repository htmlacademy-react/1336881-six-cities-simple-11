import React from 'react';
import RatingStar from '../rating-star/rating-star';
import { Grade } from '../../types/rating-star';
import { useAppDispath } from '../../hooks/useAppDispatch';
import { addCommentsAction } from '../../store/actions';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function OfferComment() {

  const params = useParams<{id: string}>();

  const dispath = useAppDispath();


  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState('');

  // const fieldChangeHandle = (evt:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  //   const {name, value} = evt.target;
  //   setFormData({...formData, [name]: value});
  // };


  const submitFormHandler = (e:React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(comment.length < 50) {
      toast.warn('comment length have to be 50 at liast');
      return;
    }
    dispath(addCommentsAction({id:params.id!, comment, rating}));
    setRating(0);
    setComment('');
  };


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
  Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingStar title={Grade.star1} id={5} currentRating={rating} onChange={setRating}/>
        <RatingStar title={Grade.star2} id={4} currentRating={rating} onChange={setRating}/>
        <RatingStar title={Grade.star3} id={3} currentRating={rating} onChange={setRating}/>
        <RatingStar title={Grade.star4} id={2} currentRating={rating} onChange={setRating}/>
        <RatingStar title={Grade.star5} id={1} currentRating={rating} onChange={setRating}/>
      </div>
      <textarea onChange={(e) => setComment(e.target.value)} value={comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={300}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
    To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
    your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={submitFormHandler}
          disabled={comment.length < 50}
        >
    Submit
        </button>
      </div>
    </form>
  );
}

export default OfferComment;
