import React from 'react';
import * as yup from 'yup';
import { Formik, Form, ErrorMessage, Field } from 'formik';



function FormContact(){
    return (
        <>
            <Formik
                initialValues={{ fullName: "", email: "", phone: "", message: "" }}
                validationSchema={yup.object({
                    fullName: yup.string().required("Not Blank"),
                    email: yup.string().required().email(),
                    phone: yup.string().required("Not Blank"),
                    message: yup.string().required()
                    })}

                onSubmit={() => {   
                    alert("Creat Succesfully");
                }}
            >
                <Form>
                    <div>
                        <label htmlFor='fullName'> Full Name</label>
                        <Field type='text' id='fullName' name='fullName'></Field>
                        <ErrorMessage name='fullName' component= {'div'}></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <Field type='text' id='email' name='email'></Field>
                        <ErrorMessage name='email' component= {'div'}></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor='phone'> Phone</label>
                        <Field type='text' id='phone' name='phone'></Field>
                        <ErrorMessage name='phone' component= {'div'}></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor='message'> Message</label>
                        <Field type='text' id='message' name='message'></Field>
                        <ErrorMessage name='message' component= {'div'}></ErrorMessage>
                    </div>
                    <div>
                        <button type='submit'>Create</button>
                    </div>
                </Form>


            </Formik>
        </>
    );
}

export default FormContact;