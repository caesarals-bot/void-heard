import {  Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../../ui/form/components';
import { Button } from '../../ui/button/Button';

export const RegisterPage = () => {    

    return (
        <div className='container'>
            <h1>Registrese aqui</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                                    .required('Name is required')
                                    .min(2, "Debe de tener minimo 2 caracteres" )
                                    .max(15,  'It must be fifteen characters'),
                    email: Yup.string()
                            .email('It must be a valid email')
                            .required('Email is required'),
                    password1: Yup.string()
                                .required('Last name is required')
                                .min(6, "Debe de tener minimo 6 caracteres" ),
                    password2: Yup.string()
                                .required('password confirmation is required')
                                .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir')
                })
            }
            >
                {({}) => {
                    return (
                    <Form>
                        <MyTextInput
                                    label="Name"
                                    name="name" />
                        <MyTextInput
                                    label="Email Address"
                                    name="email"
                                    placeholder="correo@correo.com"
                                    type="email" />
                        <MyTextInput
                                    label="Password"
                                    name="password1"
                                    type="password" />
                        <MyTextInput
                                    label="Repeat Password"
                                    name="password2"
                                    type="password" />

                        <Button name={"Registrate"} /> 

                    </Form>)
                }}
            </Formik>
        </div>
    )
}
