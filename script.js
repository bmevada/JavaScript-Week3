// Generate a random password
function newpassword(event){
    event.preventDefault()
 var passwordCharSet = ""
  
//Prompt usert for password length and complexity

    
        var password_strings = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        special: " !@$%#\'()*+,-./:;<=>?@[]^_`{|}~"
        };

    var length = window.prompt("Enter a password length between 8 and 128");
    if (parseInt(length)>128||parseInt(length)<8) {
        alert("Password should be betweem 8 to 128 characters")
        newpassword()
    }

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
      passwordCharSet += password_strings.special;
    };
  
    var numbers = window.confirm("Do you want the password to include numbers?");
    if (numbers) {
      passwordCharSet += password_strings.numeric;
    };

    var randompassword = ""
    console.log(passwordCharSet)
    //Populate random password with the above characters
    for (var i = 0; i<length; i++) {
        randompassword+=passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
        // randompassword+= passwordCharSet[(Math.floor(Math.random) * passwordCharSet.length)];
        // password += passwordCharSet.substring(randompassword, randompassword+1);
    }
console.log(randompassword)

    //Display password in textbox
    document.getElementById("Generate-Password").value = randompassword;
}

document.getElementById("btn").addEventListener("click", newpassword)