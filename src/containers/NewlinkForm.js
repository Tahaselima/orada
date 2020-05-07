import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input, Error, Button } from '../layout/styles'
import { useToasts } from 'react-toast-notifications'


const validationSchema = Yup.object({
    linkName: Yup.string().required("Please enter a name"),
    linkUrl: Yup.string().url("Please enter real url").required("Please enter a url")
});

export default function NewlinkForm(props) {
    const { addToast } = useToasts()
    
    const id = Math.random().toString(36).substr(2, 9);
    return (
    <Formik
        initialValues={{ id: id, linkName: "", linkUrl: "", votes: 0, createDate: new Date(), updatedDate: new Date() }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={values => {
        addToast(`${values.linkName} added successfully`, {
            appearance: 'success'
        })    
        props.onSubmit(values)
        }}
    >
        {({ handleSubmit, handleChange, values, errors }) => (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                className={errors.linkName ? 'error' : ''}
                onChange={handleChange}
                value={values.linkName}
                placeholder="Type Url Name"
                name="linkName"
            />
            <Error> {errors.linkName} </Error>
            <Input
                type="url"
                className={errors.linkUrl ? 'error' : ''}
                onChange={handleChange}
                value={values.linkUrl}
                placeholder="Type Url Link"
                name="linkUrl"
            />
            <Error> {errors.linkUrl} </Error>
            
            <Button type="submit">Add</Button>
        </form>
        )}
    </Formik>
    );
}
