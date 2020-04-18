
export default {
  baseDomain: 'http://localhost:8080',
  apiDomain: 'http://localhost:8081',
  authDomain: 'http://localhost:8085',
  imagePath: {
    'full': process.env.HOME + '/images/full/',
    'preview': process.env.HOME + '/images/preview/',
    'dev_path_preview': '/static/images/preview/',
    'dev_path_full': '/static/images/full/',
  },
  cookies: {
    tmpUserID: 'tmp-user-id',
    token: 'token',
  }
};