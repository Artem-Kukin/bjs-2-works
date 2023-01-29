// Задача № 1

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
    if (element < min) {
      min = element;
    } else if (element > max) {
      max = element;
    }
  }
  let avg = +(sum / arr.length).toFixed(2)
  return { min: min, max: max, avg: avg };
}


// Задача № 2


function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
  }
  return sum;
}


function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < min) {
      min = element;
    } else if (element > max) {
      max = element;
    }
  }
  return (max - min);
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  return (sumEvenElement - sumOddElement);
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }
  return (sumEvenElement / countEvenElement);
}

// Задача № 3

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const checkArr = func(...arrOfArr[i]);
    if (checkArr > maxWorkerResult) {
      maxWorkerResult = checkArr;
    }
  }
  return maxWorkerResult;
}

