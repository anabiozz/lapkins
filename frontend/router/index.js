import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import Breadcrumbs from '../common/components/breadcrumbs/Breadcrumbs';
import Search from '../common/components/search/Search';

export default ({ path }) => {
  console.log(path);
  
  return (
    <BrowserRouter>
      <Fragment>

        <Header />
{/* 
        <section className="search_content">
          <div className="search_wrapper">
            <Search />
            <Breadcrumbs />
          </div>
        </section> */}

        <section className="content">
          {renderRoutes(Routes)}
        </section>

        <Footer />

      </Fragment>
    </BrowserRouter>
  );
};