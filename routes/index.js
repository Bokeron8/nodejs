const express = require('express');
const path = require('path');
const axios = require('axios');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});


router.get('/proxy', async (req, res) => {
  const targetUrl = 'https://menu.fu.do/tajyrooftopbar/qr-menu'; // Hardcoded for now

  try {
    const response = await axios.get(targetUrl);
    res.send(response.data); // Or res.send(response.data) if it's not JSON
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).send('Proxy error');
  }
});


module.exports = router;
