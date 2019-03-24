const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const { db } = require('./Models')
// Routes
app.use('/api', require('./routes/api'))

db.sync()
  .then(() => {
    app.listen(7788, () => {
      console.log('Server started on http://localhost:7788/')
    })
  })
  .catch(err => {
    console.error(err)
  })

//TODO : make DB.sync()
// app.listen(7788, () => {
//   console.log('Server started on http://localhost:7788/')
// })