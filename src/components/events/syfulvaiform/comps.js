import React from 'react';



export class Input extends React.Component{
    render(){
        let { style, className, name, value, type, placeholder, list, onChange, inputText } = this.props;
        return <>
            <input 
                style={ style }
                className={ className }
                name={ name } 
                value={ value }
                list={ list }
                type={ type }
                placeholder={ placeholder }
                onChange={ onChange }
            />{ inputText }
        </>
    }
}

export class Button extends React.Component{
    render(){
        let { style, className, type, children, onClick, disabled } = this.props;
        return <button 
                style={ style } 
                className={ className } 
                type={ type }
                onClick={ onClick }
                disabled={ disabled }
            >
                { children }
            </button>
    }
}

export class Label extends React.Component{
    render(){
        let { children } = this.props;
        return <label>{ children }</label>
    }
}