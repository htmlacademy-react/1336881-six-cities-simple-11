import React from 'react';
import RatingStar from '../rating-star/rating-star';
import { Grade } from '../../types/rating-star';
import { useAppDispath } from '../../hooks/useAppDispatch';
import { addCommentsAction } from '../../store/actions';
import { useParams } from 'react-router-dom';

function OfferComment() {

  const params = useParams<{id: string}>();

  const dispath = useAppDispath();

  const [formData, setFormData] = React.useState({
    comment: '',
    rating: 0
  });

  const fieldChangeHandle = (evt:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };


  const submitFormHandler = (e:React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispath(addCommentsAction({id:params.id!, ...formData}));
    setFormData({comment: '', rating: 0});
  };


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
  Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingStar title={Grade.star1} id={1} currentRating={formData.rating} onChange={fieldChangeHandle}/>
        <RatingStar title={Grade.star2} id={2} currentRating={formData.rating} onChange={fieldChangeHandle}/>
        <RatingStar title={Grade.star3} id={3} currentRating={formData.rating} onChange={fieldChangeHandle}/>
        <RatingStar title={Grade.star4} id={4} currentRating={formData.rating} onChange={fieldChangeHandle}/>
        <RatingStar title={Grade.star5} id={5} currentRating={formData.rating} onChange={fieldChangeHandle}/>
      </div>
      <textarea onChange={fieldChangeHandle} value={formData.comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
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
        >
    Submit
        </button>
      </div>
    </form>
  );
}

export default OfferComment;
