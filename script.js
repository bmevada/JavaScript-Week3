// Generate a random password
function newpassword(){
  
    //Set password length and complexity
    document.getElementById("password").value = password

    //Set the length and possible values of the password
    var charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_+=-{}:<>?[];',./";
    min passwordlength = 8;
    max passwordlength = 128
    var password = " ";

    //Create random password characters
    for (var i=0; i<passwordlength; i++){
        var randomvalue = numerical.charat(Math.floor(Math.random) * Math.floor);
        password +=chars.substring(randomvalue, randomvalue+1);
    }

    //Display password in textbox
    document.getElementById("Generate-Password").value = password;

}