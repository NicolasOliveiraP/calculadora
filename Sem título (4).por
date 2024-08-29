programa {
  funcao inicio() {
    inteiro n1, n2, qual
    escreva("Digite um número: ")
    leia(n1)
    escreva("Digite outro número: ")
    leia(n2)
    escreva("Agora escolha se a conta vai ser (1 = adição, 2 = subtração, 3 = multiplicação, 4 = divisão)\n")
    leia(qual)

    se(qual == 1){
      escreva(n1 + n2)
    }
    senao se(qual == 2){
      escreva(n1 - n2)
    }
    senao se(qual == 3){
      escreva(n1 * n2)
    }
    senao se(qual == 4){
      escreva(n1 / n2)
    }
  }
}
