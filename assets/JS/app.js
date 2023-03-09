function createPassword() {
    // Get the values of the user inputs
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    
    // Create a string containing all possible characters based on user inputs
    let patterns = "";
    if (uppercase) {
      patterns += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      patterns += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      patterns += "0123456789";
    }
    if (symbols) {
      patterns += "!@#$%^&*()_+";
    }
    
    // Generate the password
    let password = "";
    for (let i = 0; i < length; i++) {
      password += patterns.charAt(Math.floor(Math.random() * patterns.length));
    }
    
    // Display the password in the input field
    document.getElementById("password__result").value = password;
  }
  
  // Call createPassword function when the user clicks the "Generate" button
  document.getElementById("btn").addEventListener("click", createPassword);
  
  //Copy Password for the input field
  function copyPassword(){
    const textarea = document.createElement("textarea");
    const password = document.getElementById("password__result").innerText;
    if (!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");


  }
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

