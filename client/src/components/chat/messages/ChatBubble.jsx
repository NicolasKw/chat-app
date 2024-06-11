import PropTypes from 'prop-types';

export default function ChatBubble({ children }) {
    return <div className="flex flex-col gap-1 w-fit max-w-[8rem] md:max-w-sm">
        {children}
    </div>
}

ChatBubble.propTypes = {
    children: PropTypes.node.isRequired
}
