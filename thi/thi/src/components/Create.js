import React from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { createSong } from "../services/SongService";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
function Create() {

    const navigation = useNavigate();
    return (
        <Formik
            initialValues={{ name: "", singer: "", time: "", favioste: 0, songState: "Lưu trữ" }}
            validationSchema={yup.object({
                name: yup.string().required("Not Blank").min(3).max(30),
                singer: yup.string().required("Not Blank").min(3).max(30),
                time: yup.string().required("Not Blank"),
            })}
            onSubmit={async (song) => {
                const newSong = {
                    ...song
                }
                console.log(newSong);
                createSong(newSong).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Create Success',
                        timer: 1000
                    }).then(() => {
                        navigation("/");
                    })
                })
            }}
        >
            <Form>
                <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div class="wrapper wrapper--w680">
                        <div class="card card-4">
                            <div class="card-body">
                                <h2 class="title">Create</h2>
                                <div class="row row-space">
                                    <div class="col-2">
                                        <div class="input-group" style={{ width: '550px' }}>
                                            <div class="input-group">
                                                <label class="label">Tên Bài Hát</label>
                                                <Field class="input--style-4" type="text" name="name" id="name" />
                                                <ErrorMessage name="name" component={'div'} style={{ color: 'red' }}></ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">

                                    <div class="col-2" style={{ marginRight: '180px' }}>
                                        <div class="input-group" style={{ width: '260px', marginTop: '-25px' }}>
                                            <lable class="label">Tên Ca Sĩ</lable>
                                            <div class="p-t-10">
                                                <label htmlFor="singer" class="radio-container m-r-45">
                                                 </label>
                                                <Field class="input--style-4" type="text" name="singer" id="singer"  style={{ marginTop: '-20px'}}/>
                                                <ErrorMessage name="singer" component={'div'} style={{ color: 'red' }}></ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2" >
                                    <div class="input-group" style={{ width: '245px', marginLeft:'-15px' }}>
                                        <label class="label">Thời gian </label>
                                        <div class="input-group-icon">
                                            <Field class="input--style-4 js-datepicker" type="time" id="time" name="time"
                                                style={{ width: '245px', height: '56px' }} />
                                        </div>
                                        <ErrorMessage name="time" component={'div'} style={{ color: 'red' }}></ErrorMessage>
                                    </div>
                                </div>
                                <div class="p-t-15">
                                    <button class="btn btn-primary" type="submit" style={{ borderRadius: '30px ' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
export default Create;