# Obiekty &ndash; zadania

> Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

#### Zadanie 1 (~ 5min - 7min)
Stwórz obiekt book. Dopisz do niego następujące właściwości:
1. title,
2. author,
3. numberOfPages

Wypisz te właściwości w konsoli.


#### Zadanie 2 (~ 5min - 7min)
Stwórz obiekt person. Dopisz do niego następujące właściwości i metodę:
1. name,
2. age,
3. sayHello - wypisującą string ```hello```

Wypisz właściwości w konsoli, wywołaj metodę.

#### Zadanie 3 (~ 10min - 15 min)
Stwórz obiekt car, utwórz dla niego odpowiednie właściwości i metody.
###### Właściwości:
1. brand,
2. color,
3. numberOfKilometers (na początku **0**).

###### Metody:
1. ```printCarinfo()``` &ndash; metoda powinna zwracać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
2. ```drive(km)``` &ndash; która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

#### Zadanie 3  (~ 10min - 15 min)
Do obiektu car z zadania poprzedniego dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy). Dodaj tą nową właściwość poza ciałem obiektu.
Dodaj też następujące metody:
 1. metodę dodającą wpis do tej tablicy,
 2. metodę zwracającą wszystkie przeglądy samochodu.

Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

#### Zadanie 4
Stwórz obiekt bird. Utwórz dla niego właściwości:
1. type
2. name

oraz metodę:
1. ```getType()```, która zwróci jakiego rodzaju jest ptak.

Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

#### Zadanie 5
W pliku **zadanie03.js** możesz znaleźć przykładowy konstruktor dla robota. Konstruktor oczekuje, że podasz tylko imię robota.
Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy).
Utwórz kilka robotów i poszukaj, czy w napisanym kodzie nie ma błędów.

#### Zadanie 4
Stwórz konstruktor dla obiektów ```Rectangle```, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury.
Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
  1. ```getArea()``` &ndash; metoda ma zwracać pole powierzchni,
  2. ```getPerimiter()``` &ndash; metoda ma zwracać obwód.

Następnie stwórz kilka obiektów i zobacz, czy metody działają tak jak powinny.

#### Zadanie 5
Stwórz konstruktor dla obiektów ```Calculator```. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji.
Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
  1. ```add(num1, num2)``` &ndash; metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  2. ```multiply(num1, num2)``` &ndash; metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  3. ```subtract(num1, num2)``` &ndash; metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  4. ```divide(num1, num2)``` &ndash; metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  5. ```printOperations()``` &ndash; metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
  6. ```clearoperations()``` &ndash; metoda ma wyczyścić wszystkie operacje z pamięci.

**Pamiętaj o używaniu ```this```**.
