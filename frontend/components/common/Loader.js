import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

const Loader = ({props}) => {
  return (
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={400}
      speed={2}
      {...props} >

      <rect x="0" y="12" rx="5" ry="5" width="220" height="10" />
      <rect x="0" y="29" rx="5" ry="5" width="220" height="10" />
      <rect x="179" y="76" rx="5" ry="5" width="220" height="10" />
      <rect x="179" y="58" rx="5" ry="5" width="220" height="10" />
      <rect x="0" y="104" rx="5" ry="5" width="220" height="10" />
      <rect x="0" y="122" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  );
};

// Loader.propTypes = {
//   props: PropTypes.object.isRequired,
// };


export default Loader;