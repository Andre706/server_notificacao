var express = require('express');
const app = express()


const PORT = process.env.PORT || 9940

app.get('/', (req, res) => {
  alert("aqui")
    })

app.listen(PORT,()=>{
console.log('server is running on',PORT)
})