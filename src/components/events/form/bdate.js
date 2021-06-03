import React from 'react';
import propTypes from 'prop-types'


const Birthday = props => {
    return (
        <div className="birthdaycontainer my-4">
            <span>Select your birthdate:</span>
            <input 
            type="date" 
            name="bday" 
            className="form-control" 
            value={props.bday}
            onChange={props.onChange}/>
        </div>
    )
}

Birthday.propTypes = {
    onChange: propTypes.func.isRequired,
}

Birthday.defaultProps = {
    
}

export default Birthday;