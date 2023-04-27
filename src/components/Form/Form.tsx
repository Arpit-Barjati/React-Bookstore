import React, { useState, useReducer } from "react";
import formCss from "./Form.module.css";

type StateType = {
  name: string;
  phoneNumber: number;
  address: string;
  city: string;
  state: string;
  pinCode: number;
  email: string;
};

const reducer = (state: StateType, action: { type: string; payload: any }) => {
  if(!Object.hasOwn(state,action.type)){
    return {...state};
  }
  return {...state,[action.type]:action.payload};
};

export const Form: React.FC = (): JSX.Element => {
  const [formDisabled, setFormDisabled] = useState(false);
  const shippingInfo = JSON.parse(
    localStorage.getItem("shippingAddress") ||
      `{"name" : "Customer241",
    "phoneNumber" : 9999999999,
    "address" : "342-R",
    "city" : "Delhi",
    "state" : "Delhi",
    "pinCode" : 123456,
    "email" : "email@email.com"}`
  );

  const [formData, dispatch] = useReducer(reducer, shippingInfo);

  const handleOnSave = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    localStorage.setItem("shippingAddress", JSON.stringify(formData));
    setFormDisabled(true);
  };

  const handleOnEdit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (formDisabled === true) setFormDisabled(false);
  };

  return (
    <div>
      <h2>Shipping Address</h2>
      <form id={formCss.shippingAddressForm}>
        <label htmlFor="customerName">Customer Name: </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            dispatch({ type: "name", payload: e.target.value });
          }}
          id="customerName"
          disabled={formDisabled}
          required
        />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => {
            dispatch({ type: "address", payload: e.target.value });
          }}
          id="address"
          disabled={formDisabled}
          required
        />
        <label htmlFor="city">City: </label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => {
            dispatch({ type: "city", payload: e.target.value });
          }}
          id="city"
          disabled={formDisabled}
          required
        />
        <label htmlFor="state">State: </label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => {
            dispatch({ type: "state", payload: e.target.value });
          }}
          id="state"
          disabled={formDisabled}
          required
        />
        <label htmlFor="phoneNumber">Phone number: </label>
        <input
          type="number"
          value={formData.phoneNumber}
          onChange={(e) => {
            dispatch({ type: "phoneNumber", payload: e.target.value });
          }}
          id="phoneNumber"
          disabled={formDisabled}
          required
        />
        <label htmlFor="pinCode">Pincode: </label>
        <input
          type="number"
          value={formData.pinCode}
          onChange={(e) => {
            dispatch({ type: "pinCode", payload: e.target.value });
          }}
          id="pinCode"
          disabled={formDisabled}
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            dispatch({ type: "email", payload: e.target.value });
          }}
          id="email"
          disabled={formDisabled}
          required
        />
      </form>

      <div style={{ display: "flex", gap: "10px" }}>
        <button type="submit" onClick={handleOnSave}>
          Save
        </button>
        <button type="submit" onClick={handleOnEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};
