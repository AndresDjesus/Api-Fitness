const express = require('express')
const r = require('./routes')
const cors = require('cors');
const app = express()
const port = process.env.APP_PORT || 3002
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '10mb' }));
app.use(cors({ 
  origin: '*',
}));

app.use('/api', r);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome!' });
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});