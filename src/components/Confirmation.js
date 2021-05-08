import React from 'react'

const Confirmation = (props) => {
    
    return (
        <>
        <div className="container">
            <h1>welcome, first name!</h1>
            <div className="sub-text">
                You have been registered for this awesome service. Please check your email listed below for instructions.
            </div>

            <div className="email-text">
                email
            </div>

            <button>Sign In</button>
        </div>
        </>
    )

}

export default Confirmation;