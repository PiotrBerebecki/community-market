const express = require('express');


const app = express();


app.get('/products', (req, res) => {
  res.send('TV');
});


const port = process.env.PORT || 4000;


app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
