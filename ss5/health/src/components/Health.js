import React from 'react';
import * as yup from 'yup';
import { Formik, Form, ErrorMessage, Field } from 'formik';

function Health() {
    return (
        <>
            <Formik
                initialValues={{
                    fullName: "", identityNumber: "", yearOfBirth: "", nationality: "",
                    province: "", district: "", wards: "", address: "", phone: "", email: ""
                }}
                validationSchema={yup.object({
                    fullName: yup.string().required("Not Blank"),
                    identityNumber: yup.string().required(),
                    yearOfBirth: yup.number().required().min(1900),
                    nationality: yup.string().required(),
                    province: yup.string().required(),
                    district: yup.string().required(),
                    wards: yup.string().required(),
                    address: yup.string().required(),
                    phone: yup.string().required(),
                    email: yup.string().required().matches("^[A-Za-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$")
                })}
                onSubmit={() => {
                    alert("Thank for take your little time to do this form. ALL ABOUT FOR YOUR HEALTH");
                }}
            >
                <Form>
                <div>
                    <label htmlFor='fullName'>FullName</label>
                    <Field className='form-control' type='text' id='fullName' name='fullName' />
                    <ErrorMessage name='fullName' component={"div"} />
                </div>
                <div>
                    <label htmlFor='identityNumber'>IdentityNumber</label>
                    <Field className='form-control' type='text' id='identityNumber' name='identityNumber' />
                    <ErrorMessage name='identityNumber' component={"div"} />
                </div>
                <div>
                    <label htmlFor='yearOfBirth'>Year Of Birth</label>
                    <Field className='form-control' type='number' id='yearOfBirth' name='yearOfBirth' />
                    <ErrorMessage name='yearOfBirth' component={"div"} />
                </div>
                <div>
                    <label>Gender</label>
                    <Field type='radio' id='male' name='gender' value='Male' />
                    <Field type='radio' id='female' name='gender' value='Female' />
                </div>
                <div>
                    <label htmlFor='nationality'>Nationality</label>
                    <Field className='form-control' type='text' id='nationality' name='nationality' />
                    <ErrorMessage name='nationality' component={"div"} />
                </div>
                <div>
                    <label htmlFor='company'>Company</label>
                    <Field className='form-control' type='text' id='company' name='company' />
                </div>
                <div>
                    <label htmlFor='parts'>Parts</label>
                    <Field className='form-control' type='text' id='parts' name='parts' />
                </div>
                <div>
                    <label htmlFor='check'>Can do health insurance</label>
                    <Field type='checkbox' id='check' name='check' />
                </div>


                <h3>Contact-address at Vietnam</h3>


                <div>
                    <label htmlFor='province'>Province</label>
                    <Field className='form-control' type='text' id='province' name='province' />
                    <ErrorMessage name='province' component={"div"} />
                </div>
                <div>
                    <label htmlFor='district'>District</label>
                    <Field className='form-control' type='text' id='district' name='district' />
                    <ErrorMessage name='district' component={"div"} />
                </div>
                <div>
                    <label htmlFor='wards'>Wards</label>
                    <Field className='form-control' type='text' id='wards' name='wards' />
                    <ErrorMessage name='ward' component={"div"} />
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <Field className='form-control' type='text' id='address' name='address' />
                    <ErrorMessage name='address' component={"div"} />
                </div>
                <div>
                    <label htmlFor='phone'>Phone Number</label>
                    <Field className='form-control' type='text' id='phone' name='phone' />
                    <ErrorMessage name='phone' component={"div"} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <Field className='form-control' type='text' id='email' name='email' />
                    <ErrorMessage name='email' component={"div"} />
                </div>

                <div>
                    <p>In the past 14 days, have you visited any country or territory
                        (Can go through many countries)</p>
                    <Field type='text' id='q1' name='q1' />
                </div>



                <div>
                    <p>During the past 14 days, have you
                        experienced any of the following
                        symptoms?</p>
                    <div>
                        <Field type='checkbox' name='q2' value='Fever' />
                        <span>Fever</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Cough' />
                        <span>Cough</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Difficulty breathing' />
                        <span>Difficulty breathing</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Pneumonia' />
                        <span>Pneumonia</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Sore throat' />
                        <span>Sore throat</span>

                    </div>
                    <div>
                        <Field type='checkbox' name='q2' value='Tired' />
                        <span>Tired</span>

                    </div>
                </div>

                <div>
                    <p htmlFor='q3'>During the past 14 days, have you been
                        in contact with?
                    </p>
                    <div>
                        <Field type='checkbox' name='q3' value='Patients who are sick or suspected of having
                        COVID-19' />
                        <span>Patients who are sick or suspected of having
                            COVID-19</span>
                    </div>
                    <div>
                        <Field type='checkbox' name='q3' value='People from countries with COVID-19 disease' />

                        <span>People from countries with COVID-19 disease</span>
                    </div>
                    <div>
                        <Field type='checkbox' name='q3' value=' People with symptoms (Fever, cough, shortness of
                        breath, pneumonia)' />
                        <span>People with symptoms (Fever, cough, shortness of
                            breath, pneumonia)</span>
                    </div>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </Form>
            </Formik>
        </>

    );
}

export default Health;