

// Exercice 1 Your Favorite Food


let petitDejeuner = "du lait accompagné du pain aux oeufs";
let Diner = "igname avec la soupe gouagouassou";

console.log(" Au reveille " +  petitDejeuner + " et pour le plat de resistance de l' " + Diner );

// Exercise 2 : Series

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

/**
Correcteur: Yannick GOUGUIA

ligne 20: On te demande de retourner le nombre et non de definir une valeur toi même, tu connais la methode qui permet de recuperer la longueur d'un tableau
*/
let myWatchedSeriesLength = 3;

console.log(" I watched " + myWatchedSeriesLength +" series: "  + myWatchedSeries);


// Partie II

myWatchedSeries.splice(2,2,"friends");
console.log(myWatchedSeries);

myWatchedSeries.push("avengers");
console.log(myWatchedSeries);

// delete myWatchedSeries[0]



myWatchedSeries.unshift(" invictus ");
console.log(myWatchedSeries);

const SeeMyWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

console.log(SeeMyWatchedSeries);

SeeMyWatchedSeries.shift();

console.log(SeeMyWatchedSeries);

const MyWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

console.log(MyWatchedSeries);
let item = MyWatchedSeries[1];
console.log(item);

///////////////////////////////////////

// Exercice 3 : Le Convertisseur De Température


let temperature = 25;
let températureFahrenheit = (25/5*9+32);
console.log(temperature + "°C is " + températureFahrenheit + "°F.");


///////////////////////////////////////////////////////

// Exercice 4 : Devinez Les Réponses #1


// 1.Quel sera le résultat de a + bdans la première expression ?

 //  Prediction : Cela fait 55 car 34 et 21 sont des nombres
 // Actual : 55

// 2.Quel sera le résultat de a + bdans la seconde expression ?

//  Prediction : Cela fait 23 car 2 et 21 sont des nombres
// Actual :23


// 3.Quelle est la valeur de c?
// Prediction : nom d'une variable
// Actual : pas de reponse


//  Prediction : varible declarer
// Actual : pas de reponse

// 4.Analysez le code ci-dessous, quel sera le résultat ?

// Prediction: normalement elle ne doit pas s'exécuter car aucune variable n'a été déclarée
// Actual : 75

//////////////////////////////////////////


// Exercice5  Devinez Les Réponses #2/

// 1.Quelle est la sortie de chacune des expressions ci-dessous ?

typeof(15)
// Prediction: on declare le type
// Actual: nomber

typeof(5.5)
// Prediction: on declare le type que c'est un nombre decimal
// Actual:nomber

typeof(NaN)
// Prediction: verification du typage
// Actual: number

typeof("hello")
// Prediction: ont declare le typage
// Actual: string

typeof(true)
// Prediction: verification
// Actual: boolean

typeof(1 != 2)
// Prediction:on declare une opperation pour une verification
// Actual: boolean

"hamburger" + "s"
// Prediction: afficher les element de la variable
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: afficher les element de la variable
// Actual: NaN

"1" + "3"
// Prediction: operation d'addiotion de concatenation avec deux chaines de caractere convertire
// Actual: 13

"1" - "3"
// Prediction: operation de soustractiion d'une concatenation avec deux chaines de caractere convertire
// Actual: 13
// Actual:-2

"johnny" + 5
// Prediction:incomprehensible
// Actual: johnny5

"johnny" - 5
// Prediction: incomprehensible
// Actual:NaN

99 * "hello"
// Prediction: incomprehensible
// Actual: NaN

1 != 1
// Prediction: deux nombres egaux doivent ne peuvent pas etre different
// Actual: false

1 == "1"
// Prediction: incomprenhensible
// Actual: true

1 === "1"
// Prediction: incomprehensible
// Actual: false

/////////////////////////////////////////////////

// Exercice 6 : Devinez Les Réponses #3


// 1. Quelle est la sortie de chacune des expressions ci-dessous ?

5 + "34"
// Prediction:  cela fait 534 un nombre 5 et une chaine de caracter "34"
// Actual: 534

5 - "4"
// Prediction: cela fait 1 car 5 etant un nombre et "4" une chaine de caractere convertire
// Actual: 1

10 % 5
// Prediction: 10 modulo 5 ne peut que donner le reste 
// Actual: 5

5 % 10
// Prediction: 5 modulo 10 ne peut que donner le reste 
// Actual: 10

"Java" + "Script"
// Prediction: aucune idée
// Actual: 'JavaScript'

" " + " "
// Prediction: deux chaines de caracteres additionées son  visible
// Actual:  ' '

" " + 0
// Prediction: une chaine de caracter " " addionnée à un nombre 0 donne 0 
// Actual: nombre ( 0 )

true + true
// Prediction: ils sont des booleans donc le resultat donne un nombre vrai
// Actual: 2

true + false
// Prediction:boolean addionner avec leur contrait 
// Actual: 1

false + true
// Prediction: boolean addionner avec leur contrait prendra 
// Actual: 1

false - true
// Prediction: incomprehensible
// Actual: -1

!true
// Prediction: incomprehensible
// Actual:false

3 - 4
// Prediction: 3 un nombre soustraire que 4 donne -1
// Actual: -1

"Bob" - "bill"
// Prediction: deux chaines de caracteres non convertir ne peuvent subire une opperation
// Actual:NaN
