// soal 2
// munculin mobil SIAPA yang paling mahal, dan MOBILNYA APA 
var udin = {
    nama: "udin", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
      {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
      {merk: 'toyota', buildedBy: 'japan', price: 550000000, type: 'fortuner'}
    ],
    laptop: {
      merk: 'macbook',
      warna: 'dark grey',
      size: '15in'
    } 
  }
  
  var ujang = {
    nama: "ujang", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
      {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
      {merk: 'toyota', buildedBy: 'japan', price: 120000000, type: 'agya'}
    ],
    laptop: {
      merk: 'macbook',
      warna: 'dark grey',
      size: '15in'
    } 
  }
  
  var dadang = {
    nama: "dadang", 
    tinggi: 170, 
    usia: 21,
    bb: 71,
    kendaraan: [
      {merk: 'honda', buildedBy: 'japan', price: 400000000, type: 'civic'},
      {merk: 'toyota', buildedBy: 'japan', price: 140000000, type: 'agya'}
    ],
    laptop: {
      merk: 'macbook',
      warna: 'dark grey',
      size: '15in'
    } 
  }
  
  listOrang = [udin, ujang, dadang]
  
  // jawaban soal 2
  var hargaMobilTermahal = 0
  var hasil
  listOrang.map(orang => {
    orang.kendaraan.map(mobil => {
      if(mobil.price > hargaMobilTermahal) {
        hasil = {
          nama : orang.nama,
          merk : mobil.merk
        }
        hargaMobilTermahal = mobil.price
      }
    })
  })
  
  // print hasil
  console.log(hasil)