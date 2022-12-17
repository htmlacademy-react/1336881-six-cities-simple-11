import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import Tabs from './tabs';
import { NameSpace } from '../../const';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.offers]: {
    citys: [
      {
        name: 'Paris1',
        lat: 48.87861,
        lng: 2.357499,
        zoom: 16
      },
      {
        name: 'Paris2',
        lat: 48.87861,
        lng: 2.357499,
        zoom: 16
      },
      {
        name: 'Paris3',
        lat: 48.87861,
        lng: 2.357499,
        zoom: 16
      }
    ],
    currentCity: {
      name: 'Paris1',
      lat: 48.87861,
      lng: 2.357499,
      zoom: 16
    }
  }
});
describe('component-tabs', () => {
  it('should-handle-click-correctly', () => {

    render(
      <Provider store={store}>
        <Tabs></Tabs>
      </Provider>
    );
    screen.getByText('Paris2').click();
    setTimeout(() => {
      expect(screen.getByTestId('Paris2').classList.contains('tabs__item--active')).toBeTruthy();
    },0);
  });
});


