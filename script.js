// --------------ОПЛАТА В МАГАЗИНЕ-------------

// let balance = 10000;
// const payment = 90000;
// const greating = `Сума стоимости заказа ${payment} кредитов. Проверяем количество доступных средст на счету`
// console.log (greating)
// let massege
// if (payment < balance) {
//     const pay = balance - payment
//     massege = `на счету осталось ${pay} кредитов`
// } else {
//     massege= `Не достаточно средств`
// }
// console.log(massege)
// const goodbay = `Операция завершена`
// console.log(goodbay)


// ----------------ВЫЧИСЛЕНИЕ СКИДКИ-------------------

const totalSpent = 1010;
let payment = 100;
let discount = 0;
let massage


if (totalSpent > 100 && totalSpent <= 1000) {
    discount = 2;
    const discountNow = payment / 100 * discount
    const payNow = payment - discountNow
massage = `Оформляем заказ на сумму ${payNow} со скидкой  ${discountNow} кредитов`
}else if (totalSpent > 1000 && totalSpent <= 5000) {
    discount = 5;
    const discountNow = payment / 100 * discount
    const payNow = payment - discountNow
massage = `Оформляем заказ на сумму ${payNow} со скидкой  ${discountNow} кредитов`
}
    else  (totalSpent > 5000) {
    discount = 10;
    const discountNow = payment / 100 * discount
    const payNow = payment - discountNow
massage = `Оформляем заказ на сумму ${payNow} со скидкой  ${discountNow} кредитов`
}


 console.log (massage)
