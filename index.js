const express = require('express')
const app = express()
const port = 3000
//định nghĩa tuyến đường
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})