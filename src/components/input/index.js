import React from 'react'
import { useState } from 'react'

const Input = (props) => {


    return (
        <input type={props?.type}
            placeholder={props?.placeHolder}
            onChange={(e) => {
                props?.valueSetter(e.target.value);
            }}
        />
    )
}

export default Input
