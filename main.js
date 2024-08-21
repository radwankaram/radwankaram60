function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const useNumbers = document.getElementById('numbers').checked;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useSymbols = document.getElementById('symbols').checked;

    if (!useNumbers && !useUppercase && !useLowercase && !useSymbols) {
        alert('يجب تحديد نوع واحد على الأقل من الأحرف!');
        return;
    }

    const numbers = "0123456789";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";

    let charset = "";
    if (useNumbers) charset += numbers;
    if (useUppercase) charset += uppercase;
    if (useLowercase) charset += lowercase;
    if (useSymbols) charset += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('تم نسخ كلمة المرور إلى الحافظة!');
}































let balance = 1000; // Initial balance

function updateMessage(message) {
    document.getElementById('message').textContent = message;
}

function showBalance() {
    updateMessage(`رصيدك الحالي هو: ${balance} $`);
}

function withdrawCash() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        updateMessage('يرجى إدخال مبلغ صحيح للسحب.');
        return;
    }
    if (amount > balance) {
        updateMessage('الرصيد غير كافٍ للسحب.');
        return;
    }
    balance -= amount;
    updateMessage(`تم سحب ${amount} .$ رصيدك الحالي هو: ${balance} $`);
    document.getElementById('amount').value = '';
}

function depositCash() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        updateMessage('يرجى إدخال مبلغ صحيح للإيداع.');
        return;
    }
    balance += amount;
    updateMessage(` تم إيداع  ${amount} .رصيدك الحالي هو دولار : ${balance} $`);
    document.getElementById('amount').value = '';
}

function exit() {
    updateMessage('تم الخروج.');
    document.getElementById('amount').value = '';
}




























document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.getElementById('image');
            img.src = e.target.result;
            img.onload = function() {
                const name = file.name;
                const size = (file.size / 1024).toFixed(2) + ' KB';
                const dimensions = img.naturalWidth + ' x ' + img.naturalHeight;
                const type = file.type;
                
                document.getElementById('name').textContent = name;
                document.getElementById('size').textContent = size;
                document.getElementById('dimensions').textContent = dimensions;
                document.getElementById('type').textContent = type;
            }
        }
        
        reader.readAsDataURL(file);
    }
});






















document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdateInput = document.getElementById('birthdate').value;
    const birthdate = new Date(birthdateInput);
    const today = new Date();

    if (birthdate > today) {
        document.getElementById('age').textContent = 'تاريخ الميلاد غير صحيح!';
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('age').textContent = `عمر: ${age} سنة`;
});


































// function appendToDisplay(value) {
//     const display = document.getElementById('display');
//     if (display.value === 'Error') {
//         display.value = '';
//     }
//     display.value += value;
// }

// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function calculateResult() {
//     const display = document.getElementById('display');
//     let expression = display.value;
    
//     // Handle square root and exponentiation
//     expression = expression.replace('sqrt', 'Math.sqrt');
//     expression = expression.replace('^', '**');
    
//     try {
//         // Evaluate the expression
//         const result = eval(expression);
//         display.value = result;
//     } catch (e) {
//         display.value = 'Error';
//     }





























// script.js
function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '√') {
        display.innerText += 'Math.sqrt(';
    } else if (value === '**') {
        display.innerText += '**';
    } else if (value === 'Math.PI') {
        display.innerText += Math.PI;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.innerText;

    // Handle square root
    expression = expression.replace(/Math\.sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
    
    // Evaluate the expression
    try {
        display.innerText = eval(expression) || '';
    } catch (e) {
        display.innerText = 'خطأ';
    }
}

