import React, { useState, useEffect } from "react";

function App() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const apiUrl = "https://dog.ceo/api/breeds/image/random/9";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImagenes(data.message);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Galería de Perros</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagenes.map((imagen, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <img src={imagen} alt="Perro" className="w-full mt-2 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
