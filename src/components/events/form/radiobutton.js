import React from 'react';
import propTypes from 'prop-types'


export const Radiobutton = props => {
    return (
        <>

<label class="form-check-label" htmlFor={props.name}>{props.label}</label>
        <div className="form-check">
           <input 
              type={props.type}
              name = {props.name}
              className = 'form-check-input'
              id={props.name}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
           /> Male
           </div>

            <div className="form-check">
            <input 
            type={props.type}
            name = {props.name}
            className = 'form-check-input'
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            /> Female
            </div>


            <div className=" form-check">
            <input 
            type={props.type}
            name = {props.name}
            className = 'form-check-input'
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            /> Other
            </div>



            </>
  )
}

Radiobutton.propTypes = {
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string.isRequired
}

Radiobutton.defaultProps = {
    type: 'radio'
}

export default Radiobutton;