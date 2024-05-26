function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
console.log(factorial(0));

function findMinMax(numbers) {
    if (numbers.length === 0) {
        return [null, null];
    } else {
        let minNum = numbers[0];
        let maxNum = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < minNum) {
                minNum = numbers[i];
            }
            if (numbers[i] > maxNum) {
                maxNum = numbers[i];
            }
        }
        return [minNum, maxNum];
    }
}

console.log(findMinMax([3, 1, 4, 1, 5, 9, 2]));
console.log(findMinMax([]));

function bubbleSort(numbers) {
    let n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }
    return numbers;
}

console.log(bubbleSort([3, 1, 4, 1, 5, 9, 2]));