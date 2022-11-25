import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispath } from '../../hooks/useAppDispatch';
import { getOffersAction } from '../../store/actions';
import { useEffect } from 'react';
import OfferItem from '../../components/offer-item/offer-item';

const OffersList = ():JSX.Element => {

  const { offers } = useAppSelector((state) => state);
  const dispath = useAppDispath();

  useEffect(() => {
    dispath(getOffersAction());
  }, []);


  return (
    <>
      {
        offers.map((offer) => (
          <OfferItem key={offer.id} {...offer}/>
        ))
      }
    </>
  );
};

export default OffersList;
