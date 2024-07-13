/*
    Problème : Compter tous les sous-ensembles de caractères qui sont des anagrammes.
    Exemple : "cbaebabacd" et "abc" → 2 (sous-ensembles "cba" et "bac")

    cette fonction va donc trouver tout les sous-chaine qui comporte les mêmes char que la str à chercher dans la str donnée.
    On doit donc, parcourir la chaine de base avec i.
    On va comparer chaque i de la str pour voir si elle est dans le tableau à chercher.
    Si le str[i] est dans le tableau === l'index[0] de la chaine à trouver, on appel une fn qui va vérifier que autres char apres pour voir si ils sont aussi dans la str.


*/

//functon qui va vérifier si les x chars apres l'index recu sont aussi dans le str.
//Retourne 1 si les chars sont bien dans la str2 sinon retourne 0.
function checkOthersIndex(str1, str2, index){
    let j = 1;
    index += 1;

    while(j < str2.length){
        if(str2.includes(str1[index])){
            j++;
        }else{
            return 0;
        }
    }
    return 1;
}

function countAnagrams(str1, str2){
    let i = 0;
    let j = 0;
    let nbAnagrm = 0;

    while(i <= str1.length){
        if(str2.includes(str1[i])){
            nbAnagrm += checkOthersIndex(str1, str2, i);
            i += str2.length;
        }else{
            i++;
        }
    }
    return(nbAnagrm);
};


// let s1 = "cbaebabacd", p1 = "abc";
// let s2 = "abab", p2 = "ab";
// let s3 = "a", p3 = "a";
// let s4 = "abc", p4 = "d";
// let s5 = "aaaaaaaaaa", p5 = "aaa";
// let s6 = "xyxxyyxyxy", p6 = "xy";
// let s7 = "abcabcabc", p7 = "bca";
// let s8 = "anagram", p8 = "nag";
// let s9 = "", p9 = "abc";
// let s10 = "abcdefg", p10 = "hij";

// console.log(`s1 --> ${s1} && p1 --> ${p1} --> countAnagrams --> ${countAnagrams(s1, p1)}`);
// console.log(`s2 --> ${s2} && p1 --> ${p2} --> countAnagrams --> ${countAnagrams(s2, p2)}`);
// console.log(`s3 --> ${s3} && p1 --> ${p3} --> countAnagrams --> ${countAnagrams(s3, p3)}`);
// console.log(`s4 --> ${s4} && p1 --> ${p4} --> countAnagrams --> ${countAnagrams(s4, p4)}`);
// console.log(`s5 --> ${s5} && p1 --> ${p5} --> countAnagrams --> ${countAnagrams(s5, p5)}`);
// console.log(`s6 --> ${s6} && p1 --> ${p6} --> countAnagrams --> ${countAnagrams(s6, p6)}`);
// console.log(`s7 --> ${s7} && p1 --> ${p7} --> countAnagrams --> ${countAnagrams(s7, p7)}`);
// console.log(`s1 --> ${s8} && p1 --> ${p8} --> countAnagrams --> ${countAnagrams(s8, p8)}`);
// console.log(`s1 --> ${s9} && p1 --> ${p9} --> countAnagrams --> ${countAnagrams(s9, p9)}`);
// console.log(`s1 --> ${s10} && p1 --> ${p10} --> countAnagrams --> ${countAnagrams(s10, p10)}`);
