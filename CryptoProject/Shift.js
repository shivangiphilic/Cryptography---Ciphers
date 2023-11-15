function cipher(str, key) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let temp = str[i];
        if (temp >= 'a' && temp <= 'z') {
            temp = String.fromCharCode(((temp.charCodeAt(0) - 'a'.charCodeAt(0) + key) % 26 + 26) % 26 + 'a'.charCodeAt(0));
        } else if (temp >= 'A' && temp <= 'Z') {
            temp = String.fromCharCode(((temp.charCodeAt(0) - 'A'.charCodeAt(0) + key) % 26 + 26) % 26 + 'A'.charCodeAt(0));
        }
        result += temp;
    }
    return result;
}

document.getElementById("cipherForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const plaintext = document.getElementById("pt").value;
    const key = parseInt(document.getElementById("k").value);

    if (!isNaN(key)) {
        console.log("Plain text: " + plaintext);
        const encryptedText = cipher(plaintext, key);
        document.getElementById("outputDiv").innerHTML = "Cipher text: " + encryptedText;
    } else {
        alert("Please enter a valid key (a number).");
    }
});