import React, { useState } from "react";
import "./Style/Login.css";  // CSS Login
import Logo from "./Img/Logo.png"; // Logo Osis
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("OSSAKA");
  const [password, setPassword] = useState("24");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Menggunakan useNavigate untuk melakukan pengalihan halaman

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      console.log(response.data); // Tindakan lanjut sesuai respons
      if (response.data.success) {
        // Set isAuthenticated menjadi true setelah login berhasil
        setIsAuthenticated(true);
        // Jika login berhasil, alihkan ke dashboard
        navigate("/KotakPenerima");
      }
    } catch (error) {
      setError("Nama pengguna atau kata sandi salah");
      // Hilangkan pesan kesalahan setelah 3 detik
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="loginform">
      <div className="container">
        <div className="info">
          <h1 className="login">Login Admin</h1>
        </div>
      </div>
      <div className="form">
        <div className="thumbnail">
          <img src={Logo} alt="logo" />
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">login</button>
          {error && (
            <p className="error-message" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <p className="message">
            Lupa Kata Sandi? <a href="#">Tanya Administator Anda</a>
          </p>
        </form>
      </div>{" "}
    </div>
  );
}

export default Login;
