function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

function nivel(){

    if(vitoriasFinais <= 10){
        return "Ferro"
    }else if(vitoriasFinais > 10 && vitoriasFinais <= 20){
        return "Bronze"
    }else if(vitoriasFinais > 20 && vitoriasFinais <= 50){
        return "Prata"
    }else if(vitoriasFinais > 50 && vitoriasFinais <= 80){
        return "Ouro"
    }else if(vitoriasFinais > 80 && vitoriasFinais <= 90){
        return "Diamante"
    }else if(vitoriasFinais > 90 && vitoriasFinais <= 100){
        return "Lendário"
    }else{
        return "Imortal"
    }
}

let vitoriasFinais
let nivelFinal

for (i=0; i<300; i+=10){

    if(i <= 0){
        console.log("O herói ainda não obteve vitórias e está no nível Ferro.")
    }else{
        vitoriasFinais = saldoVitorias(i, 10)
        nivelFinal = nivel(vitoriasFinais)

        console.log(`O Herói tem o saldo de ${vitoriasFinais} vitórias e está no nível ${nivelFinal}`)
    }
    
}


