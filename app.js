var express = require('express');
const app = express()
const cors = require('cors');
const fetch = require('node-fetch')
app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

const PORT = process.env.PORT || 9940

async function sendPushNotification(title,body, token) {
  const message = {
    to: token,
    sound: 'default',
    title: title,
    body: body,
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

app.post('/sendnotification', (req, res) => {
  // const {title,message, token} = req.body
  sendPushNotification(req.body.title,req.body.message, req.body.token) 
    })

app.listen(PORT,()=>{
console.log('server is running on',PORT)
})