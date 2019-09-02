import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';

const UserBreadcrumb = ({ match }) =>
  <span>{match.params.userId}</span>; // use match param userId to fetch/display user name

const routes = [
  { path: 'users', breadcrumb: 'Users' },
  { path: 'users/:userId', breadcrumb: UserBreadcrumb},
  { path: 'something-else', breadcrumb: ':)' },
];

export default ({ path }) => {
  console.log(path);
  
  return (
    <BrowserRouter>
      <Fragment>

        <Header />

        {/* <section className="crumb">
            <Breadcrumbs breadcrumbs={routes} />
        </section> */}

        <section className="content">
          {renderRoutes(Routes)}
        </section>

        <Footer />

      </Fragment>
    </BrowserRouter>
  );
};