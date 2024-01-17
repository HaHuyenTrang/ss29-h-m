// //tính diện tích hình tam giác


// function triangleS(a,h){
    
//     let s = (a*h) / 2;
    
//     console.log("diện tích của tam giác: ", s);

// }

// triangleS(10,20);
// triangleS();
// //tại sao gọi được hàm trước khi khai báo



//bài 1

function triangleS(number){
    if(number % 2 == 0){
        console.log("chẵn");
    }else{
        console.log("lẻ");
    }
}

triangleS(3);
triangleS(5);
triangleS(6);
triangleS(8);






//bài 2

function search(arr) {
    let max = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    console.log("chuỗi kí tự : "+max);
}


let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.random().toString(36).substring(2, 7));
}

console.log("Mảng:", arr);
search(arr);




//bài 3
// Khai báo chuỗi bất kỳ
let str = "Hello, world!";

// Hàm đếm số ký tự trong chuỗi (không tính ký tự trống)
function count(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }
  console.log("số kí tự trong chuỗi là : " +count);
  return count;
}


// In kết quả ra màn hình
console.log("Chuỗi:", str);
count(str);




//bài 4
//  nhập vào một chuỗi và một ký tự
let chuoi = prompt("Nhập vào một chuỗi:");
let kyTu = prompt("Nhập vào một ký tự:");


function dem(chuoi, kyTu) {
  let count = 0;
  for (let i = 0; i < chuoi.length; i++) {
    if (chuoi[i] === kyTu) {
      count++;
    }
  }
  console.log("số lần xuất hiện: " +count);
  return count;
}



console.log("Chuỗi:", chuoi);
console.log("Ký tự:", kyTu);
dem(chuoi, kyTu);




//bài 5
let string = ["Hello", "World", "JavaScript", "OpenAI", "Assistant"];

let nulL = prompt("Nhập vào một chuỗi:");


function searc(string, nulL) {
  let ketQua = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i].includes(nulL)) {
      ketQua.push(string[i]);
    }
  }
  console.log("phần tử được tìm thấy: " +ketQua);
  return ketQua;
}


console.log("Mảng chứa chuỗi:", string);
console.log("Chuỗi nhập:", nulL);
searc(string, nulL);




//bài 6
let String = "hello, world!";


function triang(String) {
  let words = String.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    console.log("kết quả: " +words[i]);
  }
  return words.join(" ");
}

console.log("Chuỗi ban đầu:", String);
triang(String);




//bài 7

let sTring = [2, 4, 6, 8, 10];

let user = parseInt(prompt("Nhập vào một số nguyên:"));


function seaRch(sTring, user) {
  let ketQua = [];
  let num = {};
  for (let i = 0; i < sTring.length; i++) {
    let num1 = user - sTring[i];
    if (num[num1] !== undefined) {
      ketQua.push([num1, sTring[i]]);
    }
    num[sTring[i]] = i;
  }
  console.log("kết quả: " +ketQua);
  return ketQua;
}


console.log("Mảng:", sTring);
console.log("Số nhập:", user);
seaRch(sTring, user);