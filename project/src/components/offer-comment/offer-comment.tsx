import React from 'react';
import RatingStar from '../rating-star/rating-star';
import { Grade } from '../../types/rating-star';

function OfferComment() {

  const [formData, setFormData] = React.useState({
    comment: '',
  });

  const fieldChangeHandle = (evt:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
  Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingStar title={Grade.star1} id={1} onChange={fieldChangeHandle}/>
        <RatingStar title={Grade.star2} id={2} onChange={fieldChangeHandle}/>
        <RatingStar title={Grade.star3} id={3} onChange={fieldChangeHandle}/>
        <RatingStar title={Grade.star4} id={4} onChange={fieldChangeHandle}/>
        <RatingStar title={Grade.star5} id={5} onChange={fieldChangeHandle}/>
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
          disabled
        >
    Submit
        </button>
      </div>
    </form>
  );
}

export default OfferComment;
