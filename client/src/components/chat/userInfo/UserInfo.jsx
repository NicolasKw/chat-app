import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { signOutUser } from '../../../redux/usersSlice';
import io from 'socket.io-client';
import { serverURL } from '../../../../server.config';
import PropTypes from 'prop-types';

const socket = io(serverURL);

export default function UserInfo({ signedInUser }) {
    const dispatch = useDispatch();

    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        socket.on('connect', () => setIsConnected(true));
        socket.on('disconnect', () => setIsConnected(false));

        return (() => {
            socket.off('connect');
            socket.off('disconnect');
        })
    }, []);

    return <div className='flex flex-col items-center'>
        <img className='w-12 h-12 md:w-16 md:h-16 mb-3 rounded-full shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNpwG_EjEnNeGWwq-E-zItRXL76SwtbtIOA&s" alt="genericUser" />
        <h3 className='mb-1 text-xl text-center font-medium text-gray-900 dark:text-white'>{`${signedInUser.name} ${signedInUser.lastName}`}</h3>
        <h4 className='text-sm text-gray-500'>{`${isConnected ? 'Online' : 'Offline'}`}</h4>
        <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-2 mt-4 md:mt-4'>
            <button className={`btn-primary h-fit py-1 px-2 min-w-fit ${isConnected ? 'bg-red-500 hover:bg-red-600 focus:ring-gray-300' : 'bg-green-500 hover:bg-green-600 focus:ring-gray-300'}`} onClick={() => { isConnected ? socket.disconnect() : socket.connect() }}>
                {isConnected ? 'Disconnect' : 'Connect'}
            </button>
            <button className='btn-secondary py-1 px-2 min-w-fit' onClick={() => dispatch(signOutUser(signedInUser.username))}>Sign Out</button>
        </div>
    </div>
}

UserInfo.propTypes = {
    signedInUser: PropTypes.object.isRequired
}
