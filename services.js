const fs = require('fs')


// users = JSON.parse(users);

const listUsers= () => {
     let users = fs.readFileSync('users.json', 'utf-8')
     users = JSON.parse(users);
     return users
}

const getUser = userId => {

  let users = listUsers();

  userId = Number(userId)

  return users.find(user => user.id === userId);
}

const updateUser = (userId,data)=> {
     
     let users = listUsers();

     userId = Number(userId)
   
     let  findUser = users.find(user => user.id === userId) 
    
     for(const key in data){
     
          findUser[key] = data[key]
     
     }
     
     fs.writeFileSync('users.json', JSON.stringify(users),'utf-8')
     return findUser;

   }

const addUser = user => {
     
     let users = listUsers();

     users.unshift(user)

     fs.writeFileSync('users.json', JSON.stringify(users),'utf-8')

     return 'SUCCESS: user added'
}

const deleteUser = userId => {

     let  users = listUsers();
     // console.log(users);
     user = users.filter((user)=> user.id !=userId );
     
     fs.writeFileSync('users.json', JSON.stringify(user),'utf-8');
     
}

module.exports = {
     listUsers: listUsers,
     getUser: getUser,
     addUser: addUser,
     updateUser: updateUser,
     deleteUser: deleteUser
}