import PropTypes from 'prop-types';

export default function Tab({ label, onClick, isActive }) {
    return (
        <button
            onClick={onClick}
            className={`inline-block px-2 pb-2 border-b-2 text-lg ${isActive ? 'border-blue-700 text-blue-600' : 'border-transparent hover:text-blue-600 hover:border-blue-700'} rounded-t-lg dark:hover:text-gray-300`}
        >
            {label}
        </button>
    );
}

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool
}
