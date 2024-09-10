import React from "react";
import "./Table.css";

export const Table = ({ rows, deleteTransaction }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Amount</th>
            <th className="expand">Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const categoryText =
              row.category.charAt(0).toUpperCase() + row.category.slice(1);

            return (
              <tr key={index}>
                <td>{row.amount}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span>{categoryText} </span>
                </td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => deleteTransaction(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
