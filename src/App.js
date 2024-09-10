import { useState } from "react";

import "./App.css";
import { Modal } from "./components/Modal.jsx";
import { Table } from "./components/Table.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    { amount: "12", description: "Lidl", category: "groceries" },
    { amount: "5", description: "Ice cream", category: "groceries" },
    { amount: "1", description: "Fuel", category: "fuel" },
  ]);

  const handleDeleteTransaction = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]);
  };

  return (
    <div className="App">
      <Table rows={rows} deleteTransaction={handleDeleteTransaction} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Transaction
      </button>
      {modalOpen && (
        <Modal closeModal={() => setModalOpen(false)} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
