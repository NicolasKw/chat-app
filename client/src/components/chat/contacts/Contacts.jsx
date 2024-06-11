import { useSelector, useDispatch } from 'react-redux';
import { addSelectedRecipient } from '../../../redux/usersSlice';
import ContactButton from './ContactButton';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function Contacts({ fetchedUsers }) {
    const dispatch = useDispatch();

    const signedInUser = useSelector((state) => state.users.signedInUser);
    const selectedRecipient = useSelector((state) => state.users.selectedRecipient);

    useEffect(() => {
        // Reset selectedRecipient when component unmounts
        return () => {
            dispatch(addSelectedRecipient({}));
        };
    }, [dispatch]);

    const handleClick = (user) => {
        dispatch(addSelectedRecipient(user));
    };

    return <div>
        {signedInUser &&
            <div>
                <h3 className='text-center mb-2 text-gray-100 font-medium bg-gray-600 w-full'>Your contacts</h3>
                <div className='space-y-2 font-medium'>
                    {fetchedUsers.map((user) => (
                        (user.username !== signedInUser.username && 
                            <ContactButton key={user.username} user={user} handleClick={handleClick} isActive={user.username === selectedRecipient.username} />)
                    ))}
                </div>
            </div>
        }
    </div>
}

Contacts.propTypes = {
    fetchedUsers: PropTypes.array
}
