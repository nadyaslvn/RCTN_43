// soal 4
let udin = {
    money: 1000000000,
    carPreference: {
      buildBy: 'jpn',
      needed: 2,
      rangePrice: {from: 200000000, to: 450000000},
      type: ['SUV', 'Hatchback']
    },
    carport: [],
}
  
let showRoom = [
    {buildBy: 'jpn', brand: 'toyota', price: 123000000, model: 'Agya', type: 'City Car'},
    {buildBy: 'jpn', brand: 'toyota', price: 275000000, model: 'honda city', type: 'Hatchback'}, // v
    {buildBy: 'jpn', brand: 'toyota', price: 305000000, model: 'honda city', type: 'sedan'},  
    {buildBy: 'eu', brand: 'chevrolete', price: 350000000, model: 'trax', type: 'SUV'},
    {buildBy: 'jpn', brand: 'toyota', price: 550000000, model: 'fortuner', type: 'SUV'},
    {buildBy: 'jpn', brand: 'honda', price: 375000000, model: 'HRV', type: 'SUV'}, /// v
]

// jawaban soal 4
let result = showRoom.map(mobil => {
    let cek = false
    if(mobil.buildBy == udin.carPreference["buildBy"]) cek = true
    if((udin.carPreference["type"].filter(type => type == mobil.type)).length == 0) cek = false
    if((udin.carPreference["rangePrice"]['to'] > mobil.price) && (udin.carPreference["rangePrice"]['from'] < mobil.price) && cek) {
        cek = true
    } else {
        cek = false
    }
    if(cek) {
        udin.carport.push(mobil.model)
        udin.money -= mobil.price
    }
})

// print hasil
console.log(udin)

  // outputnya
  /*
  {
    money: 350000000,
    carPreference: {
      type: 'jpn',
      needed: 2,
      rangePrice: {from: 200000000, to: 450000000},
      mandatoryType: ['SUV', 'Hatchback']
    },
    carport: [
      honda city,
      HRV
    ],
  } */