import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    linkName: Yup.string().required("Required"),
    linkUrl: Yup.string().url("geçerli bi url giriniz").required("Required")
});
export default function NewlinkForm(props) {
    const id = Math.random().toString(36).substr(2, 9);
    return (
    <Formik
        initialValues={{ id: id, linkName: "", linkUrl: "", votes: 0, createDate: new Date() }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={values => {
        props.onSubmit(values)
        }}
    >
        {({ handleSubmit, handleChange, values, errors }) => (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={handleChange}
            value={values.linkName}
            name="linkName"
            />
            {errors.linkName}
            <input
            type="url"
            onChange={handleChange}
            value={values.linkUrl}
            name="linkUrl"
            />
            {errors.linkUrl}
            <button type="submit">Submit</button>
        </form>
        )}
    </Formik>
    );
}
