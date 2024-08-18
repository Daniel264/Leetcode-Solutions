var isHappy = function (n) {
    let seenNumbers = []
    while (true) {
        let num;
        num = n.toString().split("");
        let valueStorage = 0;
        let i = 0;
        for (i; i < num.length; i++) {
            num[i] *= num[i];
            valueStorage += num[i];
        }
        if (seenNumbers.includes(valueStorage)) {
            return false;
        }
        seenNumbers.push(valueStorage);
        
        if (valueStorage === 1) {
            return true;
        }
        if (seenNumbers.length > 56) {
            return false;
        }
        if (valueStorage === n) {
            return false;
        }
        n = valueStorage;
    }
};
let result = isHappy(710);
console.log(result);
