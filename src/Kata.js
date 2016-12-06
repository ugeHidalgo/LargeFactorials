function factorial(n){
  if (!Number.isInteger(n) || n<0) return null;  
  if (n===1 || n===0) return '1';

  return factor(n);
}

function factor(n) {
    result = '1';
    for (var i=1; i<=n; i++){
        result = mult(result,i.toString());
    }
    return result;
}

function mult (n1,n2){
    var num1 = n1.split('').reverse(),
        num2 = n2.split('').reverse(),
        base = 10, carry =0, value = 0, offset = 0,
        total = '0', result;
    
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
    var num1 = n1.split('').reverse(),
        num2 = n2.split('').reverse(),
        digit, base = 10,
        result =  [], carry = 0, value;
    
    if (num1.length>=num2.length) {
        var ln = num1.length - num2.length
        for (var i=0; i<ln; i++){
            num2.push('0');
        }
    } else {
        var ln = num2.length - num1.length
        for (var i=0; i<ln; i++){
            num1.push('0');
        }
    }

    for (var i=0; i<num1.length; i++){
        value = parseInt(num1[i])+parseInt(num2[i])+carry;
        carry = Math.floor(value/base);
        digit = value % base;
        result.push(digit);
    }
    if (carry > 0) result.push(carry);
    
    return result.reverse().join('');
}

/*

34563
29600
53273 -> 37325

*/