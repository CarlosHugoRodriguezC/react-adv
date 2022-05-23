import { Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { routes } from './Routes';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>} >
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='logo' />
            <ul>
              {routes.map((route) => (
                <li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) =>
                      isActive ? 'nav-active' : ''
                    }>
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
