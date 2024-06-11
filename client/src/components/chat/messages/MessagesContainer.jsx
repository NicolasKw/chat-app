import PropTypes from 'prop-types';

export default function MessagesContainer({ children }) {
    return <div className='p-4 border-b bg-white border-black flex flex-grow w-full overflow-y-scroll'>
        {children}
    </div>
}

MessagesContainer.propTypes = {
    children: PropTypes.node.isRequired
}
