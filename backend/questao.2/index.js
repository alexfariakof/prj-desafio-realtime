/*
QUESTÃO II
Um bracket é considerado qualquer um dos seguintes caracteres: (, ), {, }, [ ou ].
Dois brackets são considerados um par combinado se o bracket de abertura (isto
é, (, [ou {) ocorre à esquerda de um bracket de fechamento (ou seja,),] ou} do
mesmo tipo exato. Existem três tipos de pares de brackets : [ ], { } e ( ).
Um par de brackets correspondente não é balanceado se o de abertura e o de
fechamento não corresponderem entre si. Por exemplo, { [ ( ] ) } não é balanceado
porque o conteúdo entre {e} não é balanceado. O primeiro bracket inclui o de
abertura, (, e o segundo inclui um bracket de fechamento desbalanceado,].
Dado sequencias de caracteres, determine se cada sequência de brackets é
balanceada. Se uma string estiver balanceada, retorne SIM. Caso contrário, retorne
NAO

EXEMPLO
{[()]} SIM
{[(])} NAO
{{[[(())]]}} SIM
*/

const bracketsAberto = ['(','[','{'];
const bracketsFechado = [')',']','}']

function checkIsBalanceada (paranString){
    var pilha = [];
    

    if ((paranString.length % 2) !== 0)
        return 'NAO';

    for (let i = 0; i < paranString.length; i++) { 
		switch(paranString.charAt(i)) {
			case bracketsAberto[0]:
				pilha.push(bracketsAberto[0]);
				break;
			case bracketsAberto[1]: 
                pilha.push(bracketsAberto[1]);
				break;
			case bracketsAberto[2]:
				pilha.push(bracketsAberto[2]);
				break;
			case bracketsFechado[0]:
				if (pilha == []) {
					return 'NAO';
				}
				if (pilha.pop() != bracketsAberto[0]) {
					return 'NAO';
				}
				break;
			case bracketsFechado[1]:
				if (pilha == []) {
					return 'NAO';
				}
				if (pilha.pop() != bracketsAberto[1]) {
					return 'NAO';
				}
				break;
			case bracketsFechado[2]:
				if (pilha == []) {
					return 'NAO';
				}
				if (pilha.pop() != bracketsAberto[2]) {
					return 'NAO';
				}
				break;
		}    
    }
    return 'SIM';
}


console.log(checkIsBalanceada('{[()]}'));
console.log(checkIsBalanceada('{[(])}'));
console.log(checkIsBalanceada('{{[[(())]]}}'));

