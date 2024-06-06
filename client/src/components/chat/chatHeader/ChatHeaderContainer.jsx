import PropTypes from 'prop-types';

export default function ChatHeaderContainer({ children }) {
    return <div className='p-4 h-16 content-center border-b border-black'>
        {children}
    </div>
}

ChatHeaderContainer.propTypes = {
    children: PropTypes.node.isRequired
}
