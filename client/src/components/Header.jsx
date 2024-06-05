import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { signOutUser } from '../redux/usersSlice';
import io from 'socket.io-client';
import { serverURL } from '../../server.config';
import PropTypes from 'prop-types';

const socket = io(serverURL);

export default function Header({ signedInUser }) {
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

    return <div>
        <h3>{`Welcome ${signedInUser.name}!`}</h3>
        <button onClick={() => dispatch(signOutUser(signedInUser.username))}>Sign Out</button>
        <h3>{`Status: ${isConnected ? 'Connected' : 'Disconnected'}`}</h3>
        <button onClick={() => {socket.connect()}}>Connect</button>
        <button onClick={() => {socket.disconnect()}}>Disconnect</button>
    </div>
}

Header.propTypes = {
    signedInUser: PropTypes.object
}
