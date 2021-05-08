import React, { useState, useRef } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button"
import { isEmail } from "validator";
import FormGroup from '../common/FormGroup';

// function to validate required field

// function that validates first name

// function that checks is email

// function that validates password

const Home = (props) => {
    
    return (
        <div className="container">
            <h1>let's sign up!</h1>
            <div className="sub-text">
                Use the form below to sign up for this super awesome service. You're only a few steps away!
            </div>
            <Form>
                {/* first name */}
                <FormGroup text="username">
                    <Input
                        type="text"
                        className="form-control"
                        name="firstname"
                    />
                </FormGroup>

                {/* email */}
                <FormGroup text="email">
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

                <button>Sign Up</button>
            </Form>
        </div>
    )

}

export default Home;