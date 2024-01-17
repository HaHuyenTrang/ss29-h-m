// bài 1
let arr = [2, 4, 6, 3, 8, 9, 10];
let min = arr[0];
let max = arr[0];
for(let i= 0; i<=arr.length; i++){
    if(max<arr[i]){
        max = arr[i];
    }
    if(min>arr[i]){
        min = arr[i];
    }
}

console.log(max);
console.log(min);





//bài 2
let a = parseInt(prompt("nhập vào số a"));
let b = parseInt(prompt("nhập vào số b"));

let array = [];

for(let i = a; i <= b; i++){
    array.push(i);
}
console.log(array);




//bài 3
let array1 = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10];


const filteredArray1 = array1.filter((number) => {
    return number % 2 === 0; // Xóa các số lẻ
  });
  
  console.log(filteredArray1);





//bài 4
let arrayA = [1,2,3,4,5,6,7,8,9,10];
let arrayB =[];
let arrayC =[];


for(let i=0; i<=arrayA.length; i++){
    if(arrayA[i] % 2 ==0){
        arrayB.push(i);
    }else{
        arrayC.push(i);
    }
}

console.log(arrayB);
console.log(arrayC);




//bài 6
let ar =[1,2,3,4,5,6,7,8,9,10];
for (let i = ar.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ar[i], ar[j]] = [ar[j], ar[i]];
}

console.log(ar);




//bài 7
let arrY = prompt("nhập chuỗi bất kì");
const strings = [];

  for (let i = 0; i < arrY.length; i++) {
    for (let j = i + 1; j <= arrY.length; j++) {
      strings.push(arrY.slice(i, j));
    }
  }

console.log(strings);


//bài 8
let string = [1, 2, 4, 4, 5, 6, 2, 8, 1, 3, 3, 3, 10, "b", "d"];
const ArrayV = [];

for (let i = 0; i < string.length; i++) {
  if (!ArrayV.includes(string[i])) {
    ArrayV.push(string[i]);
  }
}

console.log(ArrayV);



//bài 9
// Giải thích:

// Ban đầu, chúng ta khai báo một mảng numbers chứa các số từ 1 đến 5.
// Sau đó, chúng ta gán mảng numbers cho biến newArr. Lưu ý rằng đây là một tham chiếu, không phải một bản sao mới của mảng.
// Tiếp theo, chúng ta sử dụng phương thức push() để thêm số 8 vào mảng newArr.
// Khi chúng ta in mảng newArr và mảng numbers ra màn hình console, cả hai đều chứa phần tử mới là số 8. Điều này xảy ra vì newArr và numbers đều
//  trỏ đến cùng một vùng nhớ chứa mảng, do đó, việc thay đổi mảng thông qua một biến sẽ ảnh hưởng đến mảng được tham chiếu bởi biến khác.

let numbers = [1, 2, 3, 4, 5];
let newArr = [...numbers]; // Sử dụng toán tử spread để tạo bản sao của mảng

newArr.push(8);
console.log(newArr);
console.log(numbers);





//bài 10
let arrAy = [1, 2, 3, 4,3,5,6, 4, 5, 6, 7, 8, 9, 10];
let disarray = [];
let longarray = [];

for (let i = 0; i < arrAy.length; i++) {
  if (!disarray.includes(arrAy[i])) {
    disarray.push(arrAy[i]);
  } else {
    if (disarray.length > longarray.length) {
      longarray = [...disarray];
    }
    disarray = [arrAy[i]];
  }
}


if (disarray.length > longarray.length) {
  longarray = [...disarray];
}

console.log(disarray );
console.log(longarray );






//bài 5
  let arr2 = [1, 2, 3, 2, 1, 4, 5, 6, 5, 4];
    let frequencyCounter = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (frequencyCounter[arr2[i]]) {
        frequencyCounter[arr2[i]]++;
      } else {
        frequencyCounter[arr2[i]] = 1;
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (frequencyCounter[arr2[i]] === 1) {
        return arr2[i];
      }
    }
  
  

  if (frequencyCounter!== null) {
    console.log("Phần tử đầu tiên là độc nhất:", frequencyCounter);
  } else {
    console.log("Không có phần tử độc nhất trong mảng.");
  }

