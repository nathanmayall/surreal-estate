import axios from "axios";
import { useState } from "react";

import "../styles/AddProperty.css";

import Alert from "./Alert";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
    type: "Flat",
    bedrooms: "1",
    bathrooms: "1",
    price: 0,
    email: "",
  },
  alert: {
    message: null,
    isSuccess: false,
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handleAddProperty = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/PropertyListing", fields);
      setFields(initialState.fields);
      setAlert({ message: "Property Added", isSuccess: true });
    } catch (err) {
      setAlert({ message: `${err}`, isSuccess: false });
    }
  };

  const handleFieldChange = (event) => {
    const { value, name } = event.target;
    const updatedValues = {};
    updatedValues[name] = value;
    setFields((prevState) => {
      return { ...prevState, ...updatedValues };
    });
  };

  return (
    <div className="AddPropertyWrapper">
      {alert.message && (
        <Alert message={alert.message} isSuccess={alert.isSuccess} />
      )}
      <div className="AddProperty">
        <form className="AddPropertyForm" onSubmit={handleAddProperty}>
          <label className="AddPropertyFormLabel" htmlFor="title">
            Title:
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
          <label className="AddPropertyFormLabel" htmlFor="city">
            City:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label className="AddPropertyFormLabel" htmlFor="type">
            Type:
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End Terrace">End Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label className="AddPropertyFormLabel" htmlFor="bedrooms">
            Bedrooms:
            <input
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
          <label className="AddPropertyFormLabel" htmlFor="bathrooms">
            Bathrooms:
            <input
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
          <label className="AddPropertyFormLabel" htmlFor="price">
            Price:
            <input
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
          <label className="AddPropertyFormLabel" htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
