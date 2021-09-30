

const _ = require('lodash');

var users = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 24,
        "gender": "male"
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 5,
        "gender": "female"
    },
    {
        "firstName": "Jim",
        "lastName": "Carrey",
        "age": 54,
        "gender": "male"
    },
    {
        "firstName": "Kate",
        "lastName": "Winslet",
        "age": 50,
        "gender": "female"
    }

];

function getUsers() {
    var output = " ";
    for (var i = 0; i < users.length; i++) {
        console.log(users[i]);
        return output;
    }
}

function findUserById(id) {
    try {

         var user = _.find(users, { 'id':'4' }); 
            console.log(user);
            var iFindUser = ('{id}' -'{firstName} + {lastName} + " is " + {age} + " , "  + {gender}');
            console.log(user);
            return iFindUser;
            

    } catch (error) {
        console.log("Cannot read property 'id'");
        return "Cannot read property 'id'";
        
    }
}


getUsers();
console.log(findUserById());

module.exports = findUserById;


