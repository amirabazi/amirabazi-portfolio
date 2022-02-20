import React from 'react'
import { useState } from 'react'

const Input = (props) => {

    return (
        <>
            {props?.icon &&
                <div className="input-icon">{props?.icon}</div>
            }
            <input type={props?.type}
                className={props?.icon ? 'input-class ' + props?.className : props?.className}
                style={props?.style}
                value={props?.value}
                placeholder={props?.placeHolder}
                disabled={props?.disabled ?? false}
                onChange={(e) => {
                    props?.changeHandler(e);
                }}
            />
        </>
    )
}

export default Input
