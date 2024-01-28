import React from 'react'
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import { useStateContext } from '../context/StateContext';
import Link from 'next/link';

const initValues = { name: "", email: "", address: "", contact: "", order: "", payment: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Home() {
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
    // const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const { values, isLoading, error } = state;
    // generate order details string for email
    let orders = cartItems?.map((product) => 'Product: ' + product.name + ' Qty: ' + product.quantity + ' Price: ₹' + product.price + ' \n')
    orders.push('Subtotal: ₹' + totalPrice)
    let final = (orders.join('\n'));
    values.order = final;
    console.log(values);
    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });
            console.log('email sent successfulllly........');
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
            console.log('errrorrrrr........ ' + error.message);
        }
    };

    return (
        <div className='checkout'>
            <h1 className='section-header'>Checkout</h1>
            <div className='contact-wrapper'>
                <form action='/success' id='contact-form' className='form-horizontal' role='form'>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input
                                type="text"
                                name="name"
                                className='form-control'
                                id='name'
                                placeholder=' Full name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={onBlur}
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input
                                type="email"
                                className='form-control'
                                id='email'
                                placeholder=' Email'
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={onBlur} required
                            />
                        </div>
                    </div>
                    <br />
                    <textarea
                        className='form-control'
                        rows='4'
                        placeholder=' Address'
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={onBlur}
                        required
                    />
                    <br />
                    <br />
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input
                                className='form-control'
                                type='text'
                                // type="tel" pattern="[0-9]{10}"
                                placeholder=' Contact no: 10 digit'
                                name="contact"
                                value={values.contact}
                                onChange={handleChange}
                                onBlur={onBlur}
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <fieldset>
                        <legend>|  Payment :  |</legend>

                        <div>
                            <br />
                            <input type="radio" id="upi" name="payment" value="upi" onClick={handleChange}
                                onBlur={onBlur} required />
                            <label for="upi"> Pay ₹{totalPrice} by scanning below QR Code using any UPI app
                                <br />
                                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPqHibOuqEQs3XkGGZR7vij_Comj37QBkr-sFndkHgEL4OsPHiqldPknScjqhNBSFB3bt89S6Ku-a_2IK0Pia3tJ-_kKiuHbogPyaojheK-q8TMtM7gEmOd_7JwS8KXxiw3ZWXLEL0QZhgs_U7BSLSk9Vbn9TOCYgJqPhAdIJYoj0NPaEZ98oHzUgyy34/s2000/GooglePay_QR.png' className='qrCode'></img></label>
                        </div>
                        <br />
                        <div>
                            <input type="radio" id="cod" name="payment" value="cod" onClick={handleChange}
                                onBlur={onBlur} />
                            <label for="cod"> Cash on delivery</label>
                        </div>
                        <br />
                    </fieldset>
                    <br />
                    <div class="">
                        <ul class="">
                            <h3>Order details</h3>
                            {cartItems?.map((product) => <li>{product.name} Qty: {product.quantity} Price:₹{product.price} </li>)}
                        </ul>
                        <h2>
                            Total : ₹{totalPrice}
                        </h2>
                    </div>
                    <input
                        type='submit'
                        className='btn'
                        value=' Submit '
                        onClick={onSubmit}
                    >
                    </input>
                </form>
                {/* right side orders */}

            </div >
        </div >
    );
}