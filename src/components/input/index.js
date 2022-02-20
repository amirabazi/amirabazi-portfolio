import React from 'react'

const Input = (props) => {
    return (
        <div>
            {props?.icon &&
                <span className="input-icon">{props?.icon}</span>
            }
            <input required
                type={props?.type}
                className={props?.icon ? 'input-class ' + props?.className : props?.className}
                style={props?.style}
                value={props?.value}
                placeholder={props?.placeHolder}
                disabled={props?.disabled ?? false}
                onChange={(e) => {
                    props?.changeHandler(e);
                }}
            />
        </div >
    )
}

export default Input
