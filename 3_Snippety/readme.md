<img src="http://coderslab.pl/wp-content/uploads/2016/03/logo-v2.png" align="right" style="width:150px; margin-top:45px"/>

# JavaScript - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

#### 1. Tworzenie obiektów na podstawie konstruktora
```JavaScript```
function Animal(type) {
    this.type = type;
}

Animal.prototype.sayVoice = function(voice) {
    console.log(voice)
}

var lion = new Animal('lion');
lion.sayVoice("roar");

var pigeon = new Animal('pigeon');
pigeon.sayVoice("gru gru");
```
#### 2. Tworzenie obiektów za pomocą Object.create()

```JavaScriptvar
 Animal = {
    type: "",
    sayVoice: function(voice) {
        console.log(voice)
    }
}

var lion = Object.create(Animal);
lion.type = "lion";
lion.sayVoice("roar");


var pigeon = Object.create(Animal);
pigeon.type = "pigeon";
pigeon.sayVoice("gru gru");
```

#### 3. setInterval & clearInterval

```JavaScript
var id = setInterval(function() {
    console.log('jestem wywolywana co 2 sekundy');
}, 2000 )

clearInterval(id);
```

#### 4. setTimeOut & clearSetTimeout

#### 5 Różne rodzaje eventów

* click
```JavaScript
var button = document.getElementById('send');
button.addEventListener('click', function(){
    console.log('hurra kliknięto');
})
```

* keyup
```JavaScript
var inputField = document.getElementById('name');
inputField.addEventListener('keyup', function(){
    console.log('hurra wpisano tekst');
})
```


* change


* hover
* mouseeneter
* mouseLeave
* mousemove


#### 6. Pobieranie różnych wartości z elementów z formularza
* input
```JavaScript
var inputField = document.getElementById('card');
inputField.value;
```

* checkbox
```JavaScript
var checkboxField = document.getElementById('condition')
checkboxField.checked
```

* radiobutton
```JavaScript
var radioBtn = document.getElementById('radio');
radioBtn.checked;
```
* textarea
```JavaScript
var msgField= document.getElementById('message');
msgField.value;
```
* select & option

 Pobranie
```JavaScript
var selectField = document.getElementById('infos');
selectField.options[msgField.selectedIndex].value;
```

Ustawienie
```JavaScript
var selectField = document.getElementById('infos');
selectField.options[1].selected = true
```
