import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export default function MessagesContainer({ children }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [children]);

    return (
        <div ref={containerRef} className='p-4 pb-1 bg-white flex flex-col flex-grow w-full overflow-y-auto border-b border-gray-300'>
            {children}
        </div>
    );
}

MessagesContainer.propTypes = {
    children: PropTypes.node.isRequired
}
