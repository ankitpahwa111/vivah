const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const { db } = require('./Models')
// Routes
app.use(express.static(path.resolve(__dirname, '../../build')));
app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname, '../../build','index.html'))
})
app.use('/api', require('./routes/api'))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
const normalizePort = port => parseInt(port,10);
const PORT = normalizePort(process.env.PORT || 5000)

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server started on ' + PORT)
    })
  })
  .catch(err => {
    console.error(err)
  })

