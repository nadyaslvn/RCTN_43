// soal 1
var list = [[5,3,2,4,1,6], [1,2,2,3,4],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,2]]

// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// function hanya menerima 1 parameter array

// jawaban soal 1
// - munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
var sumList = []
list.map(array => {
  var sum = calculate(array)
  if((sum%2) == 0) {
    sumList.push(sum)
  }
})

// print hasil
console.log(sumList)

function calculate(index) {
  return list[index].reduce((sum, val) => sum + val, 0)
}