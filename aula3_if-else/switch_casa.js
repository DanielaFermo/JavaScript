var day = new Date();
var weekday = day.getDay();
/*
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wendsday 
4 = Thursday
5 = Friday
6 = Sábado
*/

switch (weekday) {
  case 0:
    console.log(`Sunday`);
    break;
  case 1:
    console.log(`Today is Monday`);
    break;
  case 2:
    console.log(`Tuesday`);
    break;
  case 3:
    console.log(`Wendsday`);
    break;
  case 4:
    console.log(`Thursday`);
    break;
  case 5:
    console.log(`Friday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  default:
    console.log(`[ERRO] Tente de novo`);
}
