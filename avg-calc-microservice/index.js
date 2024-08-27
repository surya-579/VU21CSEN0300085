const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;

// Sliding window settings
const windowSize = 10;
let window = [];
let authToken = null;

// Helper function to authenticate and get the token
const authenticate = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/test/auth', {
      companyName: 'GITAM',
      clientID: 'your_client_id',
      clientSecret: 'your_client_secret',
      ownerName: 'Koushik',
      ownerEmail: 'sande@gitam.in',
      rollNo: 'VU21CSEN0300085'
    });
    authToken = response.data.access_token;
    console.log('Authenticated successfully. Token:', authToken);
  } catch (error) {
    console.error('Authentication failed:', error.message);
  }
};


const fetchNumbers = async (type) => {
  const urls = {
    p: 'http://20.244.56.144/test/primes',
    e: 'http://20.244.56.144/test/even',
    T: 'http://20.244.56.144/test/fibo',
    r: 'http://20.244.56.144/test/rand'
  };

  const apiUrl = urls[type];
  if (!apiUrl) return { error: 'Invalid number type' };

  try {
    
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      timeout: 500
    });
    return response.data.numbers;
  } catch (error) {
    console.error("Error fetching numbers:", error.message);
    return { error: 'Failed to fetch numbers' };
  }
};


app.get('/numbers/:numberid', async (req, res) => {
  const numberType = req.params.numberid;

  const newNumbers = await fetchNumbers(numberType);

  if (newNumbers.error) {
    return res.status(500).json({ error: 'Failed to fetch numbers' });
  }

  const previousState = [...window];

  newNumbers.forEach(num => {
    if (!window.includes(num)) {
      if (window.length >= windowSize) {
        window.shift();
      }
      window.push(num);
    }
  });

  const avg = window.reduce((acc, num) => acc + num, 0) / window.length;
  res.json({
    windowPrevState: previousState,
    windowCurrState: window,
    numbers: newNumbers,
    avg: avg.toFixed(2)
  });
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
    await authenticate();
});
