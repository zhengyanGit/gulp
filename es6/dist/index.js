"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.onload = function () {
  var bar = {
    a: 1,
    b: 2
  };

  var baz = _objectSpread({}, bar); // { a: 1, b: 2 }


  console.log('baz', baz);
  var copy = Object.assign({}, baz);
  console.log('assign', copy);

  var p = function p() {
    return new Promise(function (resolve, reject) {
      //做一些异步操作
      setTimeout(function () {
        console.log('Promise');
        resolve('随便什么数据');
      }, 2000);
    });
  };

  p();

  var zy = function zy() {
    console.log('箭头函数');
  };

  var ads = [1, 2, 3, 4];
  ads.forEach(function (item) {
    console.log('forEach', item);
  });
};