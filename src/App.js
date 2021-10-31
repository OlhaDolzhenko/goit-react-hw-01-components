import './App.css';
import Profile from './components/Profile/Profile/Profile';
import Statistics from './components/Statistics/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
