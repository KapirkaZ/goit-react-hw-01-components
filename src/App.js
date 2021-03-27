import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';

const App = () => {
  return (
    <container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
    </container>
  );
};
export default App;
