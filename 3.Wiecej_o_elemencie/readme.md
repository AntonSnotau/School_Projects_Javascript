# JacaScript - Cwiczenia DOM - Więcej o elemencie

Zadania z wpływania na element DOM.

Strona index.html jest podzielona na części do każdego zadania. 
Pamiętaj żeby elementy wyszukiwać tylko w dive dla danego zadania.
Cwiczenia powinny być rozwiązane w pliku app.js. 
Pamiętaj żeby oddzielać ćwiczenia komentarzami, i pisać czytelny i dobrze sformatowany kod. 

**NIE MODYFIKUJ KODU HTML**

## Cwiczenie 1
Na stronie są 3 obrazki z ikonami najpopularniejszych przeglądarek internetowych. NIestety zarówno obrazki jak i linki prowadzące do ich stron zawierają błędy.
Napisz kod JavaScript który:
1. Poprawi elementy tak żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą ```background-image```). 
1. Poprawi linki tak żeby każdy miał poprawny opis i atrybut href.
1. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).

Podejrzyj w konsoli jak wygląda kod CSS dopisany przez JavaScript. Zastanów się dlaczego dopisywany jest w tym miejscu. 
Napisz odpowiedź na to pytanie w komentarzu do zadania.


## Cwiczenie 2 
Na stronie jest lista w którem musisz wpisać swoje imię i nazwisko, swój ulubiony kolir i potrawę. 
1. Wyszukaj wszystkie spany i zapisz je do odpowiednich zmiennych
2. Za pomocą innerHTML wypełnij w nich odpowiednie informacje.

## Cwiczenie 3
Na stronie jest proste menu. Zarówno kod HTML jak i CSS jest już do niego przygotowany. Niestety ktoś zapomniał dodać odpowiednich klas do odpowiednich elementów. 
1. Wyszukaj element ```ul``` i dodaj mu klasę ```menu```.
1. Wyszukaj wszystkie element ```li``` i dodaj im klasę ```menuElement``` (uzyj do tego pętli). Uwazaj żeby nie wykasować klasy ```selected```.
1. Zauważ że jeden z elementów ma czerwony kolor tekstu - jest to spowodowane tym że ma klasę ```error```. Zabierz mu ją (najlepiej jeżeli zabierzesz tą klasę wszystkim elementom które to mają).

## Cwiczenie 4
Dodaj do każdego elementu listy atrybut ```data-id``` przyjmujący kolejne liczby cvalkowite (zaczynając od 1). Rozwiąż to zadanie na dwa sposoby:
1. Używając datasetu.
1. Używając matody ```setAttribute```.

## Cwiczeine 5
Zmodyfikuj listę w następujący sposób:
1. Dodaj atrybut ```data-direction``` nastawiony na wartosc ```up``` każdemu elementowi ```li``` który nie posiada tego atrybutu.
1. Nastaw kolor tła co drugiego elementu listy na zielony.
1. Nastaw 5-mu elementowi listy klasę big.
1. Nastaw co 3-mu elementowi podkreślenie.
