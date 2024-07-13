/*
    Problème : Inverser les caractères d'une chaîne.
    Exemple : "hello" → "olleh"

*/

function reverserStringWhitNewTab(str){
    let len = str.length - 1;
    let newStr = "";

    for(let len = str.length - 1; len >= 0; len--){
        newStr += str[len];
    }

    return(newStr);
};

// let str1 = "bonjour";
// let str2 = " ok mec";
// let str3 = "a b cdef g h i     l";
// console.log(`str1 -> ${str1} && reverserStringWhitNewtab --> ${reverserStringWhitNewTab(str1)}`);
// console.log(`str1 -> ${str2} && reverserStringWhitNewtab --> ${reverserStringWhitNewTab(str2)}`);
// console.log(`str1 -> ${str3} && reverserStringWhitNewtab --> ${reverserStringWhitNewTab(str3)}`);