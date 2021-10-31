import PropTypes from 'prop-types';

function ProfileDescription({ name, tag, location, avatar }) {
  return (
    <div>
      <img src={avatar} alt="Аватар пользователя" />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
}

ProfileDescription.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default ProfileDescription;
