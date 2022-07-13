import React from 'react'
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';

const Login = () => {

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Name."),
        email: yup.string().email("Please Enter Valid Email.").required("Plaese Enter Email."),
        password: yup.string().required("Please Enter Your password."),
    })

    const handleLogin = () => {
        localStorage.setItem('userLogin' , true)
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleLogin()
        },
        enableReinitialize: true,
    });

    const { errors, touched, handleSubmit, handleBlur, handleChange, values } = formik

    return (
        <>
            <div>
                {/* inner page section */}
                <section className="inner_page_head">
                    <div className="container_fuild">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="full">
                                    <h3>Log In</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end inner page section */}
                {/* why section */}
                <section className="why_section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="full">
                                    <Formik values={formik}>
                                        <Form action="index.html" onSubmit={handleSubmit}>
                                            <fieldset>
                                                {errors.name && touched.name ? (
                                                    <div className="validate">{errors.name}</div>
                                                ) : null}
                                                <input type="text" placeholder="Enter your full name" name="name" onChange={handleChange} value={values.name || ''} onBlur={handleBlur} />

                                                {errors.email && touched.email ? (
                                                    <div className="validate">{errors.email}</div>
                                                ) : null}
                                                <input type="email" placeholder="Enter your email address" name="email" onChange={handleChange} value={values.email || ''} onBlur={handleBlur} />

                                                {errors.password && touched.password ? (
                                                    <div className="validate">{errors.password}</div>
                                                ) : null}
                                                <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={values.password || ''} onBlur={handleBlur} />

                                                <input type="submit" defaultValue="Submit" />
                                            </fieldset>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end why section */}
                {/* arrival section */}
                <section className="arrival_section">
                    <div className="container">
                        <div className="box">
                            <div className="arrival_bg_box">
                                <img src="assets/images/arrival-bg.png" alt="" />
                            </div>
                            <div className="row">
                                <div className="col-md-6 ml-auto">
                                    <div className="heading_container remove_line_bt">
                                        <h2>
                                            #NewArrivals
                                        </h2>
                                    </div>
                                    <p style={{ marginTop: 20, marginBottom: 30 }}>
                                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                                    </p>
                                    <a href>
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end arrival section */}
            </div>
        </>
    )
}

export default Login
