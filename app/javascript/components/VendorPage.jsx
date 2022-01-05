import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Dashboard from './Dashboard';

const VendorPage = (props) => {
  return (
    <Dashboard signOutPath={props.signOutPath}>

    </Dashboard>
  );
}

VendorPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default VendorPage;
