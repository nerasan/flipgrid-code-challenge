import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button"
import { isEmail } from "validator";
import FormGroup from '../common/FormGroup';

// function to validate required field -- need to have the button prevent submission if this is blank
const required = (value) => {
    if (!value) {
        return (
            <div className="alert">
                This field is required!
            </div>
        )
    }
}

// function that validates first name
const vfirstname = (value) => {
    if(value.length < 2 || value.length >= 20) {
        return (
            <div className="alert">
                This field must be between 2 and 20 characters.
            </div>
        )
    }
}

// function that checks is email
const vemail = (value) => {
    if(!isEmail(value)) {
        return (
            <div className="alert">
                This is not a valid email address.
            </div>
        )
    }
}

// function that validates password
const vpassword = (value) => {
    if(value.length < 6 || value.length >= 40) {
        return (
            <div className="alert">
                The password must be between 6 and 40 characters.
            </div>
        )
    }
}

// const validate = {
//     firstname: vfirstname,
//     email: vemail,
//     password: vpassword,
// }

const Home = (props) => {

    // const form = useRef();
    // const checkBtn = useRef();

    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [successful, setSuccessful] = useState(false);
    // const [message, setMessage] = useState("");
    // const [errors, setErrors] = useState({})

    // stores firstname in firstname state
    const onChangeFirstname = (e) => {
        const firstname = e.target.value
        setFirstname(firstname)
    }

    // stores email in email state
    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
    }

    // stores password in password state
    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    }


    // handle signup and prevent default
    const handleSignup = (e) => {
        e.preventDefault()
        console.log(firstname)
        console.log(email)
        props.history.push({
            pathname: "/confirmation",
            state: firstname
        })
    }

    return (
        <div className="wrapper">
            <div className="container">
                
                <div className="sub-section">
                    <h1 className="light-heading">Let's</h1>
                    <h1>Sign Up</h1>
                </div>

                <div className="sub-section">
                    Use the form below to sign up for this super awesome service. You're only a few steps away!
                </div>

                    <Form onSubmit={handleSignup} autoComplete="off">
                        
                        <FormGroup text="first name">
                            <Input
                                type="text" required
                                className="form-control"
                                name="firstname"
                                value={firstname}
                                onChange={onChangeFirstname}
                                validations={[vfirstname]}
                            />
                        </FormGroup>

                        <FormGroup text="email address">
                            <Input
                                type="text" required
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required, vemail]}
                            />
                        </FormGroup>

                        <FormGroup text="password">
                            <Input
                                type="password" required
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required, vpassword]}
                            />
                        </FormGroup>
                        <div className="button-div">
                            <button>Sign Up</button>
                        </div>
 
                    </Form>
            </div>
        </div>
    )

}

export default Home;