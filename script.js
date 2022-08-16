// Generate a random password
function newpassword() 
  
//Prompt usert for password length and complexity
document.getElementById("Generate-Password").value = password

var length = Number(prompt("Enter a password length between 8 and 128"));
        charType = prompt("Enter a character type: special, numeric, uppercase, lowercase");
        password = Generate-Password();
        document.getElementById("displaypassword").value = password;
    
        var password_strings = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        special: " !"@$%#\'()*+,-./:;<=>?@[]^_`{|}~"
        };

    // var passwordlength = 7;
    // var minPasswordLength = 8;
    // var maxPasswordLength = 128;
    // var password = " ";

    var length = window.prompt("Enter a password length between 8 and 128");

    var lowercase = window.confirm("Do you want the password to include lowercase letters?");
    if (lowercase) {
      passwordCharSet += password_strings.lowercase;
    };
  
    var uppercase = window.confirm("Do you want the password to include uppercase letters?");
    if (uppercase) {
      passwordCharSet += password_strings.uppercase;
    };
  
    var symbols = window.confirm("Do you want the password to include symbols?");
    if (symbols) {
      passwordCharSet += password_strings.symbol;
    };
  
    var numbers = window.confirm("Do you want the password to include numbers?");
    if (numbers) {
      passwordCharSet += password_strings.number;
    };

    //Create random password characters
    for (var i=0; i<passwordlength; i++){
        var randomvalue = charset(Math.floor(Math.random) * Math.floor);
        password +=chars.substring(randomvalue, randomvalue+1);
    }

    //Display password in textbox
    document.getElementById("Generate-Password").value = password;


document.getElementById("btn").addEventListener("click", newpassword)