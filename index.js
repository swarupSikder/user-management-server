const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('User_Management Server is running...')
})

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com'},
    {id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com'},
    {id: 3, name: 'Sabila', email: 'sabila@gmail.com'},
]




//-------------//
//   get user  //
//-------------//
app.get('/users', (req, res)=>{
    res.send(users);
})


//--------------//
//   post user  //
//--------------//
app.post('/users', (req, res)=>{
    res.send(users);
})




app.listen(port, () => {
  console.log(`User-Management app listening on port ${port}`)
})
