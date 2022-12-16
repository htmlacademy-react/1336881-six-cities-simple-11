import { useAppSelector } from '../../hooks/useAppSelector';
import OfferItem from '../../components/offer-item/offer-item';
import Spiner from '../spiner/spiner';

const OffersList = ():JSX.Element => {

  const { offers, isLoading } = useAppSelector((state) => ({...state.offers}));

  if(isLoading){
    return <Spiner/>;
  }

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
