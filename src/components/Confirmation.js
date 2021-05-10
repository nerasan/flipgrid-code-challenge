import React from 'react'

const Confirmation = (props) => {
    
    return (
        <div className="wrapper">
            <div className="container">
                <div className="sub-section">
                    <h1>welcome, first name!</h1>
                </div>

                <div className="sub-section">
                    You have been registered for this awesome service. Please check your email listed below for instructions.
                </div>

                <div className="sub-section">
                    <div className="email-text">
                        email
                    </div>
                </div>

                <button>Sign In</button>
            </div>
        </div>
    )

}

export default Confirmation;