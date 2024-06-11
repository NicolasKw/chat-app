import PropTypes from 'prop-types';

export default function RightBarContainer({ children }) {
    return <div className='w-full h-screen flex flex-col'>
        {children}
    </div>
}

RightBarContainer.propTypes = {
    children: PropTypes.node.isRequired
}
