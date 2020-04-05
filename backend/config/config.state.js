export default {
  user: {
    _id: null,
    name: 'Unknown',
    errors: '',
    success: false
  },
  cart: {
    items: [],
    errors: '',
    fetching: false,
  },
  categories: {
    items: [],
    errors: '',
    fetching: false,
  },
  catalog: {
    items: [],
    errors: '',
    fetching: false,
  },
  description: {
    item: {},
    errors: '',
    fetching: false,
  },
  auth: {
    token: '',
    subject: '',
    error: '',
    fetching: false,
    redirect: false,
  }
};