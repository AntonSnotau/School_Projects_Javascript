# JavaScript - zadania domowe
> Wszystkie zadania rozwiązuj w funkcjach. Jeśli Twoje funkcje nie będą zwracały wartości nie będą zaliczone. Możesz wypisywać w konsoli informacje, ale nie myl tego ze zwracaniem wartości.

> Zadania z dopiskiem "dodatkowe" są dla chętnych. Znajdziesz je na końcu.



## Tablice

#### Zadanie 1
Napisz funkcję ```getNumber```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać wartość true lub false, w zależności od tego czy podana liczba znajduje się w tablicy czy nie.

```JavaScript
getNumber(2, [33, 54, 2, 1, 4, 100]) => true
getNumber(5, [33, 54, 2, 1, 4, 100] ) => false
```

#### Zadanie 2
Napisz funkcję ```addTheSameNumbers```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać sumę
wszystkich elementów tablicy, które są równe liczbie podanej jako pierwszmy argument funkcji. Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć null.

```JavaScript
addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => 14
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ) => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ) => null
```

#### Zadanie 3
Napisz funkcję ```factors```, która ma przyjmować tylko jeden argument &ndash; liczbę, która musi być większa od **0**. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa **0**, to funkcja ma zwracać pustą tablicę.

```JavaScript
factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
```

## Tablice wielowymiarowe
#### Zadanie 4
Napisz funkcję ```createIdentityMatrix```, która przyjmuje dwa argumenty w postaci dwóch liczb całkowitych ```rows``` i ```columns```. Niech funkcja **zwraca** tablicę 2-wymiarową. Niech tablica wygląda w następujący sposób:

```JavaScript
createIdentityMatrix(4,4) =>
[ [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1] ];
 ```
Jest to tak zwana macierz jednostkowa, czyli taka, która ma na przekątnej jedynki. Musisz użyć pętli zagnieżdżonych. Pamiętaj o tym, że tablica ta ma zostać zwrócona przez funkcję inaczej zadanie będzie nie zaliczone.




## Dodatkowe

#### Zadanie 4 - dodatkowe
Napisz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1
```

#### Zadanie 5 - dodatkowe
Napisz funkcję ```getLastNumbers```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać tablicę skadającą się z tylu ostatnich elementów ile wskazuje pierwszy argument - liczba. Jeżeli nie ma pierwszego argumentu lub nie jest on liczbą, funkcja ma zwracać pustą tablicę.

```JavaScript
getLastNumbers(2, [1,2,3,4,5,6,7]) => [6, 7]
getLastNumbers(4, [6,7,8,10,11,12,13,14,15]) => [12, 13, 14, 15]
getLastNumbers([-4,-3,-2,0,1,2,3,4]) => []
getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]) => []
```

#### Zadanie 6 - dodatkowe
Napisz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1
```

#### Zadanie 7  - dodatkowe
Napisz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1
```
