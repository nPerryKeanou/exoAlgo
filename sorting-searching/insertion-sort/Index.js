/*
    INSERT SORT :
        Initialisation : Considérez le premier élément du tableau comme étant déjà trié. Le reste du tableau est non trié.
Insertion :
Prenez le premier élément non trié (l'élément suivant).
Comparez cet élément avec les éléments de la partie triée, en commençant par la fin de la partie triée.
Déplacez les éléments de la partie triée qui sont plus grands que l'élément en cours vers la droite.
Insérez l'élément en cours à la position correcte.
Répétition : Répétez le processus pour chaque élément non trié jusqu'à ce que tout le tableau soit trié.
Exemple Étape par Étape
Prenons un tableau [5, 2, 9, 1, 5, 6] et voyons comment le tri par insertion fonctionne.

Tableau Initial
csharp
Copier le code
[5, 2, 9, 1, 5, 6]
1. Premier Élément (5) : Considéré comme trié
csharp
Copier le code
[5 | 2, 9, 1, 5, 6]
La barre | sépare la partie triée (à gauche) de la partie non triée (à droite).

2. Deuxième Élément (2) : Inséré dans la partie triée
Comparez 2 avec 5 : 2 est plus petit, déplacez 5 à droite.
Insérez 2 à la position correcte.
csharp
Copier le code
[2, 5 | 9, 1, 5, 6]
3. Troisième Élément (9) : Inséré dans la partie triée
Comparez 9 avec 5 : 9 est plus grand, pas de déplacement.
csharp
Copier le code
[2, 5, 9 | 1, 5, 6]
4. Quatrième Élément (1) : Inséré dans la partie triée
Comparez 1 avec 9 : 1 est plus petit, déplacez 9 à droite.
Comparez 1 avec 5 : 1 est plus petit, déplacez 5 à droite.
Comparez 1 avec 2 : 1 est plus petit, déplacez 2 à droite.
Insérez 1 à la position correcte.
csharp
Copier le code
[1, 2, 5, 9 | 5, 6]
5. Cinquième Élément (5) : Inséré dans la partie triée
Comparez 5 avec 9 : 5 est plus petit, déplacez 9 à droite.
Comparez 5 avec 5 : pas de déplacement nécessaire.
csharp
Copier le code
[1, 2, 5, 5, 9 | 6]
6. Sixième Élément (6) : Inséré dans la partie triée
Comparez 6 avec 9 : 6 est plus petit, déplacez 9 à droite.
Comparez 6 avec 5 : 6 est plus grand, pas de déplacement nécessaire.
csharp
Copier le code
[1, 2, 5, 5, 6, 9]
Résumé des Étapes
Commencez avec le deuxième élément et considérez-le comme l'élément à insérer.
Comparez cet élément avec les éléments de la partie triée (à gauche).
Déplacez les éléments plus grands vers la droite.
Insérez l'élément à sa position correcte.
Répétez jusqu'à ce que tous les éléments soient triés.
Points Clés
Complexité : La complexité temporelle du pire cas est 
�
(
�
2
)
O(n 
2
 ), ce qui le rend inefficace pour les grandes listes.
Avantages : Simple à implémenter, efficace pour les petites listes ou les listes presque triées.
Stabilité : Le tri par insertion est un algorithme stable, ce qui signifie qu'il conserve l'ordre relatif des éléments égaux.

Donc le but ici est de toujours comparer l'index sur les éléments qui sont à sa gauche.
Donc il faut boucler tant que qu'il n'y a plus de swap.
Puis il faut boucler tant que index est plus petit que chaques élémens qui sont a sa gauche.
il faut peut etre boucle tant que index est plus grand que que index 0.


*/

function insertSortAscending(listNb){
    
    let i = 0;
    let j = 1;
    let tmp = 0;
    let k = 0;

    while(i < listNb.length){
        j = i;
        while(j > 0){
            if((j - 1) > 0 && listNb[j] < listNb[j - 1]){
                tmp = listNb[j];
                listNb[j] = listNb[j - 1];
                listNb[j - 1] = tmp;
            }
            j--;
        }
        i++;
        if(j === 0 && i === listNb.length){
            k = j;
            while(listNb[k] > listNb[k + 1] && k + 1 <= listNb.length){
                tmp = listNb[k];
                listNb[k] = listNb[k + 1];
                listNb[k + 1] = tmp;
                k++;
            }
        }
    }

    
    return(listNb);
};



function insertSortDescending(listNb){
    let len = listNb.length;
    let i = len - 2;
    let j = len - 3;
    let k;
    let tmp;

    while(i >= 0){
        k = i;
        j = k;
        while(j < len - 1){
            if(listNb[j] < listNb[j + 1]){
                tmp = listNb[j];
                listNb[j] = listNb[j + 1];
                listNb[j + 1] = tmp;
            }
            j++;
        }
        i--;
        if(i === 0 && j === 0){
            k = len;
            while(listNb[k] > listNb[k - 1]){
                tmp = listNb[k];
                listNb[k] = listNb[k - 1];
                listNb[k - 1] = tmp;
                k--;
            }
        }
    }
    return(listNb);
};



// const list1 = [1,3,5,4,2];
// const list2 = [8, 5, 2, 1, 9];
// const list3 = [7, 6, 5, 4, 3, 2, 1, 0, 9, 8];
// const list4 = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const list5 = [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const list6 = [49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const list7 = [99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const list8 = [7, 7, 7, 7, 7, 7, 7];
// const list9 = [3.2, 1.5, 4.8, 2.9, 0.1, 5.5];
// const list10 = [];
// const list11 = [42];
// const list12 = [1001, 5000, 300, 20000, 1500, 9000];
// const list13 = [4, 5, 4, 3, 2, 4, 1, 4, 3, 2];
// const list14 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const list15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const list16 = [3, -1, -4, 2, 0, -3, 1];

// console.log(insertSortDescending(list1));
// console.log(insertSortDescending(list2));
// console.log(insertSortDescending(list3));
// console.log(insertSortDescending(list4));
// console.log(insertSortDescending(list5));
// console.log(insertSortDescending(list6));
// console.log(insertSortDescending(list7));
// console.log(insertSortDescending(list8));
// console.log(insertSortDescending(list9));
// console.log(insertSortDescending(list10));
// console.log(insertSortDescending(list11));
// console.log(insertSortDescending(list12));
// console.log(insertSortDescending(list13));
// console.log(insertSortDescending(list14));
// console.log(insertSortDescending(list15));
// console.log(insertSortDescending(list16));

// console.log(insertSortAscending(list1));
// console.log(insertSortAscending(list2));
// console.log(insertSortAscending(list3));
// console.log(insertSortAscending(list4));
// console.log(insertSortAscending(list5));
// console.log(insertSortAscending(list6));
// console.log(insertSortAscending(list7));
// console.log(insertSortAscending(list8));
// console.log(insertSortAscending(list9));
// console.log(insertSortAscending(list10));
// console.log(insertSortAscending(list11));
// console.log(insertSortAscending(list12));
// console.log(insertSortAscending(list13));
// console.log(insertSortAscending(list14));
// console.log(insertSortAscending(list15));
// console.log(insertSortAscending(list16));