import React from 'react';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { Link } from "react-router-dom";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <div className="breadcrumbs">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <div className="bc" key={match.url}>
        <Link to={match.url || ""}>{breadcrumb}</Link>
        {index < breadcrumbs.length - 1 && <span>></span>}
      </div>
    ))}
  </div>
);

export default withBreadcrumbs()(PureBreadcrumbs);