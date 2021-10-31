import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';

function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <StatisticsList data={stats} />
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;
