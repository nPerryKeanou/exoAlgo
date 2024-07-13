/*
    Problème : Trouver la longueur de la sous-chaîne la plus longue sans caractères répétés.
    Exemple : "abcabcbb" → "abc" (3 caractères)
`

*/

function longuestSubstringWhitoutReapatingChar(str, subStr){
    let j;
    let k;
    let tmp;
    let tmpStr = "";
    let returnStr = "";

    for(let i = 0; i <= str.length; i++)
    {   
        j = 0;
        //si il y a une occurence.
        if(str[i] == subStr[j]){
            k = i;
            while(str[k] == subStr[j] && j <= subStr.length){
                tmpStr += str[k];
                tmp++;
                k++;
                j++;
            }
            if(tmpStr.length > returnStr.length){
                returnStr = tmpStr;
            }        
        }
        i++;
    }
    return(returnStr.length);
};



// console.log(`test1 --> ${"abcdef"} && substr --> ${"abc"} === ${longuestSubstringWhitoutReapatingChar("abcdef", "abc")}`);
// console.log(`test2 --> ${"abcabcbb"} && substr --> ${"bcb"} === ${longuestSubstringWhitoutReapatingChar("abcabcbb", "bcb")}`);
// console.log(`test3 --> ${"bbbbbb"} && substr --> ${"b"} === ${longuestSubstringWhitoutReapatingChar("bbbbbb", "b")}`);
// console.log(`test4 --> ${"bbbbbb"} && substr --> ${"bb"} === ${longuestSubstringWhitoutReapatingChar("bbbbbb", "bb")}`);
// console.log(`test1 --> ${"123123456"} && substr --> ${"abc"} === ${longuestSubstringWhitoutReapatingChar("123123456", "abc")}`);
// console.log(`test1 --> ${"abc def ghi"} && substr --> ${"ab"} === ${longuestSubstringWhitoutReapatingChar("abc def ghi", "ab")}`);

