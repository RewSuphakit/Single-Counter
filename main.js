// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0
// btn btn-inc ปุ่ม +   = increase 
// btn btn-dec ปุ่ม -   = decrease
// btn btn-clr ปุ่ม เคลีย = reset
// number 0 =  counter 
const counter = document.querySelector('#counter');
let counterValue = 0; //  <== ประกาศตัวแปล กำหนด ค่าเป็น 0
function updateCounter() {
    counter.innerText = counterValue; // <== สงค่า counterValue ไปยัง  id="counter" ในหน้า index
}

function increase() { // <== เมื่อมีการกดปุ่ม + ในหน้า index จะเกิด อีเว่นเรียกใช่ฝั่งชั่น  increase() 
    counterValue++; // จะนับเป็น 1 
    updateCounter(); // เรียกใช่ฟังชั่นอัพเดท Counter
}

function decrease() { // <== เมื่อมีการกดปุ่ม - ในหน้า index จะเกิด อีเว่นเรียกใช่ฝั่งชั่น  decrease() 
    if (counterValue > 0) { // ตรวจสอบไม่ให้ค่าติด ลบ หรือน้อยกว่า 0
        counterValue--; // ทำการลบ 1
        updateCounter(); // เรียกใช่ฟังชั่นอัพเดท Counter
    }
}

function reset() { //  <== เมื่อมีการกดปุ่ม C ในหน้า index จะเกิด อีเว่นเรียกใช่ฝั่งชั่น  reset()
    counterValue = 0; //    รีเซ็ตโดยตั้ง ค่า counterValue เป็น 0 55555  ได้บ่อน้อ
    updateCounter(); // เรียกใช่ฟังชั่นอัพเดท Counter
}


// SUPHAKIT LOMLAO KKTECH