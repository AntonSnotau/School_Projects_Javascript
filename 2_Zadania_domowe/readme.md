# JavaScript - zadania domowe
> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
BARDZO WAŻNE - Wasze zadania są sprawdzanie przy pomocy automatycznego systemu. Żeby odpowiedzi zostały uznane za poprawne strony MUSZĄ wyświetlać te same komunikaty co w treści zadania, a funkcjie i metody MUSZĄ posiadać nazwy dokładnie takie same jak podane
w zadaniu.

> Zadania z dopiskiem "dodatkowe" są dla chętnych. Znajdziesz je na końcu.

### Dzień 1 - Podstawy JavaScript
> Zadania 1-3 wykonuj w pliku app.js

#### Zadanie 1
Napisz funkcję ```getNumber```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać wartość true lub false, w zależności od tego czy podana liczba znajduje się w tablicy czy nie.

```JavaScript
getNumber(2, [33, 54, 2, 1, 4, 100]) => true
getNumber(5, [33, 54, 2, 1, 4, 100] ) => false
```

#### Zadanie 2
Napisz funkcję ```createIdentityMatrix```, która przyjmuje dwa argumenty w postaci dwóch liczb całkowitych ```rows``` i ```columns```. Niech funkcja **zwraca** tablicę 2-wymiarową. Niech tablica wygląda w następujący sposób:

```JavaScript
createIdentityMatrix(4,4) =>
[ [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1] ];
 ```
Jest to tak zwana macierz jednostkowa, czyli taka, która ma na przekątnej jedynki. Musisz użyć pętli zagnieżdżonych. Pamiętaj o tym, że tablica ta ma zostać zwrócona przez funkcję inaczej zadanie będzie nie zaliczone.

#### Zadanie 3
Za pomocą kontruktora stwórz funkcję ```Tree```. Niech funkcja ta ma jedną właściwość ```type```, która będzie przechowywać typ drzewa.
Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.

Dopisz do konstruktora również metodę ```bloom()```, która będzie zwracała tekst "I'm blooming". Sprawdź za pomocą metody ```hasOwnProperty()```, czy metoda ta została stworzona dla każdej instancji osobno? Jeśli tak zoptymalizuj kod dodając ją do prototypu funkcji ```Tree```.


### Dzień 2 - DOM
> Zadanie 1 wykonaj w pliku searchDom.js

#### Zadanie 1

Plik HTML do tego zadania to plik **searchDom.html**, a plik js to **searchDom.js**.

 - Nie używaj eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.
 - Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.

 * **1. Pobranie informacji z atrybutu data:**
    - znajdź element o **id** ```menu```,
    - stwórz funkcję ```getDataInfo(element)``` do której przekaż , jako argument , znaleziony element,
    - stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data każdego elementu **li**. Zauważ, że
    elementy **li** to dzieci elementu o id ```menu```.
    - zwróć tą tablicę.

* **2. Szukanie elementu po id:**
    - Znajdź element o **id** ```main-contener```.
    - stwórz funkcję ```getElementClass(element)``` do której przekaż , jako argument , znaleziony element.
    - zwróć tablicę złożoną z nazw klas tego elementu.

* **3. Szukanie elementu po klasie:**
    - Znajdź element o **klasie** ```pink-color```.
    - stwórz funkcję ```getElementText(element)``` do której przekaż , jako argument , znaleziony element.
    - zwróć z funkcji tekst, znajdujący się w tym elemencie

* **4. Szukanie elementu po klasie:**
    - Znajdź elementy o **klasie** ```images```.
    - stwórz funkcję ```getElementAlt(element)``` do której przekaż , jako argument , znalezione elementy.
    - stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków. Pobierz te atrybuty z przekazanych jako argument elementów.

* **5. Szukanie elementu po klasie:**
    - Znajdź elementy o **klasie** ```my-link```.
    - stwórz funkcję ```getElementHref(element)``` do której przekaż , jako argument , znalezione elementy.
    - stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków. Pobierz te atrybuty z przekazanych jako argument elementów.



### Dzień 3 - DOM

> Zadanie 1 wykonaj w pliku pizza.js

#### Zadanie 1

Plik HTML do tego zadania to plik **pizza.html**, a plik js to **pizza.js**.

Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami, w którym użytkownik może wybrać sobie dodatki.
Cena każdego z dodatków jest trzymana w atrybucie ```data-price```.
Napisz takie eventy, żeby po zaznaczeniu checkoxa wyświetlała się poprawna kwota zamówienia oraz po wysłaniu formularza
wewnątrz elementu ```page-info``` wyświetliła się następująca informacja: **"Do zapłaty: [odpowiednia kwota]"**, gdzie [odpowiednia kwota] to wartość zamówienia. Pamiętaj o tym, że kliknięcie w przycisk wywołuje domyślną akcję przeładowania strony. Zablokuj tą akcję, aby móc zobaczyć wpisaną informację do elmentu ```page-info```.

Zwróć uwagę na dwa specjalne checkboksy:
* Wyczyść &ndash; powinien odznaczyć wszystkie inne opcje,
* Wszystkie dodatki &ndash; powinien zaznaczyć wszystkie inne opcje (poza none).

-------------------------------------------------------------------------------

### Dodatkowe

> Wszystkie zadania dodatkowe wykonaj w pliku app.js

#### Zadanie 1 - dodatkowe
Napisz funkcję ```addTheSameNumbers```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać sumę
wszystkich elementów tablicy, które są równe liczbie podanej jako pierwszmy argument funkcji. Jeżeli liczby, podanej jako pierwszy argument funkcji nie ma w tablicy, zwróć null.

```JavaScript
addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => 14
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ) => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ) => null
```

#### Zadanie 2 - dodatkowe
Napisz funkcję ```factors```, która ma przyjmować tylko jeden argument &ndash; liczbę, która musi być większa od **0**. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa **0**, to funkcja ma zwracać pustą tablicę.

```JavaScript
factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
```

#### Zadanie 3 - dodatkowe
Napisz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą rosnące liczby całkowite. Funkcja ta ma zwracać pierwszą brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden). Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]) => -1
```

#### Zadanie 4 - dodatkowe
Napisz funkcję ```getLastNumbers```, która ma przyjmować dwa argumenty &ndash; liczbę i tablicę. Funkcja ta ma zwracać tablicę skadającą się z tylu ostatnich elementów ile wskazuje pierwszy argument - liczba. Jeżeli nie ma pierwszego argumentu lub nie jest on liczbą, funkcja ma zwracać pustą tablicę.

```JavaScript
getLastNumbers(2, [1,2,3,4,5,6,7]) => [6, 7]
getLastNumbers(4, [6,7,8,10,11,12,13,14,15]) => [12, 13, 14, 15]
getLastNumbers([-4,-3,-2,0,1,2,3,4]) => []
getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]) => []
```
