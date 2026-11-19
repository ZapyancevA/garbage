// let a, b, c;
// a = parseInt(prompt("Слово SIX")) 
// b = parseInt(prompt("Слово SEVEN")) 
// c = a + b; 
// alert("Для вас означает одно и тоже " + c)

// let d = confirm('гойда?')
// console.log(d)



// 4.	Решить задачу: дана данные о количестве фотографий в папке и о количестве фотографий, которые можно разместить на одной странице, необходимо определить количество страниц для размещения всех фотографий.


// let numOfPhotosInFolder,
//     numOfPhotosOnPage,
//     numOfPage;

// numOfPhotosInFolder = parseInt(prompt('Введите кол-во фототок в папке'))
// numOfPhotosOnPage = parseInt(prompt('Введите кол-во фототок на стр'))
// numOfPage = Math.ceil(numOfPhotosInFolder / numOfPhotosOnPage)
// alert ("Количестов стр   " + numOfPage)

// let a, b, c, min;
// a = parseFloat(prompt("Слово ")) 
// b = parseFloat(prompt("Слово ")) 
// c = parseFloat(prompt("Слово -")) 

// min = a;
// if(b < min){
//     min = b;
// }
// if(c < min){
//     min = c;
// }
// // if (a < b && a < c) {
// //     min = a;
// // } else if(b < a && b < c) {
// //     min = b; 
// // } else{
// //     min =c;
// // }

// alert ( ' min = ' + min);

// let num, min;
// num = parseFloat(prompt("Число"));
// min=num;
// while(num != 0) {
//     num = parseFloat(prompt("Число ,scnj kz"));
//     if (num < min){
//         min = num
//     }
// }



//первое 2,12 г  Дано трехзначное число. Найти: г) произведение его цифр.
// let num1, num2, num3, num4, num5;
// num1 = parseInt(prompt("Введите трех значное число")) 

// num2 = Math.floor(num1 / 100)
// num3 = Math.floor((num1 % 100) / 10)
// num4 = num1 % 10;

// num5 = num2 * num3 * num4
// console.log(num5)



//второе 3,11 дВычислить значение логического выражения: д) (x · у 0) или (у < x) при x 2, y 1;

// let num1, num2, num3;
// num1 = 2;
// num2 = 1; 
// num3 = (((num1 * num2) != 0) || (num2 < num1))
// console.log(num3)


//третье 4.46 Определить, является ли треугольник со сторонами a, b, c равносторонним.

// let num1, num2, num3, num4;
// num1 = parseInt(prompt("Введите первую сторону треугл")) 
// num2 = parseInt(prompt("Введите вторую сторону треугл")) 
// num3 = parseInt(prompt("Введите третью сторону треугл")) 
// num4 = (num1 == num2 && num2 == num3 && num1 == num3)
// console.log(num4)


// 5.29 среднее арифметическое всех целых чисел от a до 200 (значения a и b вво-
// дятся с клавиатуры; a 200);
// let num1, num2, num3, num4, num5, num6;
// num1 = parseInt(prompt("Введите первое число до 200")) 
// num2 = parseInt(prompt("Введите второе до 200"))
// num3 =  0 
// num4 = 0
//  for (num5 = num1; num5 <= 200; num5 + 1){
//     num3 += num5;
//     num4 ++;
//  }

// num6 = num3 / num4 ;
// console.log(num6)

// 6.22 a Дано натуральное число. Определить: а) количество цифр 3 в нем;


// 7.6 Составить программу поиска четырехзначных чисел, которые при делении на 133 дают в остатке 125, а при делении на 134 дают в остатке 111.

let num = parseInt(prompt("Введите число с минимум одной 3"));
let count = 0;

while (num > 0) {
  if (num % 10 === 3) {
    count++;
  }
  num = Math.floor(num / 10);
}

console.log(count); // 3




