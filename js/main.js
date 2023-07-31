/* LocalStorage in JS (mahalliy server)*/

/*localStorage.setItem('ism','Toxir');*/
/*localStorage.setItem('familiya','Boboxonov');*/
/*localStorage.setItem('yoshi','16 yoshda');*/
/*localStorage['ism'] = 'Asad';*/
/*localStorage['familiya'] = 'Mirqodirov';*/
/*localStorage['yoshi'] = '18yoshda';*/
/*localStorage.removeItem('ism');*/
/*localStorage.removeItem('familiya');*/
/*localStorage.removeItem('yoshi');*/
/*localStorage.clear()*/
/*let uningIsmi = localStorage.getItem('ism');*/
/*let uningFamiliyasi = localStorage.getItem('familiya');*/
/*let uningYoshi = localStorage.getItem('yoshi');*/
/*console.log(uningIsmi,uningFamiliyasi,uningYoshi)*/

/* HTTPS requests (HTTPS so'rovlari) */

/*let sorov = new XMLHttpRequest();*/
/*sorov.open('get','https://getty.uz/serverdan/malumot/olish');*/
/*sorov.send();*/

/*sorov.onload = function (){
    console.log(sorov.responseText)
}*/

/* JSON in JS */


/*let jsFile = {'ism':'Madina','yoshi' :'18'};
let jsonFile = '{"ism":"Farxod","yoshi";16}';*/

/*console.log(JSON.stringify(jsFile));*/
/*console.log(JSON.parse(jsonFile));*/

/*  */
let sorov = new XMLHttpRequest();
sorov.open('get','jsonFile.json');
sorov.send();
sorov.onload = function (){
    console.log(JSON.parse(jsonFile))
}
let javob = new XMLHttpRequest()
javob.open('get','jsFile.js');
javob.send();
javob.onload = function (){
    console.log(JSON)
}





