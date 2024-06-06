import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../../redux/messagesSlice';
import io from 'socket.io-client';
import axios from 'axios';
import { serverURL } from '../../../../server.config';

const socket = io(serverURL);

export default function TextBox() {
    const dispatch = useDispatch();

    const from = useSelector((state) => state.users.signedInUser.username);
    const to = useSelector((state) => state.users.selectedRecipient);

    const [message, setMessage] = useState({
        from: '',
        to: '',
        text: ''
    });

    const handleChange = (event) => {
        setMessage({
            from,
            to,
            text: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(message.text) {
            socket.emit('chat message', message);
            try {
                await axios.post(`${serverURL}/messages/createMessage`, message);
                dispatch(addMessage(message));
                setMessage((prevState) => ({
                    ...prevState,
                    text: ''
                }));
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    return <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={message.text} onChange={handleChange}/>
            <button type='submit'>Send</button>
        </form>
    </div>
}
