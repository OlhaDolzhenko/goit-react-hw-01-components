import PropTypes from 'prop-types';

function StatisticsList({ data }) {
  return (
    <ul>
      {data.map(el => {
        return (
          <li key={el.id}>
            <span>{el.label}</span>
            <span>{el.percentage}</span>
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
