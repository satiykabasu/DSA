/*
in the realm of his quandary, deepank wields a string S, composed of lowercase letters from the english alphabets . this strjng bears a length of N . deepank's aspiration involvs a metamorphosis of S into an exquisite string , which shall be christened as T .to actualize this, deepank enlists the following procedure to be executed upon each character within the string:

should be the chracter be a constant , it shall undergo substitution with its nearest vowel. 
if the character is already vowel then it shall remains unaltered.
in full cognizance of the visibility within the resulting string T, deepank is immersed in contemplation. hos contemplation revolves around the tally of distinct instance of these beautiful sttings T that can be engendered throughthe applicayion of the aforementioned operation upon the string S.
given the potentially substantial scale of the answer . it is renderes in its output after being subjected to the module operation with the value 10^9+7

note:
there are 26 charaters in english alphabet. five of them are vowel i.e, a,e,i,o,u
and remaining is consonants 
the closest vowel to the consonant is the vowel that is least distant fro. that consonant . for example, the distance between characters d and e is 1 . while the distance between the charachter d and a is 3.
the distance between characters a and z is 25 not 1.

your task:
you did not need to read input or print anything . complete the function vowelAnxDeepank() which takes string as parameter and returns the total number if distinct beautiful strings T that can be obtained by performinh the givrn operation on the string S, modulo 10^9+7

example 1:
input
5
aeiou


output 
1

explanation

the string S exclusively comprises vowel characters, thereforeno characters within the string will undergo alternation. consequentely the resulting string T will retains its origianal from.




example 2:
input
5
abcde


output 
2

explanation

the provided operations can yield two distinct string through manipulation of string S.
these resulting string are "aaaee" and "aaeee"
*/