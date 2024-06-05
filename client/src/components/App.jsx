import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice';
import { fetchMessages } from '../redux/messagesSlice';
import Landing from './Landing';
import UserSession from './UserSession';

const App = () => {
  const dispatch = useDispatch();

  const fetchedUsers = useSelector((state) => state.users.users);
  const signedInUser = useSelector((state) => state.users.signedInUser);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchMessages());
  }, [dispatch]);

  return <div>
    <h1>Welcome to the Chat App</h1>
    {!Object.values(signedInUser).length 
      ?
        <Landing fetchedUsers={fetchedUsers} />
      :
        <UserSession signedInUser={signedInUser} fetchedUsers={fetchedUsers}/>
    }
  </div>
};

export default App;
