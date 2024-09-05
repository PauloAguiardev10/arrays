// 1 - criar um array de numeros do 1 ao 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2 - adicionar um elemento no final
numeros.push(50);

//console.log(numeros);

// 3 - adicionar 3 elementos: 100, 200, 400
numeros.push(100, 200, 400);
//console.log(numeros);

let novosNumeros = [100, 200, 400]
numeros.push(novosNumeros);
//console.log(numeros);

//4 - remover o último elemento
numeros.pop();
//console.log(numeros);

//5 - adicionar elemento no inicio do array
numeros.unshift('banana');
//console.log(numeros);

// 6 - procurar um elemento pelo indice

// 6.1 -  tamanho do array
//console.log(`Tamanho do array é: ${numeros.length}`);

//6.2 - inserir no meio
let meio = (numeros.length) / 2;
let meioArredondado = Math.floor(meio);

numeros.splice(meioArredondado, 0, 'Novo elemento')

//console.log(numeros);
//console.log(meioArredondado);


// 7 - Criar um array de números passando um inicio e o fim
//let array = Array.from({ length: 10}, (_, index) => console.log(`Item${index+1}`) );
//console.log(array);


// 8 - Criar uma função onde passa o inicio e o fim de uma lista de Item, do 'Item[inicio] até o 'Item[fim]'
const criarArrayItem = (inicio, fim) => {
    let tamanho = fim - inicio + 1
    let array = Array.from({ length: tamanho}, (_, index) => console.log(`Item${index+inicio}`));    
}

criarArrayItem(1, 5)