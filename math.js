
'use strict';

module.exports = function(res, op, params) {
  let ops = parseArr(params);
  if (ops === null) {
    res.statusCode = 400;
    res.end();
    return;
  }

  switch (op) {
    case 'square':
      unary(res, ops, x => x * x);
      break;

    case 'cube':
      unary(res, ops, x => x * x * x);
      break;

    case 'sin':
      unary(res, ops, x => Math.sin(x));
      break;

    case 'cos':
      unary(res, ops, x => Math.cos(x));
      break;

    case 'pow':
      binary(res, ops, (x, y) => Math.pow(x, y));
      break;

    case 'div':
      binary(res, ops, (x, y) => x / y);
      break;

    case 'minus':
      binary(res, ops, (x, y) => x - y);
      break;

    case 'mult':
      res.write(ops.reduce((mult, x) => mult * x, 1).toString());
      res.end();
      break;

    case 'sum':
      res.write(ops.reduce((sum, x) => sum + x, 0).toString());
      res.end();
      break;

    default:
      res.statusCode = 400;
      res.end();
  }
}

let parseArr = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    let num = parseFloat(arr[i]);
    if (isNaN(num) || num === undefined) {
      return null;
    }
    res.push(num);
  }
  return res;
}

let unary = (res, ops, fn) => {
  if (ops.length === 1) {
    res.write(fn(ops[0]).toString());
  }
  else {
    res.statusCode = 400;
  }
  res.end();
}

let binary = (res, ops, fn) => {
  console.log
  if (ops.length === 2) {
    res.write(fn(ops[0], ops[1]).toString());
  }
  else {
    res.statusCode = 400;
  }
  res.end();
}
