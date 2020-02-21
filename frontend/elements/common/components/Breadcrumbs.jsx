import React from 'react';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { Link } from "react-router-dom";
import Locale from '../../../utils/locale';
import routes from '../../../routes';

const locale = new Locale('RU').get();

const excludePaths = [
  '/catalog/wallart/posters-without-frame/*',
  '/catalog/wallart/posters-without-frame/*',
  '/catalog/wallart/framed-posters-wood/*',
  '/catalog/wallart/framed-posters-plastic/*',
  '/catalog/stationery/postcards/*',
];

const Breadcrumbs = ({ breadcrumbs }) => (

  <div className="breadcrumbs">
    {breadcrumbs.filter(item =>  {
      return item.breadcrumb.props.children && item.breadcrumb.props.children !== "Catalog"
    }).map(({ breadcrumb, match }, index) => (
      <div className="bc" key={match.url}>
      {
        <Link to={match.url || ""}>{breadcrumb.props.children}</Link>
      }
      {
        index < breadcrumbs.length - 2 && <span>></span>
      }
      </div>
    ))}
  </div>
);

export default withBreadcrumbs(routes, {excludePaths})(Breadcrumbs);