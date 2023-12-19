//Deve receber um valor inteiro e retornar a quantidade de moedas para
//chegar no valor informado
//este desafio se baseia em definir quantas moedas uma pessoa deve ter para chegar
//a certo valor, deve retorna a quantidade de cada uma das moedas
//deve priorizar as moedas de maior valor primeiro
//como vou fazer: posso utilizar o resto da divisão para ver quantas moedas de cada
//cabe no número informado, tenho que ir subtraindo o valor de acordo com cada moeda ou não
// as moedas são: 1, 5, 10, 25, 100 e 500
const coinQuantity = (value) => {
  let coins = {
    500: 0,
    100: 0,
    25: 0,
    5: 0,
    1: 0,
  };

  let accum = 0;

  coins[500] = parseInt(value / 500);

  accum = value % 500;

  coins[100] = parseInt(accum / 100);

  accum = accum % 100;

  coins[25] = parseInt(accum / 25);

  accum = accum % 25;

  coins[10] = parseInt(accum / 10);

  accum = accum % 10;

  coins[5] = parseInt(accum / 5);

  accum = accum % 5;

  coins[1] = parseInt(accum / 1);

  accum = accum % 1;
  console.log(coins);
};
coinQuantity(384);
