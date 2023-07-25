const express = require('express');
const app = express();
const cors = require('cors');
const PAYSTACK_SECRET_KEY = 'sk_test_35fe4eeb0aff4639546fc811b809bd0db89f29ea';
const PAYSTACK_PUBLIC_KEY = 'pk_test_851e69d8d23beadc2305cf5faee560f9cab7f8e6';

app.use(cors());
app.use(express.json());

// Route to initiate payment
app.post('/initiate-payment', async (req, res) => {
  const https = require('https');
  // Get the amount from the request body
  const { email, amount } = req.body;
  console.log('Received Amount:', amount);    
  
  const params = JSON.stringify({
     email: email,
    amount: amount,
  }); 

  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
  };
  const request = https.request(options, (responseFromPaystack) => {
    let data = '';
    responseFromPaystack.on('data', (chunk) => {
      data += chunk;
    });
    responseFromPaystack.on('end', () => {
      const responseData = JSON.parse(data);
      // Send the response data back to the client
      res.json(responseData);
    });
  }).on('error', (error) => {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the payment' });
  });
  request.write(params);
  request.end();
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});