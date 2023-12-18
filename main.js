// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
// btn btn-inc ปุ่ม +   = increase 
// btn btn-dec ปุ่ม -   = decrease
// btn btn-clr ปุ่ม เคลีย = reset
// number 0 =  counter 
const counter = document.querySelector('.counter')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')
const btnClr = document.querySelector('.btn-clr')
const number = document.querySelector('.number')

let countNum = 0;

function updateCounter(n) {
    if (countNum + n < 0) {
        return
    }
    countNum += n
    number.textContent = countNum
}
btnInc.addEventListener('click', () => updateCounter(1))
btnDec.addEventListener('click', () => updateCounter(-1))
btnClr.addEventListener('click', () => updateCounter(-countNum))
    // SUPHAKIT LOMLAO KKTECH
