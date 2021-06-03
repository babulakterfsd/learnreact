import React from 'react';
import propTypes from 'prop-types'


 const Textarea = props => {
    return (
        <div className="textareacontainer my-4">
            <span>Bio:</span>
             <textarea name='bio' class="form-control" placeholder={props.placeholder} onChange={props.onChange}></textarea>
        </div>
    )
}

Textarea.propTypes = {
    placeholder: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired
}

Textarea.defaultProps = {

}

export default Textarea;