let button = [...document.getElementsByTagName('button')];
let input = document.getElementById('input');
let zero = document.getElementById('zero');
let result = document.getElementById('result');
let del = document.getElementById('delete');

button.forEach(function (a) {a.addEventListener('click', function () {
    if (a.value != 'AC' && a.value != '=') {
      input.value = input.value + this.value
    }
  }) })

zero.addEventListener('click', function () {
  input.value = '';})
result.addEventListener('click', function () {
  input.value = eval(input.value);})
del.addEventListener('click', function () {
  input.value = input.value.slice(0,-1)})







