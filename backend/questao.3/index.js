/*QUESTÃO III
Digamos que você tenha um array para o qual o elemento i
é o preço de uma determinada ação no dia i.
Se você tivesse permissão para concluir no máximo uma
transação (ou seja, comprar uma e vender uma ação), crie
um algoritmo para encontrar o lucro máximo.
Note que você não pode vender uma ação antes de
comprar

EXEMPLO
Input: [7,1,5,3,6,4]
Output: 5 (Comprou no dia 2 (preço igual a 1) e vendeu no dia 5 (preço
igual a 6), lucro foi de 6 – 1 = 5
Input: [7,6,4,3,1]
Output: 0 (Nesse caso nenhuma
transação deve ser feita, lucro máximo
igual a 0)

*/

function calculaLucro(listPrecoAcaoDia, diaCompra, diaVenda){

    var lucroMaximo = parseInt(listPrecoAcaoDia[diaVenda-1])- parseInt(listPrecoAcaoDia[diaCompra-1]);
    if (isNaN(lucroMaximo))
        lucroMaximo = 0;
    if (lucroMaximo < 0)
        return 'Transação não pode ser realizada';
    else     
        return 'Lucro Maximo foi de ' + lucroMaximo;            
}


console.log(calculaLucro([7,1,5,3,6,4], 2, 5));
console.log(calculaLucro([7,6,4,3,1], 2,7));