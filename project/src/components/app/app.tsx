import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import DetailScreenNotAuth from '../../pages/detail-screen-not-auth/detail-screen-not-auth';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen offersCount={offersCount}/>}></Route>
        <Route path={AppRoute.Login} element={<LoginScreen />}></Route>
        <Route path={AppRoute.Room} element={<DetailScreenNotAuth />}></Route>
        <Route path='*' element={<NotFoundScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
