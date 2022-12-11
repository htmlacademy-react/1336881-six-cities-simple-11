import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispath } from '../../hooks/useAppDispatch';
import { useEffect } from 'react';
import { getCommentsAction, getNearOffersAction } from '../../store/actions';
import OfferItem from '../../components/offer-item/offer-item';
import { AuthorizationStatus } from '../../types/auth';

import OfferComment from '../../components/offer-comment/offer-comment';
import Map from '../../components/main-map/main-map';
import ReviewsItem from '../../components/reviews-item/reviews-item';
import Header from '../../components/header/header';
import Spiner from '../../components/spiner/spiner';
import { getRating } from '../../utils';

function OfferScreen () {
  const params = useParams<{id: string}>();

  const { offers, nearOffer, comments, authorizationStatus, isLoading } = useAppSelector((state) => state);
  const currentOffer = offers.find((el) => Number(params.id) === el.id);
  const dispath = useAppDispath();

  useEffect(() => {
    if(params.id){
      dispath(getNearOffersAction(params.id));
      dispath(getCommentsAction(params.id));
    }
  }, []);

  if(isLoading){
    return <Spiner/>;
  }
  if(currentOffer) {
    return (
      <div className="page">
        <div style={{ display: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-arrow-select" viewBox="0 0 7 4">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
              />
            </symbol>
            <symbol id="icon-bookmark" viewBox="0 0 17 18">
              <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
            </symbol>
            <symbol id="icon-star" viewBox="0 0 13 12">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
              />
            </symbol>
          </svg>
        </div>
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.slice(0, 6).map((src) =>
                  (
                    <div key={src} className="property__image-wrapper">
                      <img
                        className="property__image"
                        src={src}
                        alt="Photo studio"
                      />
                    </div>)
                )}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.isPremium ? <div className="property__mark"> <span>Premium</span></div> : null}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: getRating(currentOffer.rating) }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedroom{`${currentOffer.bedrooms === 1 ? '' : 's'}`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {`Max ${currentOffer.maxAdults} adult${currentOffer.bedrooms === 1 ? '' : 's'}`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{`€${currentOffer.price}`}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&rsquo;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((el) => <li key={el} className="property__inside-item">{el}</li>)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src="img/avatar-angelina.jpg"
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">Angelina</span>
                    <span className="property__user-status">Pro</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                A quiet cozy and picturesque that hides behind a a river by the
                unique lightness of Amsterdam. The building is green and from
                18th century.
                    </p>
                    <p className="property__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{comments.length}</span>
                  </h2>
                  <ul className="reviews__list">
                    {comments.slice(0, 9).map((comment) => (
                      <ReviewsItem {...comment} key={comment.id}></ReviewsItem>
                    ))}
                  </ul>
                  {authorizationStatus === AuthorizationStatus.Auth ? <OfferComment /> : null}
                </section>
              </div>
            </div>
            <Map city={
              {name: currentOffer.city.name, lat: currentOffer.city.location.latitude, lng: currentOffer.city.location.longitude, zoom: 10}
            } points={nearOffer} isMainMap={false}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
          Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {nearOffer.map((offer) => (
                  <OfferItem {...offer} key={offer.id}></OfferItem>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
  return <Navigate to={AppRoute.NotFound}/>;
}

export default OfferScreen;
