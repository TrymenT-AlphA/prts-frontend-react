/**
 * Copyright ©2022-2023 Alice Remake, All Rights Reserved.
 *
 * long description for the file
 *
 * @summary short description for the file
 * @author Alice Remake
 *
 * Created at     : 2022-12-30 14:56:07
 * Last modified  : 2022-12-30 20:27:20
 */

function c(arr, m) {
  let r = [];
  _([], arr, m);
  return r;
  function _(t, a, m) {
    //t:临时数组 a:目标数组 m：多少个数进行组合
    if (m === 0) {
      r[r.length] = t; //相当于push
      return;
    }
    for (let i = 0; i <= a.length - m; i++) {
      //从0开始 到n-m

      let b = t.slice(); //将t赋值给b 不能用=赋值，使用slice会形成新的数组赋值
      b.push(a[i]);
      _(b, a.slice(i + 1), m - 1);
    }
  }
}

function getCombine(options, count) {
  var result = [];
  for (var i = 1; i <= count; i++) {
    result = result.concat(c(options, i));
  }
  return result;
}

export default getCombine;
