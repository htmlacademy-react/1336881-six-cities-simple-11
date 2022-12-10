import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispath } from '../../hooks/useAppDispatch';
import { changeCityAction } from '../../store/actions';
import { City } from '../../types/city';


function Tabs ():JSX.Element {

  const {currentCity} = useAppSelector((state) => state);
  const dispath = useAppDispath();

  const setActiveTabHandler = (city:City) => {
    dispath(changeCityAction(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${currentCity.name === 'Paris' ? 'tabs__item--active' : ''}`} onClick={() => setActiveTabHandler({
              name: 'Paris',
              lat: 48.85661,
              lng: 2.351499,
              zoom: 13
            })} href="#"
            >
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${currentCity.name === 'Cologne' ? 'tabs__item--active' : ''}`} onClick={() => setActiveTabHandler({
              name: 'Cologne',
              lat: 50.938361,
              lng: 6.959974,
              zoom: 13
            })} href="#"
            >
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${currentCity.name === 'Brussels' ? 'tabs__item--active' : ''}`} onClick={() => setActiveTabHandler({
              name: 'Brussels',
              lat: 50.846557,
              lng: 4.351697,
              zoom: 13
            })} href="#"
            >
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${currentCity.name === 'Amsterdam' ? 'tabs__item--active' : ''}`} onClick={() => setActiveTabHandler({
              name: 'Amsterdam',
              lat: 52.37454,
              lng: 4.897976,
              zoom: 13
            })} href="#"
            >
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${currentCity.name === 'Hamburg' ? 'tabs__item--active' : ''}`} onClick={() => setActiveTabHandler({
              name: 'Hamburg',
              lat: 53.550341,
              lng: 10.000654,
              zoom: 13
            })} href="#"
            >
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item">
            <a className={`locations__item-link tabs__item ${currentCity.name === 'Dusseldorf' ? 'tabs__item--active' : ''}`} onClick={() => setActiveTabHandler({
              name: 'Dusseldorf',
              lat: 51.225402,
              lng: 6.776314,
              zoom: 13
            })} href="#"
            >
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
