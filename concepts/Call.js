var user = {
  name: "Rahul Mhatre",
  whatIsYourName: function() {
    console.log(this.name);
  }
};

user.whatIsYourName(); // Output: "Rahul Mhatre",
var user2 = {
  name: "Neha Sampat"
};

user.whatIsYourName.call(user2); // Output: "Neha Sampat"
