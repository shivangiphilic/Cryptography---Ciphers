#include <iostream>
#include <string>
using namespace std;

string vigenereEncrypt(string plaintext, string key) {
    string ciphertext;
    int keyLength = key.length();
    for (int i = 0; i < plaintext.length(); i++) {
        char plainChar = plaintext[i];
        char keyChar = key[i % keyLength];
        char cipherChar;

        if (isalpha(plainChar)) {
            int shift = keyChar - 'a';
            if (isupper(plainChar)) {
                cipherChar = 'A' + (plainChar - 'A' + shift) % 26;
            } else {
                cipherChar = 'a' + (plainChar - 'a' + shift) % 26;
            }
        } else {
            cipherChar = plainChar;
        }

        ciphertext += cipherChar;
    }
    return ciphertext;
}

int main() {
    string keyword, plaintext;
    cout << "Plaintext: ";
    cin >> plaintext;
    cout << "Key: ";
    cin >> keyword;
    string extendedKey;
    for (int i = 0; i < plaintext.length(); i++)
        extendedKey += keyword[i % keyword.length()];
    cout << "Plaintext: " << plaintext << endl;
    string ciphertext = vigenereEncrypt(plaintext, extendedKey);
    cout << "Ciphertext: " << ciphertext << endl;
    return 0;
}
