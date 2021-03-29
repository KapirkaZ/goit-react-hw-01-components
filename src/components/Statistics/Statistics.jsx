import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const randomColor = () => '#' + Math.random().toString(16).substr(2, 6);

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={styles.item}
          key={id}
          style={{
            backgroundColor: randomColor(),
          }}
        >
          <span className="label">{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};

export default Statistics;
