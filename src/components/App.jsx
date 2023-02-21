import { Profile } from './Profile';
import { FriendList } from './FriendList/FliendList';
import { Statistics } from './Statistics/Statistics';
import user from '../user';
import data from '../data';
import friends from '../friends';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
};
