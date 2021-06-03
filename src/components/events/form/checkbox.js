import React from 'react';
import propTypes from 'prop-types'


export const Checkbox = props => {
    return (
        <div className="mycheckbox my-4">

        <label class="form-check-label" htmlFor={props.name}>{props.label}</label> <br/>
           <div className="form-check form-check-inline">
            <input
              name={props.name}
              type='checkbox'
              class="form-check-input"  
              value='javascript' 
              id={props.name}
              onChange={props.onChange}
              />Javascript
            </div>

           <div className="form-check form-check-inline">
            <input
              name={props.name}
              type='checkbox'
              class="form-check-input"  
              value='Python' 
              id={props.name}
              onChange={props.onChange}
              />Python
            </div>

            <div className="form-check form-check-inline">
            <input
              name={props.name}
              type='checkbox'
              class="form-check-input"  
              value='Go' 
              id={props.name}
              onChange={props.onChange}
              />Go
            </div>

            <div className="form-check form-check-inline">
            <input
              name={props.name}
              type='checkbox'
              class="form-check-input"  
              value='Nodejs' 
              id={props.name}
              onChange={props.onChange}
              />Nodejs
            </div>


        </div>
    )
}

Checkbox.propTypes = {
    type: propTypes.string.isRequired,
    name: propTypes.array.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired
}

Checkbox.defaultProps = {
    type: 'checkbox'
}

export default Checkbox;