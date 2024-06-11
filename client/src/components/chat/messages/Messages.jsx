import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import { serverURL } from "../../../../server.config";
import ChatBubble from "./ChatBubble";
import { isoStringToTime } from "../../../services/isoStringToTime";

const socket = io(serverURL);

export default function Messages() {

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

    return <div className="flex flex-col items-start gap-2.5 w-full h-fit">
            {messages.map((message, index) => (
                ((message.username === signedInUser.username && message.to === selectedRecipient.username) || 
                (message.username === selectedRecipient.username && message.to === signedInUser.username)) && (
                    <ChatBubble 
                        key={index} 
                        >
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900">{message.username}</span>
                                <span className="text-sm font-normal text-gray-500">{isoStringToTime(message.createdAt)}</span>
                            </div>
                            <div className="flex flex-col max-w-fit leading-1.5 p-2 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                                <p className="text-sm max-w-fit font-normal text-gray-90 break-words">{message.text}</p>
                            </div>
                    </ChatBubble>
                )
            ))} 
    </div>
}
