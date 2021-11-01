import PropTypes from 'prop-types';
import styles from './ProfileDescription.module.css';

function ProfileDescription({ name, tag, location, avatar }) {
  return (
    <div>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
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
