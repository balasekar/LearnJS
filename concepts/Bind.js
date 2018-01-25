var user = {
  greet: "Hello!",
  greetUser: function(userName) {
    console.log(this.greet + " " + userName);
  }
};

var greetHola = user.greetUser.bind({greet: "Hola"});
var greetBonjour = user.greetUser.bind({greet: "Bonjour"});

greetHola("Rahul") // Output: "Hola Rahul"
greetBonjour("Rahul") // Output: "Bonjour Rahul"