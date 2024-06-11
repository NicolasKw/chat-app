import PropTypes from 'prop-types';

export default function ChatHeaderContainer({ children }) {
    return <div className='p-4 content-center flex flex-grow-0 flex-shrink-0 w-full h-fit border-b border-gray-300'>
        {children}
    </div>
}

ChatHeaderContainer.propTypes = {
    children: PropTypes.node.isRequired
}
