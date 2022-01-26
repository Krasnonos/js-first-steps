let balance = 10000;
const payment = 90000;
const greating = `Сума стоимости заказа ${payment} кредитов. Проверяем количество доступных средст на счету`
console.log (greating)
let massege
if (payment < balance) {
    const pay = balance - payment
    massege = `на счету осталось ${pay} кредитов`
} else {
    massege= `Не достаточно средств`
}
console.log(massege)
const goodbay = `Операция завершена`
console.log (goodbay)