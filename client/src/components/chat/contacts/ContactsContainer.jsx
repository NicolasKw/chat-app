import PropTypes from 'prop-types';

export default function ContactsContainer({ children }) {
    return <div className='h-screen bg-gray-50'>
        {children}
    </div>
}

ContactsContainer.propTypes = {
    children: PropTypes.node.isRequired
}
