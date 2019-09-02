import React from 'react';
import { NavLink } from 'react-router-dom';
import { withBreadcrumbs } from './withBreadcrumbs';

const UserBreadcrumb = ({ match }) => <span>{match.params.userId}</span>; // use match param userId to fetch/display user name

const routes = [
  { path: 'users', breadcrumb: 'Users' },
  { path: 'users/:userId', breadcrumb: UserBreadcrumb},
  { path: 'something-else', breadcrumb: ':)' },
];

const Breadcrumbs = ({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map(({ breadcrumb, path, match }) => (
      <span key={path}>
        <NavLink to={match.url}>
          {breadcrumb}
        </NavLink>
        <span>/</span>
      </span>
    ))}
  </div>
);

export default withBreadcrumbs(routes)(Breadcrumbs);