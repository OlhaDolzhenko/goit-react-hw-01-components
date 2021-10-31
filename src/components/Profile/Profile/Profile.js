import PropTypes from 'prop-types';
import ProfileDescription from '../ProfileDescription/ProfileDescription';
import ProfileStats from '../ProfileStats/ProfileStats';

function Profile({ user }) {
  return (
    <div>
      <ProfileDescription
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileStats stats={user.stats} />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
