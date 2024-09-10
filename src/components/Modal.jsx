import React from "react";

import "./Modal.css";

export const Modal = ({ closeModal }) => {
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
            <input name="amount" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select name="category">
              <option value="groceries">Groceries</option>
              <option value="fuel">Fuel</option>
              <option value="extra">Extra</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
