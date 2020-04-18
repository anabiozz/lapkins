import PropTypes from 'prop-types';

export const matchProp = {
  isExact: PropTypes.bool,
  params: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
};

export const productProp = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

// currency: PropTypes.string,
//   description: PropTypes.string,
//   ext: PropTypes.string,
//   is_available: PropTypes.bool,
//   price: PropTypes.number,
//   products_type: PropTypes.string,
//   categories: PropTypes.array,