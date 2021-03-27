import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />

    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,

  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};

export default FriendListItem;
