import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import KotakPenerima from './Pages/KotakPenerima';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/KotakPenerima"
          element={<ProtectedRoute element={<KotakPenerima />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
