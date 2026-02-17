const isPrime = (num) => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    } 
    return true;
}

const sumPrimes = (num) => {
    let sum = 0
    if (num < 2) {
        return 0
    } 
    for (let i = num; i >= 2; i--) {
        if (isPrime(i)) {
            sum += i;
        } 
    }
    return sum
}