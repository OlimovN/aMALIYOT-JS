// yil oy kun hafta soat daqiqa soniya yashaganini topish

// const ism = prompt ("Ismingizni kiriting:" )
// const yosh = +prompt ("Yoshingizni kiriting:")

// let tugilganYil = 2024 - yosh
// let oy = yosh * 12 
// let hafta = ((yosh * 365) / 7).toFixed(0)
// let kun = yosh * 365
// let soat =kun * 24
// let daqiqa = soat * 60
// let soniya = daqiqa * 60


// const result =  `Qadirli ${ism}. Siz ${tugilganYil}. yilda tugilgansiz. Va siz ${oy} oy , ${hafta} hafta , ${kun} kun, ${soat} soat, ${yosh * 365 * 24 * 60} daqiqa , ${yosh * 365 * 24 * 60* 60} soniya yashagansiz.`

// alert(result)



// soralgan narsani bor yoqligini aytish
//  const ism = prompt ("Ism kirirting:")

// // includes 

// const ismlar = ["Sarvar", "Asror", "Abror"]

// if(ismlar.includes(ism)) {
//     alert(  `Ha ${ism} bor `)
// } else {
//     alert(  `Afsus ${ism} yoq`)
// }


const ismlar = ["Sarvar", "Asror", "Abror"]

// ismlar oxiriga bek qoshish

// for / while => loop

// for (let i = 0; i < ismlar.length; i++){
// let result = ismlar[i] + "bek"
// console.log(result)
// }

// while 

// let i = 0

// while (i < ismlar.length) {
//     let result = ismlar[i] + "bek"
//     console.log(result)
//      i++
 
// }

// viloyatni aholisini chiqarish

// const viloyatNomi = prompt( `Qaysi viloyat nomi kerak ?`)
// switch(viloyatNomi ) {
//     case"Fargona":
//     alert("Fargona viloyatida 2.5 mln aholi bor")
//     break
//     case"Andijon":
//     alert("Andijon viloyatida 2.3 mln aholi bor")
//     break
//     case"Namangan":
//     alert("Namangan viloyatida 1.5 mln aholi bor")
//     break
//     default: 
//     alert(`Hozircha bazada ${viloyatNomi} viloyat mavjud emas` )
// }


// belgi kiritsa  belgilangan sondan oshsa oshiqchaligini etish

const belgilar = prompt( `Nimadirlar yozing ... `)

let meyor = 20

if(belgilar.length > meyor) {
    alert(  `Siz ${meyor} ta belgi kiritishingiz mumkin, lekin hozirda siz ${belgilar} ta belgi kiritdingiz bu meyoridan  ${belgilar.length - meyor}ta kop .`)
}
