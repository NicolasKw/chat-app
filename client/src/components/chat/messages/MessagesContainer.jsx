import PropTypes from 'prop-types';

export default function MessagesContainer({ children }) {
    return <div className='p-4 border-b border-black'>
        {children}
    </div>
}

MessagesContainer.propTypes = {
    children: PropTypes.node.isRequired
}
