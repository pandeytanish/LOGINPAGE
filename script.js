

console.log('hiiiiiiiiiiiiiiiiiii')
function calculateExpense(){
    const salary = document.getElementById('salary').value
const ex1 = document.getElementById('E1').value
const ex2 = document.getElementById('E2').value
const ex3 = document.getElementById('E3').value
const ex4 = document.getElementById('E4').value
const ex5 = document.getElementById('E5').value
    const expenseSum = ex1+ex2+ex3+ex4+ex5
    const total = salary-expenseSum
    console.log(total)
    console.log('hii')
}