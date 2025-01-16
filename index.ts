import { calcularPromedio, filtrarNumerosMayores } from "./ejercicio1"
const main = () =>{
    const numeros:number[]=[5,8,3,10,2,7];
    //Filtrar
    console.log(filtrarNumerosMayores(numeros,5))
    //Promedio
    console.log(calcularPromedio(numeros))
}
main()