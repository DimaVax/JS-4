// 1
// const a = prompt("nn");
// const b = prompt("nn");
// if(a  ===  ''){
//     console.log('Не всі поля заповнені');
// } else if(b === ''){
//     console.log('Не всі поля заповнені');
// } else {
//     console.log('Обидва поля заповнені');
// }

// 2
// const a = prompt("Введіть число");
// const b = prompt("Введіть ще одне число");
// const a = 5;
// const b = 3;
// const c = a + b;
// if(c > 10){
//     console.log('Сума більша за 10');
// } else if(c <= 10){
//     console.log('Сума менша або дорівнює 10');
// } else {
//     console.log('Це не число!');
// }

// 3
// const message = prompt('Джава скріпт');
// const messagea = message.toLocaleLowerCase();
// if(messagea.includes('javascript') === true){
//     console.log('Текст містить слово JavaScript');
// } else{
//     console.log('Текст не містить слово JavaScript');
// }

// 4
const a = prompt('Введіть число');
if(a >= 10 && a <= 20){
    console.log('Число входить в діапазон від 10 до 20');
} else if(a < 10 || a > 20 ){
    console.log('Число не входить в діапазон від 10 до 20');
} else {
    console.log('Це не число!');
}