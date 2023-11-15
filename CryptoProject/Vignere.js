function vigenereEncrypt(plaintext, key) {
    let ciphertext = '';
    const keyLength = key.length;
    for (let i = 0; i < plaintext.length; i++) {
        const plainChar = plaintext[i];
        const keyChar = key[i % keyLength];
        let cipherChar;

        if (/[a-zA-Z]/.test(plainChar)) {
            const shift = keyChar.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            const isUpperCase = plainChar === plainChar.toUpperCase();
            const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            cipherChar = String.fromCharCode(baseCharCode + (plainChar.charCodeAt(0) - baseCharCode + shift) % 26);
        } else {
            cipherChar = plainChar;
        }

        ciphertext += cipherChar;
    }
    return ciphertext;
}

document.getElementById("cipherForm3").addEventListener("submit", function (event) {
    event.preventDefault();

    const plaintext = document.getElementById("pt3").value;
    const keyword = parseInt(document.getElementById("k3").value);  
    let extendedKey = '';
        for (let i = 0; i < plaintext.length; i++) {
            extendedKey += keyword[i % keyword.length];
        }
        //console.log('Plaintext: ', plaintext);
        const ciphertext = vigenereEncrypt(plaintext, extendedKey);
        //console.log('Ciphertext: ', ciphertext);
        document.getElementById("outputDiv3").innerHTML = "Cipher text: " + ciphertext;
        rl.close();
});

