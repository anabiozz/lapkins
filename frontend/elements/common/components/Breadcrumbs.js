import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Link } from 'react-router-dom';

const categories = {
  'stationery': 'Канцтовары',
  'wallart': 'Декор',
};

const dynamicCategoriesBreadcrumb = ({ match }) => (
  <span>{categories[match.params.category]}</span>
);

const categoryTypeByCategoryType = {
  'posters-without-frame': 'Постеры без рамки',
  'framed-posters-plastic': 'Постеры с пластиковой рамкой',
  'framed-posters-wood': 'Постеры с деревянной рамкой',
  'canvas': 'Картины на холсте',
  'postcards': 'Открытки',
};

const dynamicCategoryTypeBreadcrumb = ({ match }) => (
  <span>{categoryTypeByCategoryType[match.params.categoryType]}</span>
);

const routes = [
  { path: '/', breadcrumb: 'Домой' },
  { path: '/cart', breadcrumb: 'Корзина' },
  { path: '/checkout', breadcrumb: 'Оформление заказа' },
  { path: '/catalog/:category', breadcrumb: dynamicCategoriesBreadcrumb },
  { path: '/catalog/:category/:categoryType', breadcrumb: dynamicCategoryTypeBreadcrumb },
];

const options = {
  excludePaths: [
    '/catalog',
    '/catalog/wallart/posters-without-frame/*',
    '/catalog/wallart/posters-without-frame/*',
    '/catalog/wallart/framed-posters-wood/*',
    '/catalog/wallart/framed-posters-plastic/*',
    '/catalog/stationery/postcards/*',
  ],
  disableDefaults: false,
};

const Breadcrumbs = ({ breadcrumbs }) => (
  <div className="breadcrumbs">
    {
      breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className="bc" key={match.url}>
          {
            <Link to={match.url} >{breadcrumb}</Link>
          }
          {
            index < breadcrumbs.length - 1 && <span>></span>
          }
        </div>
      ))
    }
  </div>
);

export default withBreadcrumbs(routes, options)(Breadcrumbs);