//пароль
let password = "QuZ731Qda131";
//список имен
let firstNameArray = [
"Anderey", "Andryha", "Andry",
"Anton", "Toxa", "Toha",
"Dasha", "Darya",
"Diana", "Dinka",
"Ivan", "Vano",
"Kostya", "Kostyan",
"Katya", "Ekaterina", "Katyha",
"Pasha", "Pavel", 
"Natasha", "Nata",
"Valeriy","Valera",
"Dima","Dmitriy","Diman", "Dimasik", "Dimon",
"Alexunder","Alexander","Aleksander",
"Tonya","Tamara","Toma",
"Denis", "Denchik",
"Misha","Mihail","Mishanya",
"Stas","Stasik",
"Evgeniy", "Evgen"
];
//список фамилий
let lastNameArray = [
"Ivanko",
"Misochenko",
"Tereschenko",
"Pavlenko",
"Ivanenko",
"Vitalko",
"Ignatenko",
"Valnetinko",
"Efremenko",
"Kapturenko",
"Eleesenko",
"Vitalenko",
"Grut",
"Trut",
"Veremeenko",
"Leschenko",
"Jarahovich",
"Burtilenko",
"Veninenko",
"Dred",
"Dedko",
"Dudko",
"Legko",
"Stasenko",
"Gavrilenko",
"Antonenko",
"Veselko"
];

//Имя и фамилия берется случайные из списка,
//email формируется на условии имени и фамилии + рандомное число
/*------------------------------*/
autoFill();

function autoFill(){
initial(firstNameArray,lastNameArray, password);
}

function initial(firstNameArray, lastNameArray, pass){
let firstName = firstNameArray[getRandomInt(0, firstNameArray.length-1)];
let lastName = lastNameArray[getRandomInt(0, lastNameArray.length-1)];
let email = firstName + lastName + getRandomInt(3333, 9999); 
setData(firstName, lastName, email, pass);
}

function setData(firstName, lastName, email, pass){
var inputArray = document.querySelectorAll('input');
inputArray[1].value = firstName;
inputArray[2].value = lastName;
inputArray[11].value = email;
inputArray[13].value = pass;
inputArray[14].value = pass;
var text = 'Логин: ' + email + '@mail.ru' + ' Пароль: ' + pass;

console.log(text);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}



