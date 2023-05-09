const body = document.querySelector('body');
const generatedPassword = document.getElementById('password');
const passwordSpecs = document.getElementById('password-specs');
const passwordLength = document.getElementById('length-range');
const lowerCase = document.getElementById('lowercase');
const upperCase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generator');
const strengthLevel = document.getElementById('strength-level');
const strength1 = document.getElementById('strength1');
const strength2 = document.getElementById('strength2');
const strength3 = document.getElementById('strength3');
const strength4 = document.getElementById('strength4');
const lengthNumber = document.getElementById('length-number')
const copy = document.getElementById('copybutton');


lengthNumber.textContent = passwordLength.value
passwordLength.addEventListener('change', ()=>{
  lengthNumber.textContent = passwordLength.value
})

const lowercaseChars1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let lowercaseChars;

const uppercaseChars1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let uppercaseChars;

const numberChars1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let numberChars;

const symbolChars1 = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "]", "[", "\\", ":", ";", "?", ">", "<", ",", ".", "/", "-", "="];
let symbolChars;


function generateRandomPassword(length) {
  let password = "";
  for( let i = 0; i < length; i++){
  if(lowercaseChars){

  let lowercaseIndex = Math.floor(Math.random() * lowercaseChars.length);
  password += lowercaseChars[lowercaseIndex];
  }
  if( password.length == length){
    break
  };

  if(uppercaseChars){
    let uppercaseIndex = Math.floor(Math.random() * uppercaseChars.length);
  password += uppercaseChars[uppercaseIndex];
  }
  if( password.length == length){
    break
  };

  if(numberChars){
    let numberIndex = Math.floor(Math.random() * numberChars.length);
  password += numberChars[numberIndex];
  }
  if( password.length == length){
    break
  };

  if(symbolChars){
    let symbolIndex = Math.floor(Math.random() * symbolChars.length);
  password += symbolChars[symbolIndex];
  }
  if( password.length == length){
    break
  }
};
  return password;
};
  
generate.addEventListener('click', () => {
    let length1 = passwordLength.value;
    function shuffleString(str) {
      // Convert the string to an array
      let arr = str.split('');
    
      // Perform the Fisher-Yates shuffle algorithm
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    
      // Convert the shuffled array back to a string and return it
      return arr.join('');
    };
    if(lowerCase.checked){
    lowercaseChars = lowercaseChars1
    }else{lowercaseChars = null};

    if(upperCase.checked){
    uppercaseChars = uppercaseChars1
    }else{uppercaseChars = null};

    if(numbers.checked){
    numberChars = numberChars1
    }else{numberChars = null};

    if(symbols.checked){
    symbolChars = symbolChars1
    }else{symbolChars = null};

    let password1;

    if(password == 'undefined'){
      password1 = null
    }else{
    password1 = generateRandomPassword(length1);
    password1 = shuffleString(password1);
    generatedPassword.value = password1;
    }
    
})

copy.addEventListener('click', ()=>{
  generatedPassword.select();
  document.execCommand("copy");
})




lowerCase.addEventListener('change', ()=>{
  strength1.style.backgroundColor = 'red'
  let counter = 0;
  if(lowerCase.checked){
    counter += 1
  }
  if(upperCase.checked){
    counter += 1
  }
  if(numbers.checked){
    counter += 1
  }
  if(symbols.checked){
    counter += 1
  }
  if(counter == 1){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 2){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = 'red'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 3){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'yellow'
    strength2.style.backgroundColor = 'yellow'
    strength3.style.backgroundColor = 'yellow'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 4){
    strengthLevel.style.color = 'green'
    strength1.style.backgroundColor = 'green'
    strength2.style.backgroundColor = 'green'
    strength3.style.backgroundColor = 'green'
    strength4.style.backgroundColor = 'green'
  }
  if(!lowerCase.checked && counter == 0){
    strengthLevel.style.color = 'white'
    strength1.style.backgroundColor = '#18171F'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!lowerCase.checked && counter == 1){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!lowerCase.checked && counter == 2){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = 'red'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!lowerCase.checked && counter == 3){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'yellow'
    strength2.style.backgroundColor = 'yellow'
    strength3.style.backgroundColor = 'yellow'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!lowerCase.checked && counter == 4){
    strengthLevel.style.color = 'green'
    strength1.style.backgroundColor = 'green'
    strength2.style.backgroundColor = 'green'
    strength3.style.backgroundColor = 'green'
    strength4.style.backgroundColor = 'green'
  }
})

upperCase.addEventListener('change', ()=>{
  strength1.style.backgroundColor = 'red'
  let counter = 0;
  if(lowerCase.checked){
    counter += 1
  }
  if(upperCase.checked){
    counter += 1
  }
  if(numbers.checked){
    counter += 1
  }
  if(symbols.checked){
    counter += 1
  }
  if(counter == 1){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 2){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = 'red'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 3){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'yellow'
    strength2.style.backgroundColor = 'yellow'
    strength3.style.backgroundColor = 'yellow'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 4){
    strengthLevel.style.color = 'green'
    strength1.style.backgroundColor = 'green'
    strength2.style.backgroundColor = 'green'
    strength3.style.backgroundColor = 'green'
    strength4.style.backgroundColor = 'green'
  }
  if(!upperCase.checked && counter == 0){
    strengthLevel.style.color = 'white'
    strength1.style.backgroundColor = '#18171F'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!upperCase.checked && counter == 1){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!upperCase.checked && counter == 2){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = 'red'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!upperCase.checked && counter == 3){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'yellow'
    strength2.style.backgroundColor = 'yellow'
    strength3.style.backgroundColor = 'yellow'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!upperCase.checked && counter == 4){
    strengthLevel.style.color = 'green'
    strength1.style.backgroundColor = 'green'
    strength2.style.backgroundColor = 'green'
    strength3.style.backgroundColor = 'green'
    strength4.style.backgroundColor = 'green'
  }
})

numbers.addEventListener('change', ()=>{
  strength1.style.backgroundColor = 'red'
  let counter = 0;
  if(lowerCase.checked){
    counter += 1
  }
  if(upperCase.checked){
    counter += 1
  }
  if(numbers.checked){
    counter += 1
  }
  if(symbols.checked){
    counter += 1
  }
  if(counter == 1){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 2){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = 'red'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 3){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'yellow'
    strength2.style.backgroundColor = 'yellow'
    strength3.style.backgroundColor = 'yellow'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 4){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'green'
    strength2.style.backgroundColor = 'green'
    strength3.style.backgroundColor = 'green'
    strength4.style.backgroundColor = 'green'
  }
  if(!numbers.checked && counter == 0){
    strengthLevel.style.color = 'white'
    strength1.style.backgroundColor = '#18171F'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!numbers.checked && counter == 1){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!numbers.checked && counter == 2){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = 'red'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!numbers.checked && counter == 3){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'yellow'
    strength2.style.backgroundColor = 'yellow'
    strength3.style.backgroundColor = 'yellow'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!numbers.checked && counter == 4){
    strengthLevel.style.color = 'green'
    strength1.style.backgroundColor = 'green'
    strength2.style.backgroundColor = 'green'
    strength3.style.backgroundColor = 'green'
    strength4.style.backgroundColor = 'green'
  }
})

symbols.addEventListener('change', ()=>{
  strength1.style.backgroundColor = 'red'
  let counter = 0;
  if(lowerCase.checked){
    counter += 1
  }
  if(upperCase.checked){
    counter += 1
  }
  if(numbers.checked){
    counter += 1
  }
  if(symbols.checked){
    counter += 1
  }
  if(counter == 1){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 2){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = 'red'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 3){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'yellow'
    strength2.style.backgroundColor = 'yellow'
    strength3.style.backgroundColor = 'yellow'
    strength4.style.backgroundColor = '#18171F'
  }
  if(counter == 4){
    strengthLevel.style.color = 'green'
    strength1.style.backgroundColor = 'green'
    strength2.style.backgroundColor = 'green'
    strength3.style.backgroundColor = 'green'
    strength4.style.backgroundColor = 'green'
  }
  if(!symbols.checked && counter == 0){
    strengthLevel.style.color = 'white'
    strength1.style.backgroundColor = '#18171F'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!symbols.checked && counter == 1){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = '#18171F'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!symbols.checked && counter == 2){
    strengthLevel.style.color = 'red'
    strength1.style.backgroundColor = 'red'
    strength2.style.backgroundColor = 'red'
    strength3.style.backgroundColor = '#18171F'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!symbols.checked && counter == 3){
    strengthLevel.style.color = 'yellow'
    strength1.style.backgroundColor = 'yellow'
    strength2.style.backgroundColor = 'yellow'
    strength3.style.backgroundColor = 'yellow'
    strength4.style.backgroundColor = '#18171F'
  }
  if(!symbols.checked && counter == 4){
    strengthLevel.style.color = 'green'
    strength1.style.backgroundColor = 'green'
    strength2.style.backgroundColor = 'green'
    strength3.style.backgroundColor = 'green'
    strength4.style.backgroundColor = 'green'
  }
})