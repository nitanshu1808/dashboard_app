import PropTypes from 'prop-types';
import React from 'react';
import TeamMemberTable from './TeamMemberTable';
import SingleItemCard from '../shared/SingleItemCard';

const VendorProfile = ({profile}) => {
  return (
    <div>
      <h1>{ profile.name }</h1> 
      <div class='flex-with-gap'>
        <SingleItemCard title={profile.team_members[0].full_name} subtitle={'Team Lead'} link='#' />
        <SingleItemCard title={profile.team_members.length} subtitle={'Team Members'} />
      </div>
      <TeamMemberTable contacts={profile.team_members} />
    </div>
  );
};

VendorProfile.propTypes = {
  name: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    member_type: PropTypes.string
  })),
};

export default VendorProfile;
