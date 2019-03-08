// 1.
    // a.
    let showMessage = () => "OLÁ MUNDO!";
    console.log(showMessage());
    console.log(showMessage());
    console.log(showMessage());

// 2.
    // a.
    let showName = name => `OLÁ ${name}`;
    console.log(showName("Nuno"));

    // b.
    let calcRectangleArea = (a, b) => a * b;
    console.log(`A área do retângulo é: ${calcRectangleArea(2, 3)}`);

    // c.
    let calculator = (num1, num2, operator) => {
        switch(operator){
            case '+': return(`${num1} + ${num2} = ${num1 + num2}`);
            case '-': return(`${num1} - ${num2} = ${num1 - num2}`);
            case '*': return(`${num1} * ${num2} = ${num1 * num2}`);
            case '/':
                if (num2 != 0){
                    return (`${num1} / ${num2} = ${num1 / num2}`)
                }
                return("Não é possível efetuar a divisão");
            default:
                return("Operador inválido");
        }
    }
    console.log(calculator(6, 3, "/"));

    // d.
    let calcImc = (weight, height) => {
        let imc = weight / (height ** 2);
        if (imc < 18.5){ return ("Abaixo do peso"); }
        else if (imc < 25){ return "Peso normal"; }
        else if (imc < 30){ return "Sobrepeso"; }
        else if (imc < 35){ return "Obesidade grau I"; }
        else if (imc < 40){ return "Obesidade grau II"; }
        return "Obesidade grau III ou mórbida";
    }
    console.log(calcImc(46, 1.62));

    // e.
    let echo = (s, n) => {
        let result = "";
        for (let i = 0; i < n; i++){
            result += s;
        }
        return result;
    }
    console.log(echo("esmad", 5));

    // f.
    let showIntRange = (a, b) => {
        let result = "";
        for (let i = a; i < b; i++){
            result += i;
        }
        return result;
    }
    console.log(showIntRange(4, 10));

    // g.
    let sumMultiplesThree = (a, b) => {
        let result = 0;
        for (let i = a; i < b; i++){
            if (i % 3 === 0){
                result += i;
            }
        }
        return result;
    }
    console.log(sumMultiplesThree(2, 16));

    // h.
    let calcTimesTable = num => {
        if (!num) {
            num = 1;
        }
        let result = "";
        for (let i = 1; i <= 10; i++){
            result += `${num} X ${i} = ${num * i}\n`;
        }
        return result;
    }
    console.log(calcTimesTable());

    // i.
    /*
        Objeto arguments não funciona com funções arrow
    */
    function sumAll() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    }
    console.log(sumAll(2, 4, 5));

    // j.
    let showNumFriends = (firstName, lastName, ...friendsNames) => {
        return `${firstName} ${lastName} tem ${friendsNames.length} amigos`;
    }
    console.log(showNumFriends("Nome", "Apelido", "Amigo1", "Amigo2"));

// 3.
    // a.
    let min = (a, b) => {
        if (a < b){
            return a;
        }
        return b;
    }
    console.log(min(2, 5));
    console.log(min(3, -1));
    console.log(min(1, 1));

    // b.
    let pow = (x, n) => {
        if (n >= 1 && n % 1 === 0){
            let result = x;
            for (let i = 0; i < n - 1; i++){
                result *= x;
            }
            return result;
        }
        return "n não é um número natural";
    }
    console.log(pow(3, 2));
    console.log(pow(3, 3));
    console.log(pow(1, 100));

    // c.
    let checkPrime = num => {
        if (num >= 2 && ( () => {
            for (let i = 2; i <= num/2; i++){
                if (num % i === 0){
                    return false;
                }
            }
            return true;
        })()){
            return `O número ${num} é primo`;
        }
        return `O número ${num} não é primo`;
    }
    console.log(checkPrime(11));

    // d.
    let calcFactorial = num => {
        if (num === 0){
            return 1;
        }
        let result = num;
        for (let i = num - 1; i >= 1; i--){
        result *= i;
        }
        return result;
    }
    console.log(calcFactorial(6));

// 4.
    // a.
    let isLeapYear = year => {
        if (year % 4 !== 0){ return false; }
        else if (year % 100 !== 0){ return true; }
        else if (year % 400 !== 0){ return false; }
        return true;
    }
    console.log(isLeapYear(2020));

    // b.
    let isPerfect = num => {
        if (num >= 1 && ( () => {
            let result = 0;
            for (let i = 1; i <= num/2; i++){
                if (num % i === 0){
                    result += i;
                }
            }
            return result;
        })() === num){
            return true;
        }
        return false;
    }
    console.log(isPerfect(28));
    /*
        let num = null;
        while (!isPerfect(num)){
            num = +prompt("Número:");
        }
    */

    // c.
    let checkPalindrome = num => {
        if (num < 100 || num > 999){
            return "o número não pertence ao intervalo"
        }
        num = num.toString();
        if (num[0] === num[2]){
            return true;
        }
        return false;
    }
    console.log(checkPalindrome(565));

// 5.
/*
(() => {
  const num = Math.floor(Math.random() * 100) + 1;
  let tries = 5;
  while (tries-- > 0) {
  	let guess = +prompt("Adivinhe o número:")
    if (guess === num) {
      return alert("ADIVINHOU, PARABÉNS!");
    } else if (guess > num && tries !== 0) {
      alert("PARA BAIXO");
    } else if (tries !== 0){
      alert("PARA CIMA");
    }
  }
  alert("PACIÊNCIA, JOGUE OUTRA VEZ!");
})()
*/