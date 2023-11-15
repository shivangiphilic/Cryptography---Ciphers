#include <bits/stdc++.h>
using namespace std;
string cipher(char str[], int key)
{
    int len = strlen(str);
    char temp;
    for (int i = 0; i < len; i++)
        {
            if (str[i] >= 'a' && str[i] <= 'z')
            {
                temp = str[i] + key;
                if (temp > 'z')
                    temp -= 26;
                str[i] = temp;
            }
            else if (str[i] >= 'A' && str[i] <= 'Z')
            {
                temp = str[i] + key;
                if (temp > 'Z')
                    temp -= 26;
                str[i] = temp;
            }
        }
        return str;
}
int main()
{
    char str[30];
    int key;
	cout << "Plaintext: ";
	gets(str);
	cout << "Key: ";
    cin >> key;
	cout << "Plain text: " << str << "\n";
	cipher(str, key);
	cout << "Cipher text: " << str << "\n";
    return 0;
}
