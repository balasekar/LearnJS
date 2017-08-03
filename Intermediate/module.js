function user(){
    var userName, password;
    function doLogin(user,pw){
        userName = user;
        password = pw;
        console.log('Yoy are Logged in:',userName);
    }
    var publicAPI = {
        login : doLogin
    };
    return publicAPI;
}

chris = user();
chris.login('chris','ellis');