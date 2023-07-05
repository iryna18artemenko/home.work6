document.write ("Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).");
document.write ("<br>");


for (let i=20; i<=30; i+=0.5 ) {
    document.write (str =i + "  ")
};

document.write ("<br>");

document.write ("Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.");
document.write ("<br>");

for (let j = 27; j <= 27; j++) {  

    for (let i = 10; i <=100; i +=10)  { 
    document.write(i*j + "  ");  
    }
} 

document.write ("<br>");

document.write ("Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.");
document.write ("<br>");

const ltSqr = function*(n) {
    const limit = Math.min(100, Math.sqrt(n));
    let i = 1;
    while (i <= limit) {
      yield i++;
    }
  }
  
let N = 56;
  for (const x of ltSqr(N)) {
    document.write (x + "  ");
}

document.write ("<br>");

document.write ("Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).");
document.write ("<br>");


function primeNumb(num) {
    if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          return "Складове число";
        }
      }
      return "Просте число";
    }
}

document.write(primeNumb(5));


document.write ("<br>");

document.write ("Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).");
document.write ("<br>");

let number= 27;


while (number % 3 == 0) {
    number /= 3;
}
document.write(number == 1)

