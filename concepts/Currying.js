var myFirstCurry = function(word) {
  return function(user) {
    return [word , ", " , user].join("");
  };
};

var HelloUser = myFirstCurry("Hello");
HelloUser("Rahul"); // Output: "Hello, Rahul"

myFirstCurry('Hello')('Bala');
