import PropTypes from 'prop-types';

export default function ChatBubble({ children, alignRight }) {
    return <div className={`flex flex-col gap-1 pb-2 w-fit max-w-[8em] md:max-w-sm ${alignRight ? 'self-end items-end' : 'self-start items-start'}`}>
        {children}
    </div>
}

ChatBubble.propTypes = {
    children: PropTypes.node.isRequired,
    alignRight: PropTypes.bool.isRequired
}
