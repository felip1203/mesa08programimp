//exerc01

let altura = 1.25

if (altura > 1.40 && altura < 2){
    console.log( "Autorizado, pode subir")
}else if (altura >= 1.20 && altura <= 1.40){
    console.log("Pode subir apenas se estiver acompanhando")
}else{
    console.log ("Não pode subir, acesso negado")
}