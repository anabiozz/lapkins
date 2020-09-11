import PropTypes from 'prop-types';

export const matchProp = {
  isExact: PropTypes.bool,
  params: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
};

export const productProp = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};