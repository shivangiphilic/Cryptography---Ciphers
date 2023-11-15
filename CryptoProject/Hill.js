// const readline = require('readline');

const keySize = 2; // Set the key size globally

// Function to convert a character to its corresponding numeric value
function charToNumericValue(c) {
    if (/[a-zA-Z]/.test(c)) {
        return c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    }
    // Handle non-alphabet characters
    return -1; // Invalid character
}

// Function to encrypt a plaintext using a Hill cipher
function hillCipherEncrypt(plaintext, keyMatrix) {
    let ciphertext = '';
    const keySize = keyMatrix.length;
    const textSize = plaintext.length;

    for (let i = 0; i < textSize; i += keySize) {
        // Initialize an array to store a block of characters
        const block = [];
        for (let j = 0; j < keySize && (i + j) < textSize; j++) {
            const c = plaintext[i + j];
            const numericValue = charToNumericValue(c);
            if (numericValue >= 0) {
                block.push(numericValue);
            }
        }

        // Pad with 0's if the block size is less than the key size
        while (block.length < keySize) {
            block.push(0);
        }

        // Perform the encryption for this block
        for (let j = 0; j < keySize; j++) {
            let sum = 0;
            for (let k = 0; k < keySize; k++) {
                sum += keyMatrix[j][k] * block[k];
            }
            ciphertext += String.fromCharCode(((sum % 26) + 'a'.charCodeAt(0)));
        }
    }
    return ciphertext;
}

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// Function to input key matrix values
function inputKeyMatrix(keyword) {
    return new Promise((resolve) => {
        const keyMatrix = [];

        // Initialize keyMatrix with empty arrays
        for (let i = 0; i < keySize; i++) {
            keyMatrix.push([]);
        }

        // Generate numeric values from the keyword
        const keywordValues = keyword.split('').map(charToNumericValue);

        // Fill the keyMatrix using the keyword values
        let keywordIndex = 0;
        for (let i = 0; i < keySize; i++) {
            for (let j = 0; j < keySize; j++) {
                keyMatrix[i][j] = keywordValues[keywordIndex % keywordValues.length];
                keywordIndex++;
            }
        }

        resolve(keyMatrix);
    });
}

// Input the keyword from the user
/*rl.question('Enter the keyword: ', (keyword) => {
    // Input the key matrix values from the keyword
    inputKeyMatrix(keyword)
        .then((keyMatrix) => {
            // Input plaintext from the user
            rl.question('Enter the plaintext: ', () => {
                // Encrypt the plaintext using the key matrix
                const ciphertext = hillCipherEncrypt(plaintext, keyMatrix);
                console.log('Plaintext: ' + plaintext);
                console.log('Ciphertext: ' + ciphertext);
                rl.close();
            });
        });
});*/

document.getElementById("cipherForm2").addEventListener("submit", function (event) {
    event.preventDefault();

    const plaintext = document.getElementById("pt2").value;
    const keyword = document.getElementById("k2").value;
    console.log(plaintext, keyword)
    var ciphertext = ""
    inputKeyMatrix(keyword).then((keyMatrix) => {
        ciphertext = hillCipherEncrypt(plaintext, keyMatrix);
        document.getElementById("outputDiv2").innerText = "Cipher text: " + ciphertext;

    });
    //console.log("values");
    //console.log("Plain text: " + key);

});