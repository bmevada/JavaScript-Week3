// Generate a random password
function newpassword(){
  
    //Set password length and complexity


    var charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_+=-{}:<>?[];',./";
    var passwordlength = 84;
    var password = " ";

    for (var i=0; i<passwordlength; i++){
        var randomnumber = numerical.charset(number.random() * chars.length);
        password +=chars.substring(randomnumber, randomnumber+1);
    }
}