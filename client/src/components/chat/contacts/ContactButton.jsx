import PropTypes from 'prop-types';

export default function ContactButton({ user, handleClick, isActive }) {

    return <button
                className={`flex items-center w-full p-2 text-gray-900 hover:bg-gray-300 ${isActive && 'bg-gray-300' }`}
                onClick={() => handleClick(user)}
                >  
                    {`${user.name} ${user.lastName}`}
    </button>
}

ContactButton.propTypes = {
    user: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}
