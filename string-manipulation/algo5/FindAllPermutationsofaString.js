/*
    Problème : Trouver toutes les permutations possibles d'une chaîne donnée.
    Exemple : "abc" → ["abc", "acb", "bac", "bca", "cab", "cba"]



*/


function findAllPermutationStr(str){
    //Initialisation d'un tableau qui recevra toutes les permutations.
    let rslt = [];

    //Si la chaine vaut 1, il n'y a qu'un seul permutation possible, la sienne.
    //Cette condition de base permet de couper la récursion lorsqu'il ne reste qu'un seul caractère à permuter.
    if(str.length === 1){
        rslt.push(str);
        return rslt;
    }

    //parcours chaque élément de la chaine str en utilisant i.
    //firstchar est le caractère à l'index i de str. Il sera placé à la premiere position de la permutation.
    //charsleft est une nouvelle chaîne obtenue en enlevant 'firstchar' de 'str'.Elle est construite en prenant la sous-chaîne avant l'index i et 
    //      en concaténant la sous-chaîne après l'index 'i'.
    //On appel la fonction récursivement avec 'charsleft' pour obtenir tout les permutations des caractères restants.
    //Parcourt chaque permutation de innerPermutation, qui contient chaque permutation de caractère restant sans firstChar.
    //Pour chaque permutaton de innerPermutation[j], on ajoute firstChar au début et on stocke le rslt dans le tableau rslt.
    for(let i = 0; i < str.length; i++){
        let firstChar = str[i];
        let charsLeft = str.substring(0, i) + str.substring(i + 1);
        let innerPermutation = findAllPermutationStr(charsLeft);
        for(let j = 0; j < innerPermutation.length; j++){
            rslt.push(innerPermutation[j]);
        }
    }
    //une fois tout les permutations faite, on retourn le tab.
    return rslt;
};

