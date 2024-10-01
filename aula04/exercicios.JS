function exercicio1016(){
    let distancia = Number(prompt("Qual distancia desejada?"));
    let distanciaX = 0;
    let distanciaY = 0;
    let tempo = 0;


    while(distanciaY-distanciaX < distancia){
        distanciaX += 1
        distanciaY += 1.5
        tempo++
        console.log('y: ' + distanciaY);
        console.log('x: ' + distanciaX);
        console.log('Tempo: ' + distancia);
        console.log('diferença: ' + (distanciaY-distanciaX));
        console.log('-------------------------')
    }
    alert("Vai levar "+tempo+" minutos");
}

function exec1038(){
    //ler o cod
    let codigo = Number(prompt("Digite o código: "));
    //ler a quantidade
    let quantidade = Number(prompt("Digite a quantidade: "));
    //defina preço
    let preco
    if(codigo == 1){
        preco = 4.00;
    }
    else if(codigo == 2){
        preco = 4.50;
    }
    else if(codigo == 3){
        preco = 5.00;
    }
    else if(codigo == 4){
        2.00;
    }
    else if(codigo == 5){
        1.50;
    }
    else if(codigo > 5){
        alert("Digita o cod direito")
    }
    alert("Valor total da sua compra: " + (preco*quantidade) + " R$");

    //calcular o valor da conta (preço * quantidade)
}
function exec1008(){
    let id = Number(prompt("Digite seu ID de usuário: "))
    //id do fdp
    let horas = Number(prompt("Quantas horas você trabalhou: "))
    //horas trampadas
    let valorHoras = Number(prompt("Qual o valor da sua hora: "))
    //valor das horas
    salario = horas*valorHoras
    alert("Você ira receber: "+salario+" R$")
    //alertar o número do id e o salario do fdp!!
}
function exec1009(){
    let nome = prompt("Digite seu nome: ");
    //NomeVendedor
    let salario = 1200;
    //SalarioFixoDele
    let vendas = Number(prompt("Digite o número de vendas: "));
    let bonus = salario+vendas+15/2;
    //TotalDeVendar (Cada venda gera 15% de comissão)
    alert("Olá, "+nome+" você ira receber: "+salario+" você fez: "+vendas+" vendas"+" seu salario com o bonus ficara: "+bonus +" R$")
}