const express = require('express');
const cors = require('cors');

const app = express();

// Izinkan akses dari semua origin
app.use(cors());
app.use(express.json());

// Daftar saran yang diterima
const daftarSaran = [];

// Endpoint untuk autentikasi
app.post('/login', (req, res) => {
  // Logika autentikasi di sini
  const { username, password } = req.body;
  if (username === 'OSSAKA' && password === '24') {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Endpoint untuk menerima dan menyimpan saran
app.post('/submit-form', (req, res) => {
  const { saran } = req.body;
  daftarSaran.push(saran);
  res.status(200).send('Saran berhasil disimpan.');
});

// Endpoint untuk mendapatkan daftar saran yang diterima
app.get('/daftar-saran', (req, res) => {
  res.json(daftarSaran);
});

// Mulai server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
