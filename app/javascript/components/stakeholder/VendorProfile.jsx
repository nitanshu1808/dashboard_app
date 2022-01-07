import TeamMemberTable from './TeamMemberTable';
import SingleItemCard from '../shared/SingleItemCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile } from '../utils/profile.api'

const VendorProfile = () => {
  const params = useParams();
  const [profile, setProfile] = useState({ name: '', funds: '', team_members: [] })

  useEffect (() => {
    getProfile(params.vendorId).then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <div>
      <h1>{ profile.name }</h1> 
      <div className='profile-container'>
        <div className='flex-with-gap'>
          <SingleItemCard title={profile.team_members[0]?.full_name} subtitle={'Team Lead'} link='#' />
          <SingleItemCard title={String(profile.team_members.length)} subtitle={'Team Members'} />
          <SingleItemCard title={String(profile.funds)} subtitle={'Remaining Funds'} />
        </div>
        <TeamMemberTable contacts={profile.team_members} canNavigate={false} />
      </div>
    </div>
  );
};

export default VendorProfile;
