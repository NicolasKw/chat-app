import { useSelector, useDispatch } from 'react-redux';
import { addSelectedRecipient } from '../redux/usersSlice';
import PropTypes from 'prop-types';

export default function Contacts({ fetchedUsers }) {
    const dispatch = useDispatch();

    const signedInUser = useSelector((state) => state.users.signedInUser);

    const handleClick = (event) => {
        dispatch(addSelectedRecipient(event.target.value));
    };

    return <div>
        {signedInUser &&
            <div>
                <h3>Your contacts</h3>
                <div>
                    {fetchedUsers.map((user) => (
                        (user.username !== signedInUser.username && 
                            <button 
                                key={user.username} 
                                value={user.username}
                                onClick={handleClick}
                                >
                                    {user.username}
                            </button>)
                    ))}
                </div>
            </div>
        }
    </div>
}

Contacts.propTypes = {
    fetchedUsers: PropTypes.array
}
