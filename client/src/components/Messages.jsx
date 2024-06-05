import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { serverURL } from "../../server.config";
import { addSelectedRecipient } from "../redux/usersSlice";

const socket = io(serverURL);

export default function Messages() {
    const dispatch = useDispatch();

    const signedInUser = useSelector((state) => state.users.signedInUser);
    const selectedRecipient = useSelector((state) => state.users.selectedRecipient);
    const fetchedMessages = useSelector((state) => state.messages.allMessages);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(!messages.length) setMessages(fetchedMessages);

        socket.on('chat message', (message) => {
            setMessages((prevState) => [
                ...prevState,
                message
            ]);
        });

        return(() => socket.off('chat message'));
    }, [fetchedMessages, messages.length]);

    return <div>
        <h3>{!selectedRecipient ? 'Select a contact to chat with' : `Chat with ${selectedRecipient}`}</h3>
        {selectedRecipient && <button onClick={() => dispatch(addSelectedRecipient(null))}>Close chat</button>}
        <div style={{ border: '1px solid black' }}>
            <ul>
                {messages.map((message, index) => (
                    ((message.from === signedInUser.username && message.to === selectedRecipient) || 
                    (message.from === selectedRecipient && message.to === signedInUser.username) ) && (
                        <li key={index}>{`From ${message.from}: ${message.text}`}</li>
                    )
                ))} 
            </ul>
        </div>
    </div>
}
