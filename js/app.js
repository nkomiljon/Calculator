var wynik = 0,
op = 0,
nowe = 0,
nowe2 = 0,
done = 1,
oset = 0,
btn,
temp;
function reset(value) {
document.form.window.value = value;
wynik = 0,
op = 0,
nowe = 0,
nowe2 = 0;
done = 1;
oset = 0;
}
function wspolna(new_temp) {
btn = 1;
if (nowe || done) {
   nowe = 0;
   done = 0;
   temp = new_temp;
} 
for (var i = 0; i < temp.length; i++) {
   if (temp[i] == '.') {
       btn = 0;
   }
}

}
function button(ktroy, ktroy2) {
temp = document.form.window.value;
if (ktroy2 == '.') {
   wspolna('0'); 
if(btn) {
   temp += ktroy2;
   document.form.window.value = temp;
   oset = 0;
   }
}
if (ktroy >= 0  && ktroy <= 9) {
  wspolna('');
  if (temp == 0 && btn == 1) 
      temp = '';
      temp += ktroy;
      document.form.window.value = temp;
      oset = 1;
  
}
  if (ktroy2 == '-' || ktroy2 == '+' || ktroy2 == '/' || ktroy2 == '*'){
      if (nowe) 
          op = ktroy2;
      else {
          if (!nowe2) {
              op = ktroy2;
              wynik = temp;
              nowe2 = 1;
          }
       else {
           wynik = eval(wynik + op + temp);
           op = ktroy2;
           document.form.window.value = wynik;
       }
       opset = 0;
       nowe = 1;
      }
  }
  if (ktroy2 == '1/x') {
      wynik = eval(1 / temp); reset(wynik);
  }
  if (ktroy2 == 'sqrt') {
      wynik = Math.sqrt(temp); reset(wynik);
  }
  if (ktroy2 == '+/-') {
      document.form.window.value = eval(-temp);
  }
  if (ktroy2 == '=' && oset && op != '0') {
      reset(eval(wynik + op + temp));
  }
  if (ktroy2 == 'C') { 
      reset(0);
  }
  if (document.form.window.value[0] == '.') {
      document.form.window.value = '0' + document.form.window.value;
  }
}