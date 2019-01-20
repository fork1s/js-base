function task1() { 
  let num = 0;

  function checkPrime(num) {
    let i = 2;
    let count = 0; 
    while (i <= num) {
      if (num % i === 0) {
        count++;
      }
      i++;
    }
    return count === 1;
  }

  while (num <= 100) {
    if (checkPrime(num)) {
      console.log(num);
    }
    num++;
  }
}

function task2() {
  let num = 0;
  do {
    if (num === 0) {
      alert(num + ' - это ноль');
    }
    if (num != 0 && num % 2 == 0) {
      alert(num + ' - это четное число');
    }
    if (num != 0 && num % 2 != 0) {
      alert(num + ' - это нечетное число');
    }
    num++;
  } while (num <= 0);
}

function task3() {
  for (let i = 1; i <= 9; i++)
    alert(i);
}

function task4() {
  let b = '';
  for (let i = 1; i <= 20; i++) {
    b = b + 'x';
    console.log(a);
  }
}