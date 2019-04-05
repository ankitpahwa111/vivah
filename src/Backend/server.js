const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const { db } = require('./Models')
// Routes
app.use('/api', require('./routes/api'))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
db.sync()
  .then(() => {
    app.listen(7788, () => {
      console.log('Server started on http://localhost:7788/')
    })
  })
  .catch(err => {
    console.error(err)
  })

