import React from "react";
import {Field, reduxForm} from "redux-form";

import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';


// const LoginForm = (props) => {
//     return(
//         <div>
//             <h1>login</h1>
//             <form onSubmit={props.handleSubmit}>
//                 <div><Field placeholder={'login'} name={'login'} component={'input'}/></div>
//                 <div><Field placeholder={'password'} name={'password'} component={'input'}/></div>
//                 <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/></div>
//                 <button>login</button>
//
//
//
//             </form>
//         </div>
//     )
// }
//
//
// const LoginReduxForm = reduxForm({
//
//     form: 'login'
// })(LoginForm)

interface Values {
    email: string;
    password: string;
}

function App() {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={values => {
                const errors: Partial<Values> = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form>
                    <Field
                        component={TextField}
                        name="email"
                        type="email"
                        label="Email"
                    />
                    <br />
                    <Field
                        component={TextField}
                        type="password"
                        label="Password"
                        name="password"
                    />
                    {isSubmitting && <LinearProgress />}
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}



const Login = (props) => {

    const onSubmit = (formData) =>{

    }
    return(
        <div>
            <h1>login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login