/*
	Le tri à bulle.
	Cette algorithme trie un tableau de nombres dans l'ordre croissant en comparent des pairs d'index.

	On va devoir boucler sur le tableau,
	On va comparer l'inde avec le suivant et si il est pls grad, on les swap. Ainsi de suite,
	jusqu'à ce que xs

	Initialisation : Commencez par le début de la liste.

	Comparaison et Échange :

	Comparez le premier élément avec le deuxième élément.
	Si le premier élément est plus grand que le deuxième, échangez-les.
	Passez au deuxième et au troisième élément, comparez et échangez si nécessaire.
	Continuez ce processus pour chaque paire d'éléments adjacents jusqu'à la fin de la liste.
	Placement du Plus Grand Élement :

	À la fin du premier passage, le plus grand élément de la liste sera placé à la dernière position.
	Réduisez la taille effective de la liste à trier d'une unité, car le dernier élément est désormais trié.
	Répétition :

	Répétez le processus pour la partie non triée de la liste.
	Chaque passage à travers la liste place le prochain plus grand élément à sa position finale.
	Fin du Tri :

	Donc il y a une boucle principela. Et une secondes boucles pour va parcourir tout la liste.
	La boucles principale va tourner tant que la liste n'est pas trier.(on va avoir un boolr qui sera true tant qu'il y a une swap d'index).
	La secondes boucle va tourner tant que i+1 est plus petit que la taille du tableau.

	let i;
	let j;
	let tmp;
	let nbSwap;
	let boole = true;

	tant que boole est true;
		i = 0;
		j = i + 1;
		tmp = 0;
		nbSwap = 0;
		tant que j est plus petit que taille du tableau;
			si tab[i] est plus grand que tab[j];
				tmp = tab[i];
				tab[i] = tab[j];
				tab[j] = tmp;
				nbSwap += 1;
			i++;
		si nbSwap === 0;
			boole = false;

*/

function bubbleSortAscending(listNb){
	let i;
	let j;
	let tmp;
	let nbSwap;
	let boole = true;

	while(boole === true){
		i = 0;
		j = i + 1;
		tmp = 0;
		nbSwap = 0;
		while(j < listNb.length){
			j = i + 1;
			if(listNb[i] > listNb[j]){
				tmp = listNb[i];
				listNb[i] = listNb[j];
				listNb[j] = tmp;
				nbSwap += 1;
			}
			i++;
		}
		if(nbSwap == 0){
			boole = false;
		}

	}
	return(listNb);
};

function bubbleSortDescending(listNb){
	let i;
	let j;
	let tmp;
	let nbSwap;
	let boole = true;

	while(boole === true){
		i = 0;
		j = i + 1;
		tmp = 0;
		nbSwap = 0;
		while(j < listNb.length){
			j = i + 1;
			if(listNb[i] < listNb[j]){
				tmp = listNb[i];
				listNb[i] = listNb[j];
				listNb[j] = tmp;
				nbSwap += 1;
			}
			i++;
		}
		if(nbSwap == 0){
			boole = false;
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

// console.log(bubbleSortAscending(list1));
// console.log(bubbleSortAscending(list2));
// console.log(bubbleSortAscending(list3));
// console.log(bubbleSortAscending(list4));
// console.log(bubbleSortAscending(list5));
// console.log(bubbleSortAscending(list6));
// console.log(bubbleSortAscending(list7));
// console.log(bubbleSortAscending(list8));
// console.log(bubbleSortAscending(list9));
// console.log(bubbleSortAscending(list10));
// console.log(bubbleSortAscending(list11));
// console.log(bubbleSortAscending(list12));
// console.log(bubbleSortAscending(list13));
// console.log(bubbleSortAscending(list14));
// console.log(bubbleSortAscending(list15));
// console.log(bubbleSortAscending(list16));

// console.log(bubbleSortDescending(list1));
// console.log(bubbleSortDescending(list2));
// console.log(bubbleSortDescending(list3));
// console.log(bubbleSortDescending(list4));
// console.log(bubbleSortDescending(list5));
// console.log(bubbleSortDescending(list6));
// console.log(bubbleSortDescending(list7));
// console.log(bubbleSortDescending(list8));
// console.log(bubbleSortDescending(list9));
// console.log(bubbleSortDescending(list10));
// console.log(bubbleSortDescending(list11));
// console.log(bubbleSortDescending(list12));
// console.log(bubbleSortDescending(list13));
// console.log(bubbleSortDescending(list14));
// console.log(bubbleSortDescending(list15));
// console.log(bubbleSortDescending(list16));