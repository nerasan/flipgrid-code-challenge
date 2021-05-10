import React from 'react'

const Confirmation = (props) => {

    const data = props.location.state
    const firstname = data[0]
    const email = data[1]
    
    return (
        <div className="wrapper">
            <div className="container">

                <div className="sub-section">
                    <h1 className="light-heading">Welcome,</h1>
                    <h1>{firstname}!</h1>
                </div>

                <div className="sub-section">
                    You have been registered for this awesome service. Please check your email listed below for instructions.
                </div>

                <div className="sub-section">
                    <div className="email-text">
                        {email}
                    </div>
                </div>

                <div className="button-div">
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;