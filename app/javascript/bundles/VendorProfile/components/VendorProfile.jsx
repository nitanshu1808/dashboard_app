import PropTypes from 'prop-types';
import React from 'react';

const VendorProfile = (props) => {
  const elements = ['one', 'two', 'three'];      
  return (
    <div>
      <h1>Welcome, { props.name }</h1> 
      {props.contacts.map((value, index) => {
        return <li key={index}>{value.name}</li>
      })}
    </div>
  );
};

VendorProfile.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    member_type: PropTypes.string
  })),
};

export default VendorProfile;
