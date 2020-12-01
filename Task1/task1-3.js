// soal 3
// ambil nilai dari number1 yang tidak ada di number2
const number1 = [1,5,7,8,2,3,6,4,3]
const number2 = [9,2,1,6,4,2,5,7,1] 
const number3 = [] // [8,3,3]

// jawaban soal 3
number1.map(num1 => {
  let nilaiSama = false
  number2.map(num2 => {
    if(num1 == num2) nilaiSama = true
  })
  if(!nilaiSama) number3.push(num1)
})

// print hasil
console.log(number3)