import { useState } from "react";

import "./App.css";
import { Modal } from "./components/Modal.jsx";
import { Table } from "./components/Table.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <Table />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Transaction
      </button>
      {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
  );
}

export default App;
