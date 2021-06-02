import React from 'react';
import propTypes from 'prop-types'


export const Textinput = props => {
    return (
        <div className="form-group">
           <label htmlFor="props.name">{props.label}</label>
           <input 
              label={props.label}
              type={props.type}
              name = {props.name}
              className = 'form-control my-2'
              id={props.name}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
           />
        </div>
    )
}

Textinput.propTypes = {
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired
}

Textinput.defaultProps = {
    type: 'text'
}

export default Textinput;