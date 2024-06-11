import PropTypes from 'prop-types';

export default function ChatHeaderContainer({ children }) {
    return <div className='p-4 content-center border-b border-black flex flex-grow-0 flex-shrink-0 w-full h-fit'>
        {children}
    </div>
}

ChatHeaderContainer.propTypes = {
    children: PropTypes.node.isRequired
}
