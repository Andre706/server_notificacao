var express = require('express');
const app = express()


const PORT = process.env.PORT || 9940

app.get('/', (req, res) => {
  res.json({nome:"teste"})
    })

app.listen(PORT,()=>{
console.log('server is running on',PORT)
})