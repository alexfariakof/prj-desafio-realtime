/* QUESTÃO I
Dado um array de números inteiros, retorne os índices dos
dois números de forma que eles se somem a um alvo
específico.
Você pode assumir que cada entrada teria exatamente uma
solução, e você não pode usar o mesmo elemento duas
vezes.

EXEMPLO
Dado nums = [2, 7, 11, 15], alvo = 9,
Como nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
*/

function getIndexSumNumbers(nums, alvo){
    var isAlvo = false;
    var result = "Nenhum Valor Encontrado";
    
    for(var i = 0; i < nums.length; i++) {
        for(var j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == alvo ) {
                isAlvo = true;
                result = [i,j];    
                break;
            }
        }   
        if (isAlvo)
         break;
    }

    return result;
}


console.log(getIndexSumNumbers([2, 11, 15, 7], 9));