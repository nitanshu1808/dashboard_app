import PropTypes from 'prop-types';
import React from 'react';
import TeamMemberTable from './TeamMemberTable';
import SingleItemCard from './SingleItemCard';

const VendorProfile = (props) => {
  return (
    <div>
      <h1>{ props.name }</h1> 
      <SingleItemCard title={props.contacts[0].name} subtitle={'Team Lead'} link='#' />
      <TeamMemberTable contacts={props.contacts} />
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
