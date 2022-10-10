let x = 100000; // so tien goi ngan hang
let l = 0.06; //lai xuat
let t = 4; //so thang

function laiXuat(x, l, t) {
  var t1; //so chu ki 3 thang
  var t2; // so tháng dư của chu kì 3 tháng

  t1 = t / 3;
  t1 = Math.round(t1); //lam tron t1
  t2 = t % 3;

  //Tính tiền trong các tháng 3 chu kì
  for (let i = 1; i <= t1; i++) {
    let temp = 0;
    for (let j = 0; j < 3; j++) {
      temp = temp+  x * l;
    }
    x = x + temp;
  }
  console.log(x);

  //tính mấy tháng dư của chu kì 3 tháng
  for (let i = 1; i <= t2; i++) {
    x = x + x*l;
  }

  return x;
}

let result = laiXuat(x, l, t);
console.log(result);
