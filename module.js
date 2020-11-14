// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//
// let people = {
//     name: 'Vasya',
//     age: 23,
//     wife: false,
// };
// let dog = {
//     nickname: 'Archie',
//     breed: 'haskie',
//     gender: 'boy',
// }
// let car = {
//     model: 'Audi',
//     year: 2006,
//     color: 'black',
//     motor: 'gasoline',
//     gearbox: 'mechanics'
// }
// let book = {
//     title: 'War and Peace',
//     tom: 4,
//     language: 'RU',
//     price: 4600
// }
// let film = {
//     moovieTitle: 'Harry Potter and the Goblet of Fire',
//     time: 2.5,
//     filmCompany: 'Америки Warner Bros. Pictures',
//     filmGenre: 'Adventures, fantasy'
// }


// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
//
// let man = {
//     firstName: 'Ivan',
//     lastName: 'Ivleev',
//     age: 30,
//     skills: ['java', 'js', 'html', 'css', 'sql'],
//     tasks: {
//         task1: 'done',
//         task2: 'in process',
//         task3: 'in process',
//         task4: 'done'
//     }
// }
// let cinema = {
//     nameOfTheCinema: 'Planeta Kino',
//     ticketBooking: true,
//     popcorn: true,
//     filmsToRent: ['I Used to Go Here', 'Made in Italy', 'Out Stealing Horses', 'The Secret Garden', 'She Dies Tomorrow'],
//     cinemaHoll: {
//         hall1: '2d',
//         hall2: '3d',
//         hall3: '6d',
//         hall4: '7d'
//     }
// }
// let macbook = {
//     model: 'MacBook Pro 2018',
//     characteristics: {
//         display: '15.4-inch, Retina display',
//         processor: '2.6GHz 6-core Intel Core i7',
//         storage: '512GB SSD',
//         memory: '16GB of 2400MHz DDR4 onboard memory',
//         graphics: '2.6GHz Radeon Pro 560X with 4GB of GDDR5 memory and automatic graphics switching. Intel UHD Graphics 630'
//     },
//     color: ['silver', 'gold', 'space gray'],
//     isAvailable: true,
//     price: 56000,
// }
// let university = {
//     universityName: 'Lviv Polytechnic National University',
//     rector: 'Yuri Bobalo',
//     institutes: ['IKNI', 'IKTA', 'IPPO', 'IAPO', 'IBIS', 'INEM', 'IIMT'],
//     adress: {
//         ikni: 'street S. Bandera 28a',
//         ikta: 'street S. Bandera 28a',
//         ippo: 'street Knyaza Romana 1/3',
//         iapo: 'street Metropolitan Andrew 5',
//         ibis: 'street Karpinskoho 6',
//         inem: 'street Metropolitan Andrew 5',
//         iimt: 'street Profesorska 1'
//     },
//     telephone: '(032) 258-21-11'
// }
// let student = {
//     name: 'Sophia Sabat',
//     institute: 'IKNI',
//     course: 2,
//     subjects: ['OOP', 'Chiselni metodu', 'Application rogramming', 'ETE', 'OS'],
//     academriznitsa: {
//         algorithmizationAndProgramming: 'exam',
//         discreteMath: 'exam',
//         mathematicalAnalysis: 'exam'
//     }
// }


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// console.log(people);
// for (const peopleKey in people) {
//     console.log(peopleKey);
// }
// console.log(dog);
// for (const dogKey in dog) {
//     console.log(dogKey);
// }
// console.log(car);
// for (const carKey in car) {
//     console.log(carKey);
// }
// console.log(book);
// for (const bookKey in book) {
//     console.log(bookKey);
// }
// console.log(film);
// for (const filmKey in film) {
//     console.log(filmKey);
// }
//
//
// console.log(man);
// for (const manKey in man) {
//     console.log(manKey);
// }
// console.log(cinema);
// for (const cinemaKey in cinema) {
//     console.log(cinemaKey);
// }
// console.log(macbook);
// for (const macbookKey in macbook) {
//     console.log(macbookKey);
// }
// console.log(university);
// for (const universityKey in university) {
//     console.log(universityKey);
// }
// console.log(student);
// for (const studentKey in student) {
//     console.log(studentKey);
// }


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//
// console.log(Object.keys(people));
// console.log(Object.keys(dog));
// console.log(Object.keys(car));
// console.log(Object.keys(book));
// console.log(Object.keys(film));
//
// console.log(Object.keys(man));
// console.log(Object.keys(cinema));
// console.log(Object.keys(macbook));
// console.log(Object.keys(university));
// console.log(Object.keys(student));


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
//
// let cars = [
//     {model: 'Audi A4', year: 2007, power: 1.5, color: 'blue'},
//     {model: 'BMW X5', year: 1010, power: 2.2, color: 'black'},
//     {model: 'Porsche Cayenne', year: 2016, power: 2.4, color: 'white'},
//     {model: 'Toyota RAV4', year: 2015, power: 2.6, color: 'red'},
//     {model: 'Ford Focus', year: 2011, power: 2.2, color: 'dark blue'},
//     {model: 'Mercedes-Benz', year: 2020, power: 2.6, color: 'grey'},
//     {model: 'Peugeot 207', year: 2012, power: 1.6, color: 'black'},
//     {model: 'Opel Astra', year: 2006, power: 1.5, color: 'white'},
//     {model: 'Renault Megane', year: 2010, power: 2.2, color: 'yellow'},
//     {model: 'Volkswagen Tiguan', year: 2018, power: 2.4, color: 'white'},
// ]


// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
//
// let cities = [
//     {cityName: 'Lviv', population: 755800, country: 'Ukraine', region: 'Lviv region'},
//     {cityName: 'Warsaw', population: 1790658, country: 'Poland', region: 'Mazovetsʹke voyevodstvo'},
//     {cityName: 'Paris', population: 2148327, country: 'France', region: 'Ile de France'},
//     {cityName: 'Toronto', population: 2731571, country: 'Canada', region: 'Ontario'},
//     {cityName: 'Moscow', population: 12692466, country: 'Russia', region: 'Moscow region'},
// ]


// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
//
// let carsAndDrivers = [
//     {model: 'Audi A4', year: 2007, power: 1.5, color: 'blue', driver: {name:'Ivan', age: 30, gender: 'male', experience: 10}},
//     {model: 'BMW X5', year: 1010, power: 2.2, color: 'black', driver: {name:'Petro', age: 23, gender: 'male', experience: 3}},
//     {model: 'Porsche Cayenne', year: 2016, power: 2.4, color: 'white', driver: {name:'Alina', age: 20, gender: 'famale', experience: 1}},
//     {model: 'Toyota RAV4', year: 2015, power: 2.6, color: 'red', driver: {name:'Kyrylo', age: 19 , gender: 'male', experience: 2}},
//     {model: 'Ford Focus', year: 2011, power: 2.2, color: 'dark blue', driver: {name:'Vika', age: 36, gender: 'famale', experience: 8}},
//     {model: 'Mercedes-Benz', year: 2020, power: 2.6, color: 'grey', driver: {name:'Dima', age: 25, gender: 'male', experience: 5}},
//     {model: 'Peugeot 207', year: 2012, power: 1.6, color: 'black', driver: {name:'Max', age: 22, gender: 'male', experience: 3}},
//     {model: 'Opel Astra', year: 2006, power: 1.5, color: 'white', driver: {name:'Olya', age: 19, gender: 'famale', experience: 2}},
//     {model: 'Renault Megane', year: 2010, power: 2.2, color: 'yellow', driver: {name:'Oleg', age: 50, gender: 'male', experience: 20}},
//     {model: 'Volkswagen Tiguan', year: 2018, power: 2.4, color: 'white', driver: {name:'Roman', age: 24, gender: 'male', experience: 5}},
// ];


// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i<cars.length){
//     console.log(cars[i]);
//     i++
// };
//
// let s = 0;
// while (s<cities.length){
//     console.log(cities[s]);
//     s++
// };
//
// let j = 0;
// while (j<carsAndDrivers.length){
//     console.log(carsAndDrivers[j]);
//     j++
// };


// - проитерировать каждый массив из задания 5,6,7 при помощи for .
//
// for (let i = 0; i<cars.length; i++){
//     console.log(cars[i]);
// };
//
// for (let i = 0; i<cities.length; i++){
//     console.log(cities[i]);
// };
//
// for (let i = 0; i<carsAndDrivers.length; i++){
//     console.log(carsAndDrivers[i]);
// };


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
//
// for (const element of cars) {
//     console.log(element);
// };
//
// for (const element of cities) {
//     console.log(element);
// };
//
// for (const element of carsAndDrivers) {
//     console.log(element);
// };


// - взять объекты из задания 1 и превратить каждый в json.
//
// let peopleJson = JSON.stringify(people);
// console.log(peopleJson);
//
// let dogJson = JSON.stringify(dog);
// console.log(dogJson);
//
// let carJson = JSON.stringify(car);
// console.log(carJson);
//
// let bookJson = JSON.stringify(book);
// console.log(bookJson);
//
// let filmJson = JSON.stringify(film);
// console.log(filmJson);


// - взять json из задания 11 и превратить их обратно в объекты.
//
// peopleJson = JSON.parse(peopleJson);
// console.log(peopleJson);
//
// dogJson = JSON.parse(dogJson);
// console.log(dogJson);
//
// carJson = JSON.parse(carJson);
// console.log(carJson);
//
// bookJson = JSON.parse(bookJson);
// console.log(bookJson);
//
// filmJson = JSON.parse(filmJson);
// console.log(filmJson);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//
// for (const car of cars) {
//     let carJson = JSON.stringify(car);
//     console.log(carJson);
// }


// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//
// for (const city of cities) {
//     let cityJson = JSON.stringify(city);
//     console.log(cityJson);
// }


// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let arr = [];
// for (const carsAndDriver of carsAndDrivers) {
//     let cADJson = JSON.stringify(carsAndDriver);
//     console.log(cADJson);
//     arr.push(JSON.parse(cADJson));
// }
// console.log(arr);


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//
// let users = [
//     {name: 'Alina', age: 20, skills: ['java', 'js', 'react']},
//     {name: 'Igor', age: 18, skills: ['python', 'data science', 'html', 'css']},
//     {name: 'Petro', age: 23, skills: ['html', 'css', 'js']},
//     {name: 'Olya', age: 22, skills: ['c++', 'oop', 'sql']},
//     {name: 'Max', age: 26, skills: ['java', 'js', 'html', 'css', 'sql']},
// ];
// for (const user of users) {
//     console.log('Name: ',user.name);
//     for (let skill of user.skills) {
//         console.log(skill);
//     }
// }


// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
//
// let arrSkills = [];
// let users = [
//     {name: 'Alina', age: 20, skills: ['java', 'js', 'react']},
//     {name: 'Igor', age: 18, skills: ['python', 'data science', 'html', 'css']},
//     {name: 'Petro', age: 23, skills: ['html', 'css', 'js']},
//     {name: 'Olya', age: 22, skills: ['c++', 'oop', 'sql']},
//     {name: 'Max', age: 26, skills: ['java', 'js', 'html', 'css', 'sql']},
// ];
// for (const user of users) {
//     console.log('Name: ',user.name);
//     for (const skill of user.skills) {
//         console.log(skill);
//         arrSkills.push(skill);
//     }
// }
// console.log(arrSkills);


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//     ];
//
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }



// ------------------------------------------------------------------------------------------------------------------------------------



// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//     },
//     {
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//     },
//     {
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//     }, {
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//     },
//     {
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//     },
//     {
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//     },
//     {
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//     }
//     ];



// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//
// let address = [];
// for (const user of users) {
//     address.push(user.address);
// }
// console.log(address);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
//
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let userDiv = document.createElement('div');
//     userDiv.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`
//     document.body.appendChild(userDiv);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
//
//
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//
//     let address = '';
//     for (const addressKey in user.address) {
//         address = address + " " + user.address[addressKey];
//     }
//
//     let userDiv = document.createElement('div');
//     let userName = document.createElement('h3');
//     let userAge = document.createElement('p');
//     let userStatus = document.createElement('p');
//     let userAddress = document.createElement('p');
//
//     userName.innerText = user.name;
//     userAge.innerText = user.age;
//     userStatus.innerText = user.status;
//     userAddress.innerText = address;
//
//     userDiv.appendChild(userName);
//     userDiv.appendChild(userAge);
//     userDiv.appendChild(userStatus);
//     userDiv.appendChild(userAddress);
//
//     document.body.appendChild(userDiv);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//
//     let userBlock = document.createElement('div');
//     let userName = document.createElement('h3');
//     let userAge = document.createElement('p');
//     let userStatus = document.createElement('p');
//     let userAddress = document.createElement('div');
//
// /*    let userAddressCity = document.createElement('p');
//     let userAddressCountry = document.createElement('p');
//     let userAddressStreet = document.createElement('p');
//     let userAddressHouseNumber = document.createElement('p');*/
//
//     userName.innerText = user.name;
//     userAge.innerText = user.age;
//     userStatus.innerText = user.status;
//
//     /*userAddressCity.innerText = user.address.city;
//     userAddressCountry.innerText = user.address.country;
//     userAddressStreet.innerText = user.address.street;
//     userAddressHouseNumber.innerText = user.address.houseNumber;*/
//
// /*    userAddress.appendChild(userAddressCity);
//     userAddress.appendChild(userAddressCountry);
//     userAddress.appendChild(userAddressStreet);
//     userAddress.appendChild(userAddressHouseNumber);*/
//
//     for (const userAddressKey in user.address) {
//         const adr = document.createElement('p');
//         adr.innerText = user.address[userAddressKey];
//         userAddress.appendChild(adr);
//     }
//
//     userBlock.appendChild(userName);
//     userBlock.appendChild(userAge);
//     userBlock.appendChild(userStatus);
//     userBlock.appendChild(userAddress);
//
//     document.body.appendChild(userBlock);
// }



// -----------------------------------------------------------------------------------------------------------------------------------



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
//     let citiesWithId = [
//         {user_id: 3, country: 'USA', city: 'Portland'},
//         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//         {user_id: 2, country: 'Poland', city: 'Krakow'},
//         {user_id: 4, country: 'USA', city: 'Miami'}
//     ];


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [
// {id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]



// let usersWithCities = JSON.stringify(usersWithId);
// usersWithCities = JSON.parse(usersWithCities);
//
// for (const user of usersWithCities) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }
//
// console.log(usersWithCities);



// -----------------------------------------------------------------------------------------------------------------------------------



// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
//
// let divById = document.getElementById('divka');
// let divkaText = divById.innerText;
// console.log(divkaText);
//
// let divByClassName = document.getElementsByClassName('red');
// for (const divElement of divByClassName) {
//     console.log(divElement);
// };
//
// let divByTagName = document.getElementsByTagName('div');
// for (const element of divByTagName) {
//     console.log(element);
// }


// - змінити цей текст використовуючи селектори id, class,  tag
//
// let newTextById = document.getElementById('divka').innerText = 'New Text!!! New Text!!! New Text!!! New Text!!! New Text!!! New Text!!! New Text!!!';
// console.log(newTextById);
//
// let newTextByClassName = document.getElementsByClassName('red');
// for (const element of newTextByClassName) {
//     let newText = element.innerText = 'NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NEW NW NEW NEW';
//     console.log(newText);
// }
//
// let newTextsByTagName = document.getElementsByTagName('div');
// for (const element of newTextsByTagName) {
//     let newTxt = element.innerText = 'NEW TEXT! NEW TEXT! NEW TEXT! NEW TEXT! NEW TEXT! NEW TEXT! NEW TEXT! NEW TEXT! NEW TEXT! NEW TEXT!';
//     console.log(newTxt);
// }



/*

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// document.getElementById('divka').style.width = '300px';
// document.getElementById('divka').style.height = '200px';
// document.getElementById('divka').style.backgroundColor = 'pink';

// let elementsByClassName = document.getElementsByClassName('red');
// for (const element of elementsByClassName) {
//     element.style.width = '500px';
//     element.style.height = '100px';
//     element.style.backgroundColor = 'lightblue';
// }

// let elementsByTagName = document.getElementsByTagName('div');
// for (const element of elementsByTagName) {
//     element.style.width = '200px';
//     element.style.height = '400px';
//     element.style.backgroundColor = 'lightgreen';
// }

*/



// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//
// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let tdOne = document.createElement('td');
// let tdTwo = document.createElement('td');
// let tdThree = document.createElement('td');
//
// tr.appendChild(tdOne);
// tr.appendChild(tdTwo);
// tr.appendChild(tdThree);
//
// table.appendChild(tr);
//
// document.body.appendChild(table);



// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
//
// /*
// let table = document.createElement('table');
//
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//
//     for (let j = 0; j < 3; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//
//     table.appendChild(tr);
// }
// document.body.appendChild(table);
// */
//
//
// let table = document.createElement('table');
//
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//
//     let td = document.createElement('td');
//     let td2 = document.createElement('td');
//     let td3 = document.createElement('td');
//
//     tr.appendChild(td);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//
//     table.appendChild(tr);
// }
//
// document.body.appendChild(table);



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
//
// let table = document.createElement('table');
//
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//
//     table.appendChild(tr);
// }
//
// document.body.appendChild(table);



// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
//
//
// let table = document.createElement('table');
// let n = +prompt('Please, input the number of rows');
// let m = +prompt('Please, input the number of columns');
//
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement('tr');
//
//     for (let j = 0; j < m; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//
//     table.appendChild(tr);
// }
//
// document.body.appendChild(table);



// -----------------------------------------------------------------------------------------------------------------------------------


// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії

// - знайти всі елементі, які мають class
//
// const elementsByTagName = document.getElementsByTagName('*');
//
// for (let tag of elementsByTagName) {
//     if (tag.getAttribute('class')){
//     console.log(tag);
//     }
// }


// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//
// let elementsByTagName = document.getElementsByTagName('p');
// for (const element of elementsByTagName) {
//     element.innerText = 'hello oktenweb!'
// }


// - знайти всі div та змінити ім колір на червоний
//
// let elementsByTagName = document.getElementsByTagName('div');
//
// for (const element of elementsByTagName) {
//     element.style.backgroundColor = 'red';
// }
