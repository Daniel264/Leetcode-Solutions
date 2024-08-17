/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let whole_num = 0
    let fract_num = 0

    let num = Math.abs(dividend)
    let is_frac = false
    let is_neg = (dividend < 0)? true : false;
    let divisor_neg = (divisor < 0)? true : false;

    divisor = Math.abs(divisor)

    while (num != 0 && !is_frac){
        if (num < divisor){
            let f_num = parseInt(String(num) + "0")
            num = f_num
            is_frac = true
        }else if(num >= divisor){
            if(!is_frac){
                whole_num += 1
                num -= divisor
            }else{
                fract_num += 1
                num -= divisor
            }
        }
    }
    return ((is_neg && divisor_neg ) == true || is_neg == false && divisor_neg == false)? whole_num : -whole_num;
};

console.log(divide(dividend=16,divisor=3))