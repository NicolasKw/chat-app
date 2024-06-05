import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/usersSlice';
import { fetchMessages } from '../redux/messagesSlice';
import LandingContainer from './Landing/LandingContainer';
import UserAccess from './Landing/UserAccess';
import UserSession from './UserSession';

const App = () => {
  const dispatch = useDispatch();

  const fetchedUsers = useSelector((state) => state.users.users);
  const signedInUser = useSelector((state) => state.users.signedInUser);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchMessages());
  }, [dispatch]);

  return <div className='min-h-screen py-10 bg-gray-50'>
    {!Object.values(signedInUser).length
      ?
        <LandingContainer>
          <h1 className="z-10 text-center mb-10 text-3xl font-extrabold leading-none tracking-tight text-white md:mb-10 md:text-5xl lg:text-6xl dark:text-white">Welcome to your <span className="text-blue-300 dark:text-blue-500">Chat App</span></h1>
          <div className='z-0 bg-gray-700 absolute inset-0 h-40 w-screen'></div>
          <UserAccess fetchedUsers={fetchedUsers} />
        </LandingContainer>
      :
        <UserSession signedInUser={signedInUser} fetchedUsers={fetchedUsers}/>
    }
  </div>
};

export default App;
