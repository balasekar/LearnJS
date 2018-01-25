var user = {
  greet: "Hello!",
  greetUser: function(userName) {
    console.log(this.greet + " " + userName);
  }
};

var greet1 = {
  greet: "Hola"
};

user.greetUser.call(greet1,"Rahul") // Output: "Hola Rahul"
user.greetUser.apply(greet1,["Rahul"]) // Output: "Hola Rahul"