// // let arr_for = []
// // let arr_map = []
// // let arr_for2 = []
// // let arr_foreach = []
// // for(let j=0;j<7;j++){
// //     const ciclos = Math.pow(10,j+1)
// //     console.log(ciclos)
// //     arr_for = []
// //     for(let i=0;i<ciclos;i++){
// //         arr_for.push(i)
// //     }
    
// //     const inicio_for = new Date()
// //     for(let i=0;i<arr_for.length;i++){
// //         arr_for2.push(arr_for[i])
// //     }

// //     const fin_for = new Date();console.log('Tiempo for : ',(fin_for.getTime()-inicio_for.getTime()),'largo del arr : ',arr_for2.length)
// //     arr_for.map((item)=>{
// //         arr_map.push(item)
// //     })

// //     const fin_map = new Date();console.log('Tiempo map : ',(fin_map.getTime()-fin_for.getTime()),'largo del arr : ',arr_map.length)
// //     arr_for.forEach(element => {
// //         arr_foreach.push(element)
// //     });


// //     const fin_foreach = new Date();console.log('Tiempo foreach : ',(fin_foreach.getTime()-fin_map.getTime()),'largo del arr : ',arr_foreach.length)
// //     console.log()
// // }



//-------------------------------------------------------------------------------

// arr = [{
//     as:1,
//     beast:'Articuno',
//     tipo:'Hielo'
// },
// {
//     as:2,
//     beast: 'Zapdos',
//     tipo:'Eléctrico'
// },{
    
//     as:3,
//     beast: 'Moltres',
//     tipo:'Fuego'
// },
// {
//     as:4,
//     beast: 'Balbasor',
//     tipo: 'Planta'
// },
// {
//     as:5,
//     beast: 'Blastoise',
//     tipo:'agua'
// },{
//     as:6,
//     beast:'Gengar',
//     tipo:'Fantasma'
// },{
//     as:7,
//     beast:'Machamp',
//     tipo:'Lucha'
// },{
//     as:8,
//     beast:'Hitmonlee',
//     tipo:'Lucha'
// },{
//     as:9,
//     beast:'HitmonChamp',
//     tipo:'Lucha'
// },{
//     as:10,
//     beast:'Mew',
//     tipo:'Psíquico'
// },{
//     as:11,
//     beast:'Eevee',
//     tipo:'Normal'
// },{
//     as:12,
//     beast:'Charizard',
//     tipo:'Fuego'
// },{
//     as:13,
//     beast:'Vileplume',
//     tipo:'Planta'
// },{
//     as:14,
//     beast:'Golduck',
//     tipo: 'Agua'
// },{
//     as:15,
//     beast:'Dratini',
//     tipo: 'Dragón'
// },{
//     as:16,
//     beast:'Dragonite',
//     tipo:'Dragón'
// },{
//     as:17,
//     beast:'Hunter',
//     tipo:'Fantasma'
// },{
//     as:18,
//     beast:'Gastley',
//     tipo:'Fantasma'
// }]
// //filtra los elementos que cumplan las condición dada. En este caso que el tipo de los elementos sea Planta
// let tipo_planta = arr.filter(elem =>{return elem.tipo == 'Planta'})
// //Suma todas las cantidades y lo devuelve como número. Muy similar a sumar.si, contar.si o promedio.si
// let cantidad_planta = arr.reduce((cantidad,elem)=>{return cantidad+elem.as},0)
// //manipula los elementos del array es muy similar al ciclo for
// let agregar_tipo = arr.map(elem =>{return {as:elem.as,beast:elem.beast,tipo:elem.tipo,regi: 'Kanto'}})
// //console.log(arr)
// //console.log(agregar_tipo)
// console.table(cantidad_planta)
// //console.table(tipo_planta)


//-------------------------------------------------------------------------------

let tablero = [[0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0]]

const insertardato = (tablero,dato)=>{
    let fila = dato[0]
    let columna = dato[1]
    //console.log('Original : ',fila, columna)
    if(tablero[fila][columna]>0){
        return -1
    }else{
        tablero[fila][columna]=1
        //marcar las diagonales (1)
        //console.log('Diagonal 1')
        while(fila<7&&columna<7){
            fila++;columna++
            //console.log(fila,columna)
            if(tablero[fila][columna]==0){
                tablero[fila][columna]=2
            }
        }
        fila = dato[0]
        columna = dato[1]
        //marcar las diagonales (2)
        //console.log('Diagonal 2')
        while(fila>1&&columna>1){
            fila--;columna--
            //console.log(fila,columna)
            if(tablero[fila][columna]==0){
                tablero[fila][columna]=2
            }
        }
        fila = dato[0]
        columna = dato[1]
        //marcar las diagonales (3)
        //console.log('Diagonal 3')
        while(fila>1&&columna<7){
            fila--;columna++
            //console.log(fila,columna)
            if(tablero[fila][columna]==0){
                tablero[fila][columna]=2
            }
        }
        fila = dato[0]
        columna = dato[1]
        //marcar las diagonales (4)
        //console.log('Diagonal 4')
        while(fila<7&&columna>1){
            fila++;columna--
            //console.log(fila,columna)
            if(tablero[fila][columna]==0){
                tablero[fila][columna]=2
            }
        }
        //marcar la columna
        fila = dato[0]
        columna = dato[1]
        for(let i=0;i<8;i++){
            if(tablero[fila][i]==0){
                tablero[fila][i]=2
            }
            if(tablero[i][columna]==0){
                tablero[i][columna]=2
            }
        }
        let disponibles =0;let ocupados =0;let puestos =0
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                if(tablero[i][j]==0){
                    disponibles ++
                }else{
                    ocupados++
                    if(tablero[i][j]==1){
                        puestos ++
                    }
                }
            }
        }
        disponibles1=disponibles
        ocupados1 = puestos
        //console.log(ocupados, disponibles, puestos)
        return tablero
    }
}

const tablero_rebut = ()=>{
    return [[0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]]
}

const retroceder = ()=>{
    let valoralistanegra = []
                for(let i=0;i<valores.length;i++){
                    valoralistanegra.push([valores[i][0],valores[i][1]])
                }
                let existe = false
                for(let i=0;i<lista_negra.length;i++){
                    if(valoralistanegra.toString()==lista_negra[i].toString()){
                        existe = true
                    }
                }
                if(!existe){
                    //lista_negra = lista_negra.filter(e=>{!(e.toString().includes(valoralistanegra.toString()))})
                    //console.log(lista_negra)
                    for(let j=0;j<lista_negra.length;j++){
                        if(lista_negra[j].toString().includes(valoralistanegra.toString())){
                            //console.log('Borrado el elemento ',j)
                            lista_negra.splice(j,1)
                            j--
                        }
                    }
                    lista_negra.push(valoralistanegra)
                }
                //console.log(valoralistanegra)
                // console.log('Ingresado a blacklist. Black actualmente ')
                // console.log(lista_negra)
                //se rebobina y se elimina
                tablero = tablero_rebut()
                valores.pop()
                for(let i=0;i<valores.length;i++){
                    tablero = insertardato(tablero,[valores[i][0],valores[i][1]])
                }
}
//console.table(tablero)
let limit = 1000000

//let valores = [[0,2],[1,5]]
let valores = []

let jugadas = 1
let lista_negra = []
let disponibles1 = 0
let ocupados1 = 0
let cantidad_respuesta = 0
let respuestas = []

//indertamos los valores predefinidos
for(let i=0;i<valores.length;i++){
    insertardato(tablero,valores[i])
}


while(tablero != -1){
    let valor1 = []
    if(jugadas==limit){console.log('Respuesta no hallada en la jugada n° ',jugadas);console.log(respuestas);break}
    if(ocupados1==8){
        let oddivalores = [1,2,3,4,5,6,7,8]
        for(let i=0;i<valores.length;i++){
            oddivalores[valores[i][0]]=valores[i]
        }
        valores = oddivalores
        // console.log(valores)
        let respuestaguardada = false
        for(let i=0;i<respuestas.length;i++){
            // console.log(respuestas[i].respuesta.toString(),respuestas[i].respuesta.toString().length)
            // console.log(valores.toString(),valores.toString().length)
            // console.log(respuestas[i].toString()==valores.toString())
            if(respuestas[i].respuesta.toString()==valores.toString()){
                respuestaguardada = true
            }
        }
        if(!respuestaguardada){
            ocupados1==0;console.log('Terminado en la jugada ',jugadas, 'Respuesta n° ',respuestas.length,'Impresión n° ',cantidad_respuesta+1);cantidad_respuesta++;console.table(valores);respuestas.push({respuesta: valores});lista_negra.push(valores[0]);valores = [];tablero = tablero_rebut()}
        }
        
    let hallado = false
    let valorpillado = true
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(tablero[i][j]==0){
                //console.log([i,j])
                let array = valores.concat([[i,j]])
                let enlistanigga = false
                for(let k=0;k<lista_negra.length;k++){
                    if(array.toString()==lista_negra[k].toString()){
                        enlistanigga = true
                        
                    }
                }
                if(!enlistanigga){
                    valorpillado = false
                    valor1 = [i,j]
                    hallado = true
                    break
                }
                
            }
        }
        if(hallado){break}
    }

    // console.log('------------Nuevo Ciclo-------------------')
    if(!valorpillado){
        tablero = insertardato(tablero,valor1)
    }
    
    // console.log('Jugadas : ',jugadas)
    // console.log('casillas ocupadas ',ocupados1)
    // console.table(tablero)

    if(tablero==-1||(disponibles1<=1&&ocupados1<7)||valorpillado){
        //generar y guardar la array en lista negra
        if(!valorpillado){
            valores.push(valor1)
        }
        retroceder()
    }else{
        valores.push(valor1)
    }
    // console.table(valores)   
    jugadas ++
}
