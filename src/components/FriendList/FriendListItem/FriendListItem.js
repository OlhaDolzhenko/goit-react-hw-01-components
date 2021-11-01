import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const status = isOnline ? styles.statusActive : styles.status;
  return (
    <>
      <span className={status}></span>
      <img src={avatar} alt="" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
