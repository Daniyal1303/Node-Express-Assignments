const express = require('express');
const PORT = 8000;

const { listUsers, getUser, addUser, updateUser, deleteUser } = require('./services')

const app = express();


app.use(express.json({ extended: false }))
/**
 * list all users
 */

app.get('/users', (req, res) => {
     const users = listUsers()

     res.send(users)
})

app.get('/users/:userId', (req, res) => {
     

     const { userId } = req.params

     const user = getUser(userId)

     res.send(user)
})


app.post('/users', (req, res) => {

     const user = req.body

     const message = addUser(user)

     res.send(message)
})

app.put('/users/:Userid', (req, res) => {

     const updateId = req.params.Userid;

     let getData = req.body;

     const data = updateUser(updateId, getData)

     res.send(data)

})

app.delete("/users/:userId", (req, res) => {

     const {userId}= req.params;
     
     deleteUser(userId);

     res.send(`user with id ${userId} is deleted.`);

      



})


app.listen(PORT, () => {
     console.log(`server started on port ${PORT}`)
})
