import { React, useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit }) => {
  const [formState, setFormState] = useState({
    amount: "",
    description: "",
    category: "groceries",
  });

  const validateForm = () => {
    if (formState.amount && formState.description) return true;
    return false;
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-wrapper"
      onClick={(e) => {
        if (e.target.className === "modal-wrapper") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              name="amount"
              value={formState.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={formState.category}
              onChange={handleChange}
            >
              <option value="groceries">Groceries</option>
              <option value="fuel">Fuel</option>
              <option value="extra">Extra</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
