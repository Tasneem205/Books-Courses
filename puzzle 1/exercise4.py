"""
Write a program that performs simple run-length encoding,
which converts a given string, for example, BWWWWWBWWWW, to the
shorter 1B5W1B4W, and run-length decoding, which converts the compressed
string back to the original. You should be able to compress and decompress
in one pass through the string.
The str function converts a number into a string, for example, str(12) = '12'. It
will be useful in the encoding step.
The int function converts a string into a number, for example, int('12') = 12.
For any string s, s[i].isalpha() returns True if the character s[i] is an alphabet
character, and False otherwise. s.isalpha() returns True if all the characters in s
are alphabet characters. The functions int and isalpha will be useful in the
decoding step.
"""

def lengthEncoding(strToEncode):
    ans = ""
    start = 1
    for i in range(1, len(strToEncode)):
        if strToEncode[i] != strToEncode[i-1]:
            ans += str(start) + strToEncode[i-1]
            start = 1
        else:
            start += 1
    if start != 0:
        ans += str(start) + strToEncode[i-1]
    return ans

def lengthDecoding(code):
    num = ""
    ans = ""
    for i in code:
        if (i.isalpha()):
            for _ in range(0, int(num)):
                ans += i
            num = ""
        else:
            num += i
    return ans



if __name__ == "__main__":
    print(lengthEncoding("BWWWWWBWWWW"))
    print(lengthDecoding("1B5W1B4W"))