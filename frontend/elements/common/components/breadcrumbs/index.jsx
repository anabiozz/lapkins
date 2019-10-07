import React from 'react';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { Link } from "react-router-dom";
import Locale from '../../../../utils/locale';
import routes from '../../../../routes'
const locale = new Locale('RU').get()

const excludePaths = [
  '/wallart/posters/*', 
  '/wallart/framed-posters-wood/*', 
  '/wallart/framed-posters-plastic/*',
  '/stationery/postcards/*',
];

const Breadcrumbs = ({ breadcrumbs }) => (

  <div className="breadcrumbs">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <div className="bc" key={match.url}>
      {
        <Link to={match.url || ""}>{locale.get(breadcrumb.props.children.toLowerCase())}</Link>
      }
      {
        index < breadcrumbs.length - 1 && <span>></span>
      }
      
      </div>
    ))}
  </div>
);

export default withBreadcrumbs(routes, {excludePaths})(Breadcrumbs);