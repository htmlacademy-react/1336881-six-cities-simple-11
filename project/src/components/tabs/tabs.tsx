import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispath } from '../../hooks/useAppDispatch';
import { City } from '../../types/city';
import { changeCityAction } from '../../store/offers-process/offers-process';


function Tabs ():JSX.Element {

  const {currentCity, citys} = useAppSelector((state) => ({...state.offers}));
  const dispath = useAppDispath();

  const handleSetActiveTab = (city:City) => {
    dispath(changeCityAction(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citys.map((el) => (
            <li className="locations__item" key={el.name}>
              <a className={`locations__item-link tabs__item ${currentCity.name === el.name ? 'tabs__item--active' : ''}`} onClick={() => handleSetActiveTab(el)} href="#">
                <span>{el.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
