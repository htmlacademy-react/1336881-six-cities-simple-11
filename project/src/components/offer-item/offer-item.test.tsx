import { Offer } from '../../types/offer';
import { render, screen } from '@testing-library/react';
import OfferItem from './offer-item';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';


describe('component-offer-item', () => {
  it('component-should-render-correctly', () => {
    const offer:Offer = {
      bedrooms: 1,
      city: {
        location: {
          latitude: 1,
          longitude: 1,
          zoom: 1,
        },
        name: 'string',
      },
      description: 'string',
      goods: [],
      host: {
        avatarUrl: 'string',
        id: 1,
        isPro: true,
        name: 'string',
      },
      id: 1,
      images: [],
      isPremium: true,
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      maxAdults: 1,
      previewImage: 'string',
      price: 1,
      rating: 1,
      title: 'string',
      type:'string',
    };
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OfferItem {...offer}/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
  it('component-without-premium', () => {
    const offer:Offer = {
      bedrooms: 1,
      city: {
        location: {
          latitude: 1,
          longitude: 1,
          zoom: 1,
        },
        name: 'string',
      },
      description: 'string',
      goods: [],
      host: {
        avatarUrl: 'string',
        id: 1,
        isPro: true,
        name: 'string',
      },
      id: 1,
      images: [],
      isPremium: false,
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
      maxAdults: 1,
      previewImage: 'string',
      price: 1,
      rating: 1,
      title: 'string',
      type:'string',
    };
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OfferItem {...offer}/>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.queryByText('Premium')).not.toBeInTheDocument();
  });
});


