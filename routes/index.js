const express = require('express');
const path = require('path');
const axios = require('axios');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});


router.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://integrations.fu.do/fudo/products', {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.5',
        'Access-Control-Allow-Origin': '*',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        'fudo-account-id': 'dGFqeXJvb2Z0b3BiYXI=',
        'fudo-app': 'qr-menu',
        Origin: 'https://menu.fu.do',
        Referer: 'https://menu.fu.do/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        TE: 'trailers',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }

});


module.exports = router;
