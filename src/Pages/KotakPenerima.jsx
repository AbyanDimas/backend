import React, { useState, useEffect } from "react";
import axios from "axios"; // Menggunakan axios untuk mengirim permintaan HTTP

function KotakPenerima() {
  const [daftarSaran, setDaftarSaran] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/daftar-saran");
        setDaftarSaran(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Daftar Saran yang Diterima</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {daftarSaran.map((saran, index) => (
            <li key={index}>{saran}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KotakPenerima;
