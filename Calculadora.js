let numero1 = parseInt(prompt("ingrese un numero"));
let operacion  = prompt(" ¿Que operacion desea realizar? + - / * ");
let numero2 = parseInt(prompt("ingrese otro numero"));
let resultado;


switch(operacion) {
    case "+":
        resultado=(numero1)+(numero2)
        alert("Resultado : " +resultado);
   break;
   case "-":
    resultado=(numero1)-(numero2)
    alert("Resultado: " +resultado);
break;
case "*":
        resultado=(numero1)+(numero2)
        alert("Resultado : " *resultado);
   break;
   case "/":
        resultado=(numero1)/(numero2)
        alert("Resultado : " +resultado);
        if(numero2>0){
            alert("Resultado : " +resultado);
        }else{
            alert("ERROR:NO SE PUEDE DIVIDIR POR 0")
        
        }
   break;
   default:
   alert("ERROR:Ingrese una operación válida (+ - * /)")
  break;

}
