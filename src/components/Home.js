import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button"
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


const Home = (props) => {

    return (
        <div className="container">
            <h1>Let's</h1>
            <h1 className="bold-heading">Sign Up</h1>
            <div className="sub-text">
                Use the form below to sign up for this super awesome service. You're only a few steps away!
            </div>
            <Form>
                {/* first name */}
                <FormGroup text="first name">
                    <Input
                        type="text"
                        className="form-control"
                        name="firstname"
                        validations={[required]}
                    />
                </FormGroup>

                {/* email */}
                <FormGroup text="email address">
                    <Input
                        type="text"
                        className="form-control"
                        name="email"
                    />
                </FormGroup>

                {/* password */}
                <FormGroup text="password">
                    <Input
                        type="password"
                        className="form-control"
                        name="password"
                    />
                </FormGroup>

                <Link to="/confirmation">
                    <button>Sign Up</button>
                </Link>

            </Form>
        </div>
    )

}

export default Home;