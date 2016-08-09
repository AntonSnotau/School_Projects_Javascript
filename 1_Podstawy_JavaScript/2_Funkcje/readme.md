# JavaScript &ndash; zadania
# Wprowadzenie do tworzenia funkcji

Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.


## Zadanie 1
Napisz funkcję miksującą o nazwie ```miksowanie```, która jako argument będzie przyjmowała napis.
Zadaniem funkcji jest zwrócenie tego napisu, ale poprzedzonego słowem ```zmiksowana ```. Funkcja ma zwracać nowo powstały napis (poprzez ```return```).
Następnie wypisz w konsoli to, co zwróciła funkcja.

Przykład:
```
input -> "marchewka"
output -> "zmiksowana marchewka"
```

## Zadanie 2
Napisz funkcję, która przyjmuje jako argumenty dwie liczby i zwraca (poprzez ```return```) większą z nich.

Przykład:
```
input -> 5, 29
output -> 29
```

## Zadanie 3
Stwórz funkcję, która będzie zwracała (poprzez ```return```) sumę trzech liczb. Liczby powinny być przekazane do funkcji jako argumenty.

Przykład:
```
input -> 1,2,3
output -> 6
```

## Zadanie 4
Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest wypisanie dziesięć razy: "Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych".

## Zadanie 5
Napisz funkcję ```rentCost(days)```, która będzie pobierać liczbę dni jako argument, a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
* wynajem trwa jeden dzień, koszt pokoju 200 zł/dzień,
* wynajem trwa od dwóch do trzech dni, koszt pokoju 180 zł/dzień,
* wynajem trwa od czterech do siedmiu dni, koszt pokoju 160 zł/dzień,
* wynajem trwa osiem lub więcej dni, koszt pokoju 150 zł/dzień.

Dodatkowo za każdy pełny tydzień przysługuje 50 zł zniżki. Do wyliczenia pełnych tygodni użyj poniższego kodu:

```JavaScript
var numbersOfWeeks = Math.floor(days / 7); //Math.floor jest metodą, która zaokrągla liczbę w dół.
```

Przykład:
```
input -> 8
output -> 1150
```

## Zadanie 6
Napisz funkcję ```rockPaperScissors(player1, player2)```, która będzie pobierać dwa napisy i na ich podstawie zwracać informacje, kto wygrał. Poprawne napisy przyjmowane przez funkcję to: papier, nozyce, kamien.

Funkcja ma zwracać jeden z czterech napisów:
* "Gracz 1 wygrał",
* "Gracz 2 wygrał",
* "Remis",
* "Błędne informacje".

Przykład:
```
input -> "papier", "nozyce"
output -> "Gracz 2 wygrał"
```

## Zadanie 7
Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty:
* kwotę do zapłaty,
* opis słowny obsługi.
Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany &ndash; funkcja powinna zwracać napis "Opis nieczytelny".

Opis może przyjmować następujące wartości:
"Bardzo dobra obsluga" => 25% napiwku,
"Dobra obsluga" => 20% napiwku,
"Srednia obsluga" =>15% napiwku,
"Zla obsluga" => 0% napiwku.

Przykład:
```
input -> 100, "Bardzo dobra obsluga"
output -> 25
```
