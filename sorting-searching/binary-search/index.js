/*
    L'algorithme de recherche binaire est une méthode efficace pour trouver un élément 
    spécifique dans une liste triée de nombres ou d'autres valeurs ordonnées. 
    Il fonctionne en divisant continuellement l'intervalle de recherche par deux.

    Fonctionnement de l'algo : 
        1.Précondition:
            La liste doit être trié de façon croissante.(ou décroissantr mais cela nécéssite une adaptation du code).
        2.Initialisation:
            Définir deux poiteur. Left(début de la list) et rigth(fin de la liste).
        3.Boucle de recherche:
            Tant que left est inférieure ou égale à rigth:
                Calculer le milieu : 
                    mid = left + (rigth - left) // 2
                Comparer l'élément du milieu : 
                    Si l'élément au milieu (arr[mid]) est égale à l'élément rechercher, cela veut dire que l'élément est trouvé et peux
                    retourner 'mid'.
                    Si l'élément au milieu (arr[mid]) est supérieure à l'élément rechercher, cela veut dire que l'élément se trouve dans
                    la moitié gauche de la liste. Mettre à jour 'rigth' à 'mid - 1'.
                    Si l'élément au milieu (arr[mid]) est supérieure à l'élément recherche, cela veut dire que l'élément se trouve dans
                    la moitié droite de la liste. Mettre à jour 'left' à 'mid + 1'.
                Élément non trouvé, cela veut dire qu'il ne se trouve pas dans la liste.
*/

function binarySearch(listNb, nb){
    let left = 0;
    let rigth = listNb.length - 1;
    let mid = 0;

    while(left <= rigth){
        mid = Math.floor(left + (rigth - left) / 2);
        if(listNb[mid] === nb){
            return(mid);//retourne le nb trouvé dans la liste.
        }else if(listNb[mid] < nb){
            //rechercher dans la moitié droite.
            left = mid + 1;
        }else{
            //rechercher dans la moitié gauche.
            rigth = mid - 1;
        }
    }
    //return -1 car le nb n'est pas présent dans la liste.
    return -1;
};

// Exemple d'utilisation
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Élément trouvé à l'index ${result}`);
} else {
    console.log("Élément non trouvé");
}