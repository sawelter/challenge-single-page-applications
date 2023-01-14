/** 
 * TO DO: 
 * -- change choice of sauce to radio
 * -- move checkbox options to the left for all toppings
 * -- add tags for topping text
 * -- adjust alignment for all headings and text
 * -- increase size of special instructions box
 */

import styled from "styled-components";
import React, { useState } from "react";
import "./form.css";

const backgroundImg = "https://blog.caseys.com/caseysposts/c910bf0fa78642cf8dc556a1042a3a55/image/embed";
const headerHeight = "30vh";

// Form styling
const FormContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0;
    border: 2px solid black; 
    margin: 3rem auto;

    form {
        width: 100%;
    }
    
    .image {
        background-image: url(${backgroundImg});
        background-size: cover;
        height: ${headerHeight};
    }
    
    h2 {
        text-align: center;
        font-size: 2rem;
        padding: 2rem;
    }

    p.error-message {
        color: red;
        font-weight: normal;
    }


    .form-section {
        background-color: lightgray;
        display: flex;
        width: 100%;
        padding: 2%;
        margin: 2% 0;

        margin: 10px 0; 
        font-weight: bold;
        display: flex;
        flex-direction: column;

        input {
            margin-left: 10px;
        }
    }

    #toppings {
        display: flex;
        flex-direction: column;
        justify-items: left;
        border: 2px solid yellow;
    }

    .topping {
        border: 1px solid orange;
    }

    h3 {
        font-size: 1.5rem;
        padding: .5rem 0 0 2rem;
    }


    h4 {
        font-size: 1.1rem;
        padding: .1rem;
        padding-left: 2rem;
        font-family: sans-serif;
    }

    p {

    }

    p {
        margin: .1rem;
        padding: .1rem;
    }

    input {
        width: 80%;

    }
    
    .checkmark {
        background-color: black;
        font-size: 4rem;
    }

    #order-button {
        margin: 0 auto;
    }

    .form-section-text {
        border: 1px solid blue;
    }

    input[type=text] {
        border: 3px solid green;
    }

    input[type=checkbox] {
        border: 3px solid red;
    }
`;



export default function OrderForm(props) {

    const { values, // values in form fields
            submit, // submit function in App
            change, // formValue update function in App
            disabled, // disabled status of Submit button
            errors, // error messages for validation
          } = props;

    // When Submit button is pressed, prevent page from reloading and then run the submit() function (a props passed through from App.js)
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    // When any value of any field is changed, update the value of that field in the formsValue by passing it through the change prop from App.js
    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const newVal = type === "checkbox" ? checked : value; 
        change(name, newVal);    
    }

    // The entire form page itself at "/pizza"
    return (
        <FormContainer class="form-container">
            <h2>Build Your Own Pizza</h2>
            <div className="image"></div>
            <form id="pizza-form" onSubmit={onSubmit}>
                <h3>Build your pizza</h3>
                <div className="form-section">
                    <label id="name-input">
                        <div class="form-section-text">
                            <h4>Name</h4>
                            <p>Required</p>
                            <p className="error-message">{errors.name}</p>
                        </div>
                        <input 
                            type="text"
                            name="name"
                            id="name-input"
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className="form-section">
                    <label id="size-input">
                        <div class="form-section-text">
                            <h4>Choice of Size</h4>
                            <p>Required</p>
                            <p className="error-message">{errors.size}</p>
                        </div>
                        <select name="size" value={values.size} onChange={onChange} id="size-dropdown">
                            <option value="">====Select====</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xlarge">X-Large</option>
                        </select>
                    </label>
                </div>
                <div className="form-section">
                    <label id="sauce-input">
                        <div class="form-section-text">
                            <h4>Choice of Sauce</h4>
                            <p>Required</p>
                            <p className="error-message">{errors.sauce}</p>
                        </div>
                        <select name="sauce" value={values.sauce} onChange={onChange} id="sauce-dropdown">
                            <option value="">====Select====</option>
                            <option value="marinara">Marinara</option>
                            <option value="pesto">Pesto</option>
                            <option value="bbq">Barbecue Sauce</option>
                            <option value="white">White Garlic Sauce</option>
                        </select>
                    </label>
                </div>
                <div className="form-section">
                    <label id="toppings">
                        <div class="form-section-text">
                            <h4>Add Toppings</h4>
                        </div>
                        <span id="garlic" className="topping">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="garlic"
                                checked={values.garlic}
                                onChange={onChange}
                            /> Garlic
                        </span>
                        <span id="green-pepper" className="topping">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="green_pepper"
                                checked={values.green_pepper}
                                onChange={onChange}
                            />
                            Green Peppers
                        </span>
                        <span id="olives" className="topping">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="olives"
                                checked={values.olives}
                                onChange={onChange}
                            />
                            Black Olives
                        </span>
                        <span id="onions" className="topping">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="onions"
                                checked={values.onions}
                                onChange={onChange}
                            />
                            Onions
                        </span>
                        <span id="pineapple" className="topping">
                            <input 
                                type="checkbox"
                                className="checkmark"
                                name="pineapple"
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                            Pineapple
                        </span>
                    </label>
                </div>
                <div className="form-section">
                    <label id="special-input">
                        <div class="form-section-text">
                            <h4>Special Instructions</h4>
                            <p className="error-message">{errors.special}</p>
                        </div>
                        <input 
                            name="special"
                            id="special-text"
                            type="text"
                            value={values.special}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <button id="order-button" disabled={disabled}>Add to Order</button>

            </form>
        </FormContainer>
    )
}