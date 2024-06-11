import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addSelectedRecipient } from '../../../redux/usersSlice';

export default function ChatHeader() {
    const dispatch = useDispatch();

    const selectedRecipient = useSelector((state) => state.users.selectedRecipient);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div className='w-full'>
        {!selectedRecipient.username 
            ? 
                <h3>Select a contact to chat with</h3>
            :
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row gap-2 w-full'>
                        <img className='w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNpwG_EjEnNeGWwq-E-zItRXL76SwtbtIOA&s" alt="genericUser" />
                        <div>
                            <h3 className='w-fit'>{`${selectedRecipient.name} ${selectedRecipient.lastName}`}</h3>
                            <h4 className='w-fit text-xs text-gray-500 '>{selectedRecipient.signedIn ? 'Online' : 'Offline'}</h4>
                        </div>
                    </div>
                    <button className='btn-secondary w-fit text-nowrap sm:rounded-full md:rounded-lg px-2 py-1' onClick={() => dispatch(addSelectedRecipient({}))}>{isSmallScreen ? 'X' : 'Close chat'}</button>
                </div> 
        }
    </div>
}
