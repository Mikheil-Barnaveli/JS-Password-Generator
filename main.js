const body = document.querySelector('body');
const generatedPassword = document.getElementById('password');
const passwordSpecs = document.getElementById('password-specs');
const passwordLength = document.getElementById('length');
const lowerCase = document.getElementById('lowercase');
const upperCase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generator');


const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";


function generatePassword(length, chars) {
    
    console.log(chars);

    let password = "";
  
    for (let i = 0; i < length; i++) {
      let charTypeIndex = Math.floor(Math.random() * chars.length);
      console.log("chardTypeIndex", charTypeIndex);
      let charType = chars[charTypeIndex];
      console.log("charType", charType);
      let charIndex = Math.floor(Math.random() * charType.length);
      console.log("sigrdze", charType.length);
      console.log("charIndex" ,charIndex);
      password += charType[charIndex];
      console.log("paroli", password);


      console.log("axali chars" ,chars);
      
    }
  
    return password;
  }

  
generate.addEventListener('click', () => {
    let length = passwordLength.value;
    console.log(length);
    let chars = "";
    console.dir(lowerCase.checked);
    if(lowerCase.checked){
        chars += lowercaseChars
        console.log('lower case');
    }
    if(upperCase.checked){
        chars += uppercaseChars
        console.log('upper case');
    }
    if(numbers.checked){
        chars += numberChars
        console.log('numbers');
    }
    if(symbols.checked){
        chars += symbolChars
        console.log('symbols');
    }
    let password1 = generatePassword(length, chars);
    generatedPassword.value = password1;
    console.log(password1);
})





  // function generatePassword(length, chars) {
//     let password = "";
//     for (let i = 0; i < length; i++) {
//       let index = Math.floor(Math.random() * chars.length);
//       password += chars[index];
//     }
    
//     return password;
//   };