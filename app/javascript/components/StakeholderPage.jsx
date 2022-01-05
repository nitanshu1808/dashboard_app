import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Dashboard from './Dashboard';

const StakeholderPage = (props) => {
  return (
    <Dashboard signOutPath={props.signOutPath}>

    </Dashboard>
  );
}

StakeholderPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default StakeholderPage;
