import { calcularPromedio, filtrarNumerosMayores } from "./ejercicio1"
import { Punto, distanciaEntrePuntos, moverPunto } from "./ejercicio2";
const main = () =>{
    //Pregunta1

    const numeros:number[]=[5,8,3,10,2,7];
    //Filtrar
    console.log(filtrarNumerosMayores(numeros,5))
    //Promedio
    console.log(calcularPromedio(numeros))

    //Pregunta2
    const p1:Punto=[1,2];
    const p2:Punto=[4,6];
    console.log(distanciaEntrePuntos(p1,p2))
    console.log(moverPunto(p1,p2))

}
main()