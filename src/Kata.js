function factorial(n){
  if (!Number.isInteger(n) || n<0) return null;  
  if (n===1 || n===0) return '1';

  return factor(n);
}

function factor(n) {
    result = 1;
    for (var i=1; i<=n; i++){
        result = mult(result,i);
    }
    return result;
}

function mult (n1,n2){
    var num1 = n1.toString().split().reverse(),
        num2 = n2.toString().split().reverse(),
        base = 10, carry =0, value = 0, offset = 0,
        total = '0';
    
    num1.forEach(function(digitInNum1){
        result = [];
        for (var f=0; f<offset; f++){
            result.push('0');
        }
        offset++;
        num2.forEach(function(digitInNum2){
            value = digitInNum1*(parseInt(digitInNum2)+carry);
            carry = Math.floor(value/base);
            digit = value % base;
            result.push(digit);
        });
        if (carry > 0) result.push(carry);
        total = sum(result.reverse().join(''),total);    
    });    
    return total;
}

function sum (n1,n2){
    return n1.toString();
}