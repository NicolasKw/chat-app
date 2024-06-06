import PropTypes from 'prop-types';

export default function LeftBarContainer({ children }) {
    return <div className='w-10/12 md:w-4/12 border-r border-black'>
        {children}
    </div>
}

LeftBarContainer.propTypes = {
    children: PropTypes.node.isRequired
}
