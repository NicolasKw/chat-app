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

  return <div className='min-h-screen py-10 bg-gray-100'>
    {!Object.values(signedInUser).length
      ?
        <LandingContainer>
          <h1 className="z-10 w-screen px-7 md:px-8 mb-4 text-left text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Chat App for <span className="text-blue-600 dark:text-blue-500">easy</span> and <span className="text-blue-600 dark:text-blue-500">direct</span> messaging.</h1>
          <p className="z-10 w-screen px-7 md:px-8 mb-8 text-left text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400">Experience the ease of chatting with a streamlined app designed for daily connections.</p>
          <div className='z-0 bg-gray-300 absolute inset-0 h-80 w-screen'></div>
          <UserAccess fetchedUsers={fetchedUsers} />
        </LandingContainer>
      :
        <UserSession signedInUser={signedInUser} fetchedUsers={fetchedUsers}/>
    }
  </div>
};

export default App;
