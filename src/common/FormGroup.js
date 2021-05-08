import React from 'react'

const FormGroup = ({children, text}) => {

    const words = text.split(" ")

    return (
        <div className="form-group">
            <label htmlFor={text}>
                {words.map((word) => {
                    return word[0].toUpperCase() + word.substring(1)
                }).join(" ")}
            </label>
            {children}
        </div>
    )
}

export default FormGroup

// component used for every form group in the homepage form