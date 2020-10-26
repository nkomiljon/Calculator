/* 
Этот JS файл не завершен .........

*/
(function () {
    const display = document.getElementById('display');

    const Calc = (str) => {
        var arr = str.split(' ');

        switch (arr[1]) {
            case '+':
                return Math.round((+arr[0] + +arr[2]) * 100) / 100;
                break;
            case '-':
                return Math.round((+arr[0] - +arr[2]) * 100) / 100;
                break;
            case '/':
                return Math.round((+arr[0] / +arr[2]) * 100) / 100;
                break;
            case '*':
                return Math.round((+arr[0] * +arr[2]) * 100) / 100;
                break;
        };
    };
    var plusMinusButton = true;

    const plusMinus = (str) => {
        var arr = str.split(' ');
        if (plusMinusButton && arr.length === 1) {
            arr[0] = '-' + arr[0];
            plusMinusButton = false;
            return arr.join(' ');
        } else if (!plusMinusButton && arr.length === 1) {
          arr[0] = arr[0].replace(/[-]/g, "");
          plusMinusButton = true;
          return arr.join(' ');
        };
        if (plusMinusButton && arr.length > 2) {
            arr[2] = '-' + arr[2];
            plusMinusButton = false;
            return arr.join(' ');
        } else if (!plusMinusButton && arr.length > 2) {
            arr[2] = arr[2].replace(/[-]/g, "");
            plusMinusButton = true;
            return arr.join(' ');
        };
    };
    var booleanSing = true;
    var count = 0;
    var str = '';

    const keyboard = document.getElementById('keyboard');
    keyboard.addEventListener('click', (e) => {
        var target = e.target;

        if (target.value.match(/[0123456789\.]/)){
            if (booleanSing === true) {
                display.textContent = '';
                booleanSing = false;
            };
            display.textContent += target.value;
            str += target.value;
        };

       if (target.value.match(/[^0123456789\.=c%m]/)) {
           count += 1;
           if (count === 2) {
               display.textContent = Calc(str);
               str = Calc(str);
               count = 1;
           };
           plusMinusButton = true;
           str += ' ' + target.value + ' ';
           booleanSing = true;
       };

       if (target.value.match('c')) {
           count = 0;
           booleanSing = true;
           str = '';
           display.textContent = '0';
       };

       if (target.value.match('%')) {
           count = 0;
           str = Calc(str) / 100;
           display.textContent = str;
           booleanSing = false;
       };

       if (target.value.match('=')) {
           count = 0;
           display.textContent = Calc(str);
           str = Calc(str);
           booleanSing = false;
       };

       if (target.value.match('m')) {
           str = plusMinus(str);
           var arr = str.split(' ');
           if (arr.length > 2) {
               display.textContent = arr[2];
           } else {
               display.textContent  = str;
           };
       };
    });
})();