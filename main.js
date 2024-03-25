// 
// 
// 
// BUỔI 1
// 
// 
// 
//

// prompt("ban bao");
// number, string, underfind, null, object,...
// var age = 10;
// var name = "Q";
// var falcuty = 'CNTT';

// let university = "HUTECH";
// const PI = 3.14;


// var number1 = 10;
// let number2 = 10;
// console.log(number1);
// console.log(number2);

// if(true){
//     var number1 = 20;
//     let number2 = 20;
// }

// console.log("=====");
// console.log(number1);
// console.log(number2);




// console.log(typeof 1);
// console.log(1 == '1');
// console.log(1 === '1');
// console.log(1 !== '1');



// var name = prompt('ban ten gi');
// console.log(name);




// var age;
// switch (age){
//     case 1:{
//         console.log("");
//         break;
//     }
//     case 2:{
//         console.log("");
//         break;
//     }
//     default;
// }


// do {
//     var name;
//     console.log("");
// } while (condition);





// phuong thuc
// function Sum(a, b){
//     if (a<0){
//         return;
//     }
//     return a+b;

//     // cach khac
//     // return a<0? undefined : a+b
// }
// console.log(Sum('a', 'b'));


// function Sum(a,b){
//     if(a && b){
//         console.log(a+b);
//     }
// }
// Sum(4,6);




// var Sum2 = function(a,b){
//     return a+b;
// }
// console.log(Sum2(5,6));


// var Sum3 = (a,b)=>a+b;
// console.log(Sum3(9,10));







// // mang
// var array = ['TPHCM', 'HUTECH', 'CNTT', 'CNPM']

// for(let index = 0; index < array.length; index++){
//     const element = arguments[index];
//     console.log(element);
// }
// array.forEach(element =>{
//     console.log(element);
// });


// function print(...array){
//     for(let index = 0; index < array.length; index++){
//         const element = arguments[index];
//         console.log(element);
//     }
// } //khong xai agruments trong arrow function
// print('TPHCM', 'HUTECH', 'CNTT', 'CNPM');













// 
// 
// 
// 
// BUỔI 2
// 
// 
// 
// 



// function Direct (sum, sub){
//     var a = parseInt(prompt("nhap so thu nhat: "));
//     var b = parseInt(prompt("nhap so thu hai: "));
//     var c = prompt("nhap phep tinh: ");
//     if(c=='+'){
//         console.log(sum(a,b));
//     }
//     else{
//         console.log(sub(a,b));
//     }
// }
// function sum(a,b){
//     console.log("ham sum duoc goi");
//     return a+b;
// }
// function sub(a,b){
//     console.log("ham sub duoc goi");
//     return a-b;
// }

// window.onload = function() {
//     Direct(sum, sub);
// };






// 
// 
// 
// 
// BUỔI 3
// 
// 
// 
// 


// new Promise (function(resolve,reject){
//     let rand = Math.round(Math.random)*10;
//     console.log(rand);
//     if(rand%2==0){
//         resolve(rand+1);
//     }else{
//         reject(rand+1);
//     }
// }).then(
//     function(data){
//         console.log("successsfully" + data);
//     }
// ).catch(
//     function(err){
//         console.log("deffau" +err);
//     }
// ).finally(
//     function(){
//         console.log("Default");
//     }
// )





// function sleep(s){
//     return Promise(function(res){
//         res();;
//     })
// }






var url = ;
fetch(url).then(//get all
    function (respone){
        return respone.json();
    }
).then{
    function(posts){
        console.log(posts)
    }
}

function ConvertFormPostToRow(posts){
    let string = '<tr>'
}