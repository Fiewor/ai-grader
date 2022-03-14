//
let obj = {},
  arr1 = [],
  val,
  i;
function deleteNth(arr, n) {
  // [1,2,3,1,2,3]
  arr.forEach((el) => {
    obj[el] = (obj[el] || 0) + 1;
  });
  console.log(obj);
  for (val in obj) {
    console.log(val);
    console.log(obj[val]);
    for (i = 0; i < obj[val]; i++) {
      arr1.push(val);
    }
  }
  console.log(arr1);
}

console.log(deleteNth([1, 2, 3, 1, 2, 3]));

// function deleteNth(arr, n) {
//     let obj = {}, arr1 = [], val, i;
//     arr.forEach((el) => {
//       obj[el] = (obj[el] || 0) + 1;
//     });
//     for (val in obj) {
//       for (i = 0; i < obj[val]; i++) {
//         arr1.push(+val);
//       }
//     }
//     return arr1;
//   }
