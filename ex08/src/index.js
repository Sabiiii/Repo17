
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


function findUser(lastName, gender) {
    try {

        var users = _.find(users, { lastName, gender }); 
        console.log(users);
                var iFindUser = (`$(username) + is + $(lastname)`, `${iFindUser}`);

        return iFindUser;

    } catch (error) {

        console.log("Cannot read property 'firstName' of undefined");
        return "Cannot read property 'firstName' of undefined";
        
    }
}

getUsers();
findUser("Doe", "male");
findUser("Doe", "female");
findUser("Carrey", "male");
findUser("Winslet", "female");

module.exports = findUser;


