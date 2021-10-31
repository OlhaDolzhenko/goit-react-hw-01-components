import PropTypes from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TransactionHistoryItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
                id={item.id}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};
export default TransactionHistory;
