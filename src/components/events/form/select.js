import React from 'react';
import propTypes from 'prop-types'


const Select = props => {
    return (
        <div className='selectcontainer my-4'>
      <span>Select your country:</span>
      <select name='country' className="form-control" onChange={props.onChange}>
        <option>select Country</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Srilanka">Srilanka</option>
        <option value="Afganisthan">Afganisthan</option>
      </select>
      </div>
    )
}

Select.propTypes = {
    onChange: propTypes.func.isRequired,
}

Select.defaultProps = {
    
}

export default Select;