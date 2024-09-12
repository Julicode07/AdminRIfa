import React, { useState } from "react";
import { useRifa } from "../context/RifaContext";

function Admin() {
  const { selectedNumbers, toggleNumber } = useRifa();
  const [inputValue, setInputValue] = useState("");

  const handleAddNumber = () => {
    if (inputValue && !selectedNumbers.includes(inputValue)) {
      toggleNumber(inputValue);
      setInputValue("");
    }
  };

  const handleRemoveNumber = (number) => {
    toggleNumber(number);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-3">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Administrar Números
        </h1>
        <h2 className="text-lg font-bold mb-4 text-center text-gray-800">
          Total de Números: {selectedNumbers.length}
        </h2>
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Ingrese un número (00-99)"
          />
          <button
            onClick={handleAddNumber}
            className="mt-2 bg-blue-500 text-white p-2 rounded-lg w-full"
          >
            Añadir Número
          </button>
        </div>
        <div className="space-y-2">
          {selectedNumbers.map((number) => (
            <div
              key={number}
              className="flex items-center justify-between p-2 bg-gray-200 rounded-lg"
            >
              <span>{number}</span>
              {/* <button
                onClick={() => handleRemoveNumber(number)}
                className="bg-red-500 text-white p-1 rounded-lg"
              >
                Eliminar
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
