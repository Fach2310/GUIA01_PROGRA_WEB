type TipoFiltrarNumerosMayores = (lista:number[],limite:number)=>number[]
export const filtrarNumerosMayores : TipoFiltrarNumerosMayores =(lista,limite)=>{
    const listafiltrada:number[]=[]

   /* for (let i=0;i<lista.length;i++){
        const num = lista[i]
        if (num > limite){
            listafiltrada.push(num)
        }
    }*/

    for (let num of lista){
        if (num>limite){
            listafiltrada.push(num)
        }
    }


    return listafiltrada
}

export const filtrarNumerosMayoresFuncional = (lista:number[],limite:number)=>{
    const predicado = (elem:number)=>{
        if(elem>limite){
            return true
        }else{
            return false
        }
    }
    const listafiltrada=lista.filter(predicado)
    return listafiltrada
}

export const calcularPromedio =(lista:number[])=>{
    let total = 0
    for(let num of lista){
        total +=num
    }

    return total/lista.length
}
