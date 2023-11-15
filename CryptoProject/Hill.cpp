#include <iostream>
#include <vector>
#include <string>

// Function to convert a character to its corresponding numeric value
int charToNumericValue(char c) {
    if (isalpha(c)) {
        return tolower(c) - 'a';
    }
    // Handle non-alphabet characters if needed
    return -1; // Invalid character
}

// Function to encrypt a plaintext using a Hill cipher
std::string hillCipherEncrypt(const std::string& plaintext, const std::vector<std::vector<int>>& keyMatrix) {
    std::string ciphertext = "";
    int keySize = keyMatrix.size();
    int textSize = plaintext.size();
    
    for (int i = 0; i < textSize; i += keySize) {
        // Initialize a vector to store a block of characters
        std::vector<int> block;
        for (int j = 0; j < keySize && (i + j) < textSize; j++) {
            char c = plaintext[i + j];
            int numericValue = charToNumericValue(c);
            if (numericValue >= 0) {
                block.push_back(numericValue);
            }
        }
        
        // Pad with 0's if the block size is less than the key size
        while (block.size() < keySize) {
            block.push_back(0);
        }
        
        // Perform the encryption for this block
        for (int j = 0; j < keySize; j++) {
            int sum = 0;
            for (int k = 0; k < keySize; k++) {
                sum += keyMatrix[j][k] * block[k];
            }
            ciphertext += (sum % 26 + 'a');
        }
    }
    
    return ciphertext;
}

int main() {
    // Input the key matrix size from the user
    int keySize = 2;
    //std::cout << "Enter the size of the key matrix (square matrix): ";
    //std::cin >> keySize;
    
    // Input the key matrix values from the user
    std::vector<std::vector<int>> keyMatrix(keySize, std::vector<int>(keySize));
    std::cout << "Enter the key matrix values (row by row):" << std::endl;
    for (int i = 0; i < keySize; i++) {
        for (int j = 0; j < keySize; j++) {
            char c;
            std::cin >> c;
            keyMatrix[i][j] = charToNumericValue(c);
        }
    }
    
    // Input plaintext from the user
    std::string plaintext;
    std::cout << "Enter the plaintext: ";
    std::cin >> plaintext;
    
    // Encrypt the plaintext using the key matrix
    std::string ciphertext = hillCipherEncrypt(plaintext, keyMatrix);
    
    std::cout << "Plaintext: " << plaintext << std::endl;
    std::cout << "Ciphertext: " << ciphertext << std::endl;
    
    return 0;
}