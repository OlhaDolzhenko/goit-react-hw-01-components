import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css';

function StatisticsList({ data }) {
  return (
    <ul className={styles.statList}>
      {data.map(el => {
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
        return (
          <li
            key={el.id}
            style={{ backgroundColor: randomColor }}
            className={styles.statItem}
          >
            <span className={styles.label}>{el.label}</span>
            <span className={styles.percentage}>{el.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default StatisticsList;
