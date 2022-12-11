
import { Offer } from '../../types/offer';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useAppDispath } from '../../hooks/useAppDispatch';
import { handleActiveCardAction} from '../../store/actions';
import { getRating } from '../../utils';

function OfferItem (props:Offer) {
  const navigate = useNavigate();

  const clickHandler = () => {
    window.scrollTo(0,0);
    navigate(`/offer/${props.id}`);
  };

  const dispath = useAppDispath();



  return (
    <article className="cities__card place-card" onMouseOver={() => {dispath(handleActiveCardAction(props));}}>
      {props.isPremium ? <div className="place-card__mark"> <span>Premium</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <div onClick={clickHandler}>
          <img
            className="place-card__image"
            src={props.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </div>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{props.price} €</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRating(props.rating)}` }} />
            <span className="visually-hidden">{props.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${props.id}`}>
            {props.title}
          </Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}


export default OfferItem;
