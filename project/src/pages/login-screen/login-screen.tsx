import React, { useState, useRef, useEffect, useMemo } from 'react';
import { loginAction } from '../../store/actions';
import { useAppDispath } from '../../hooks/useAppDispatch';
import Header from '../../components/header/header';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AuthorizationStatus } from '../../types/auth';
import { getRandomPositiveInteger, validatePassword } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { changeCityAction } from '../../store/offers-process/offers-process';

function LoginScreen () {

  const dispath = useAppDispath();
  const { authorizationStatus, citys } = useAppSelector((state) => ({...state.offers, ...state.user}));

  const randomCity = useMemo(() => citys[getRandomPositiveInteger(0, citys.length - 1)],[citys]);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmitForm = (e:React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(passwordValue.length <= 1) {
      toast.warn('password must be more than 1 character');
      return;
    }

    const isValid = validatePassword(passwordValue);

    if(isValid) {
      dispath(loginAction({email: emailValue, password: passwordValue}));
    }

  };

  useEffect(()=> {
    if(authorizationStatus === AuthorizationStatus.Auth){
      window.history.back();
    }
  },[authorizationStatus]);

  return (
    <div className="page page--gray page--login">
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
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  value={emailValue}
                  onChange = {(evt) => setEmailValue(evt.target.value)}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  value={passwordValue}
                  onChange = {(evt) => setPasswordValue(evt.target.value)}
                  required
                />
              </div>
              <button className="login__submit form__submit button" onClick={handleSubmitForm} type="submit">
            Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <div className="locations__item-link" style={{cursor: 'pointer'}} onClick={() => {
                dispath(changeCityAction(randomCity));
                navigate('/');
              }}
              >
                <span>{randomCity.name}</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
