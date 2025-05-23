import React from 'react'
import { useFormik } from 'formik';
import "./CreateForm.css"
import { useDispatch } from 'react-redux';
import { postProducts } from '../../redux/productSlice';

const CreateForm = () => {
    let dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            description: '',
            price: '',
        },
        onSubmit: (values, { resetForm }) => {
            dispatch(postProducts(values));
            resetForm({ values: "" })
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="image">Image</label>
            <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.image}
            />

            <label htmlFor="title">Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />

            <label htmlFor="description">Description</label>
            <input
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
            />
            <label htmlFor="price">Price</label>
            <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
            />

            <button className='create-btn' type="submit">Create</button>
        </form>
    );
};
export default CreateForm