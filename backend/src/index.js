const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('hello world');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
