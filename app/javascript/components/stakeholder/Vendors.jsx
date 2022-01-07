import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TeamMemberTable from './TeamMemberTable';
import Panel from '../Panel';

const Vendors = ({ vendors }) => {
  return (
    <div>
      <h1>Vendors</h1>
      <div className='profile-container'>
        <TeamMemberTable contacts={vendors} canNavigate={true}/>
      </div>
    </div>
  );
}

export default Vendors;
