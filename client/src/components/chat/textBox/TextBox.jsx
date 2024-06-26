import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../../redux/messagesSlice';
import io from 'socket.io-client';
import { serverURL } from '../../../../server.config';

const socket = io(serverURL);

export default function TextBox() {
    const dispatch = useDispatch();

    const username = useSelector((state) => state.users.signedInUser.username);
    const to = useSelector((state) => state.users.selectedRecipient.username);
    const selectedRecipient = useSelector((state) => state.users.selectedRecipient);

    const [message, setMessage] = useState({
        username: '',
        to: '',
        text: '',
        createdAt: ''
    });

    const handleChange = (event) => {
        setMessage({
            username,
            to,
            text: event.target.value,
            createdAt: new Date().toISOString()
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(message.text) {
            socket.emit('chat message', message);
            try {
                dispatch(addMessage(message));
                setMessage((prevState) => ({
                    ...prevState,
                    text: '',
                    createdAt: ''
                }));
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return <div className='w-full h-full'>
        <form action="" onSubmit={handleSubmit} className='flex flex-row justify-between gap-4 items-center'>
            <input 
                className='rounded-md w-full input m-0'
                type="text" 
                value={message.text} 
                onChange={handleChange} 
                disabled={selectedRecipient.username ? false : true}/>
            <button className='btn-primary w-fit' type='submit' disabled={selectedRecipient.username ? false : true}>Send</button>
        </form>
    </div>
}
