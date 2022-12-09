import { AuthorizationStatus } from '../../types/auth';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/actions';
import { useAppDispath } from '../../hooks/useAppDispatch';
import React from 'react';


function Header() {
  const { authorizationStatus, user} = useAppSelector((state) => state);

  const dispath = useAppDispath();

  const logoutHandler = (e:React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispath(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth && user ?
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{
                      backgroundImage: user.avatarUrl ? `url(${user.avatarUrl})` : 'url(../img/avatar.svg)'
                    }}
                    />
                    <span className="header__user-name user__name">
                      {user?.email}
                    </span>
                  </div>
                </li> : null}
              {authorizationStatus === AuthorizationStatus.Auth ?
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#" onClick={logoutHandler}>
                    <span className="header__signout">Sign out</span>
                  </a>
                </li> :
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
