import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p class={styles.name}>{name}</p>
      <p class={styles.tag}>@{tag}</p>
      <p> {location} </p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className="label">Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span class="label">Views</span>
        <span class={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span class="label">Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
export default Profile;
