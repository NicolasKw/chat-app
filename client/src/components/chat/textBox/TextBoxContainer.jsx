import PropTypes from 'prop-types';

export default function TextBoxContainer({ children }) {
    return <div className='p-2 flex flex-grow-0 flex-shrink-0 w-full h-fit'>
        {children}
    </div>
}

TextBoxContainer.propTypes = {
    children: PropTypes.node.isRequired
}
