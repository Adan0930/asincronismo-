// Es una funtion que se pasa como parametro a otra funtion

function sum(num1, num2) {
    return num1 + num2;
  }
  
  function calc(one, two, sumNumbers) {
    return sumNumbers(one, two);
  };
  
  console.log(calc(2, 2, sum));
  
  setTimeout(function () {
    console.log('Hola JavaScript');
  }, 1000)
  
  function gretting(name) {
    console.log(`Hola ${name}`);
  }
  
  setTimeout(gretting, 5000, 'Oscar');
  console.log(setTimeout);


 