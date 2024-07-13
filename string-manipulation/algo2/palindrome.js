/*
    Problème : Vérifier si une chaîne est la même lorsqu'elle est inversée.
    Exemple : "racecar" est un palindrome.

    Je peux faire une boucle qui va check les index es extrémités jusqu'au mid et je les compare.
    Si c'est === à chaque fois, on continue la boucle, sinon on return false.
*/

function isSimplePalindrome(str){
        let j = str.length - 1;

        for(let i = 0; i < Math.floor(j/2); i++){
            if(str[i] !== str[j]){
                return -1;
            }
            j--;
        }
        return(str);
}


// Examples to test
console.log(isSimplePalindrome("madam")); // true
console.log(isSimplePalindrome("A man, a plan, a canal, Panama")); // true
console.log(isSimplePalindrome("12321")); // true
console.log(isSimplePalindrome("racecar12321racecar")); // true
console.log(isSimplePalindrome("hello")); // false
