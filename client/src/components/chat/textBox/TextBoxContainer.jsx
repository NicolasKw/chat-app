import PropTypes from 'prop-types';

export default function TextBoxContainer({ children }) {
    return <div className='p-4'>
        {children}
    </div>
}

TextBoxContainer.propTypes = {
    children: PropTypes.node.isRequired
}
