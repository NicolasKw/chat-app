import PropTypes from 'prop-types';

export default function LeftBarContainer({ children }) {
    return <div className='h-full md:w-3/12 border-r border-black'>
        {children}
    </div>
}

LeftBarContainer.propTypes = {
    children: PropTypes.node.isRequired
}
