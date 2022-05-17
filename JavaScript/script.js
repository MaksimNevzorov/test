// alert('Я JavaScript');
let name = 'джон'
let admin
/*admin = name

alert(admin)


let currentUser = 'me'

let BIrthday = '07.06.1996'
alert(BIrthday)

alert(`hello ${name}`)*/

// let nameUser = prompt('Ведите своё имя', '')
// alert(nameUser)

// for( i = 5; i < 10; i++) {
//     for(j = i; j < i+1; j ++){
//         alert(j);
//     }
// }

// let xyz = 13
// xyz = String(xyz)
// alert (typeof xyz)

// function one(a, b) {
//     return (a + b)
// }

// console.log( one(1, 2, 3));

// let word = 'df,slf,sdlf,s;dlf,s;dlf,'

// let text = `${word} мир`
// console.log(text)

/*function calcSum(numOne, numTwo) {
    if(numTwo === 1) {
        return numOne;
    } else {
        return numOne * calcSum(numOne, numTwo - 1);
    }
}

console.log(calcSum(3, 3));

function showName() {
    console.log('ВАСЯ!');
}
setTimeout(showName, 0);
console.log('КОЛЯ!')*/

// let number
// let data = 1;
// number = data === true ? number = 2 : number = 3;
// alert(number)

// let number
// let data = 1;

// if (data === true){
//     number = 2;
// } else {
//     number = 3;
// }

// alert(number)

// let str = 'abcde';
// console.log(str[0])
// console.log(str[1])
// console.log(str[str.length - 1])


// let ageUser
// let age = confirm('сколько тебе лет')
// ageUser = age == true ? ageUser = 'есть' : ageUser = 'нет';
// console.log(ageUser)

// let a='15',
// b=15,
// c=10;
// console.log(a+b+c)
// console.log(c+b+a)

// let nameME = 'Максим';
// alert(`Привет, ${nameME}`)

// let nameUser = prompt('Введите имя', '')
// alert(nameUser)

// let nameUser = prompt('Введите число', '')
// alert(nameUser**8)

// let str = 'HELLO'
// console.log(str.toLowerCase())

// let str = 'Я хочу быть большим и сильным';
// alert(str.length)

// let num = 7;
// for( let i = 1; i < 4; ++i ){
//     let sum = num**i
//     console.log(sum)
// }



// Преобразования строки в массив

// let str = 'Гуляю по городу и вижу солнце';
// let arr = str.split(' ')
// console.log(arr)

// обратно

// let str = 'Гуляю по городу и вижу солнце';
// console.log(str)
// let arr = str.split(' ')
// console.log(arr)
// let backStr = arr.join(' ');
// console.log(backStr)


// 

// function rand() {
//     return Math.floor((Math.random() * 10) + 1);
// }

// let a = rand();
// let b = rand();
// console.log('a + b = ' + (a+b))

// Создание строки и приобразование ее в число

// let a 
// a = '5'
// console.log(typeof a)
// a = +a
// console.log(typeof a)
// a = '5'
// console.log(typeof a)
// a = Number(a)
// console.log(typeof a)
// a = '5'
// console.log(typeof a)
// a = a - 0;
// console.log(typeof a)
// a = '5'
// console.log(typeof a)

// console.log(6 + '12')


// булиновая проверка

// let a = +prompt('vedi chislo', '');
// let bool = ( a > 0 && a < 5) ? 'Verno' : 'Neverno';
// alert(bool) 



// Использование методов и циклов

// let text = 'я тебя очень люблю и ценю';
// let textArr = text.split(' ')
// let strTog = ''
//     for(let i = 0; i < textArr.length; i++){
//         let word = textArr[i]
//         let firs = word.substring(0, 1).toUpperCase();
//         let end = word.substring(1, word.length);
//         strTog += firs + end + ' ';
//     }    
// console.log(strTog)
// console.log(textArr)




// for(let word of textArr){
//     word[0] = word[0].toUpperCase()
//     console.log(word[0].toUpperCase())

// }



// let arr = 'asd'
// console.log('10'/'2')


// дата время

function timeHour (prom) {
    if (prom == numb && prom >= 0 && prom <= 24 ){
        return prom;
    } else{
        promp ('попробуй еще раз', '')
    }
}

let hours = +prompt ('Час?', +'')  

let minutes
let seconds

 
