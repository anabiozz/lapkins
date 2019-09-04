import PropTypes from 'prop-types'

export const matchProp = {
  isExact: PropTypes.bool,
  params: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
}

export const productProp = {
  id: PropTypes.number,
  name: PropTypes.string,
  currency: PropTypes.string,
  decription: PropTypes.string,
  ext: PropTypes.string,
  is_available: PropTypes.bool,
  price: PropTypes.number,
  products_type: PropTypes.string,
  categories: PropTypes.object,
}