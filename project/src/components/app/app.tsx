import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
// import DetailScreenNotAuth from '../../pages/detail-screen-not-auth/detail-screen-not-auth';
import DetailScreenAuth from '../../pages/detail-screen-auth/detail-screen-auth';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

type AppScreenProps = {
  offersCount: number;
  offerCards: Offer[];
  reviewItems: Review[];
}

function App({offersCount, offerCards, reviewItems}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen offersCount={offersCount} offerCards={offerCards}/>}></Route>
        <Route path={AppRoute.Login} element={<LoginScreen />}></Route>
        <Route path={AppRoute.Room} element={<DetailScreenAuth />}></Route>
        <Route path='*' element={<NotFoundScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
