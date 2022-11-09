
import { Offer } from '../../types/offer';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function OfferItem (props:Offer) {
  const [activeOffer, setActiveOffer] = React.useState(props.id);

  return (
    <article className="cities__card place-card" onMouseOver={() => {setActiveOffer(activeOffer);}}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€120</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>
            {props.title}
          </Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}


export default OfferItem;
