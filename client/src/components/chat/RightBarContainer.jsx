import PropTypes from 'prop-types';

export default function RightBarContainer({ children }) {
    return <div className='w-screen overflow-y-auto'>
        {children}
    </div>
}

RightBarContainer.propTypes = {
    children: PropTypes.node.isRequired
}
