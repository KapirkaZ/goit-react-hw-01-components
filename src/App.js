import Profile from './components/Profile/Profile';
import user from './json/user.json';

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
    </container>
  );
};
export default App;
