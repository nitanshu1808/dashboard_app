import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import Dashboard from './Dashboard';

const StakeholderPage = (props) => {
  return (
    <Dashboard
      signOutPath={props.signOutPath}
      sidebar={[
        ['Dashboard', <HomeOutlinedIcon />],
        ['Products', <CreateOutlinedIcon />]
      ]}>

    </Dashboard>
  );
}

StakeholderPage.propTypes = {
  signOutPath: PropTypes.string.isRequired
};

export default StakeholderPage;
