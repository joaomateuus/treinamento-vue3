# Eventos e métodos
### Vamos aprender a manipular eventListeners e como funcionam as funçoes js no Vue.
<br>

# Event Listeners:
### Se voce está vendo isso é porque sabe js e consequentemente conhece os eventListeners. <br> - Que são eventos que nos permitem configurar funções a serem chamadas quando esses eventos ocorrerem, quando o usuário aperta um botão por exemplo.
<br>

## Sintaxe de um Event Listener no vue: 
### `@` - Determinamos esse simbolo de @ para criar event listeners no vuejs, <br> Que na verdade é uma abreviação da diretiva v-on dando um bind, nesse exemplo de click: `<v-on>:click`.
- Acompanhado do método que vai ser chamado quando o evento ocorrer: `@click="remove(task)"`
- Poderiamos ter até passado nossa lógica com if em operadores ternários (statement in line) mas aq so passamos o nome da função que está em nossos methods. 

## Alguns eventos:
- ### @Click: Clique
- ### @dbClick: Double clique
- ### @Keyup: Tecla pressionada
- ### @Keyup.enter: Enter
---
## Exemplo acima na prática: 
````
<template>
    <div>
        <h1>Minha lista:</h1>
        <button @click="handleShowList()">
            Ver a lista
        </button>
        <ul v-show="showList">
            <li v-for="(task, index) in tasks"
            :key="`${task}-${index}`">
                {{ task.name }}
                <button @click="remove(task)">
                    &times
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'component',
        data: () => ({
            showList: false,
            tasks: [
                { name: 'Fazer curso', isDone: 'false' }
            ]
        }),
        methods: {
            handleShowList() {
                this.showList = !this.showList
            },
            remove(task) {
                this.tasks = this.tasks.filter(t => t.name !== task.name)
            }
        }
    }
</script>
````
- ### No nosso html temos 2 botões, um chamando a função "Handleshowlist()" e o "remove(task)".
    - ### E no data temos as variáveis que vão ser usadas nessas funções.
<br>

- ### Assim que os botões forem apertados, vão ser chamados as respectivas fuções p cada um.
    - ### HandleShowList(): Vai inverter o valor da variável, assim a tornando verdadeira para ser renderizada na condicional.
    - ### Remove(task): Usando o método filter, vamos filtrar o array criando um novo a partir do mesmo colocando apenas a task que atende a condição. <br> No caso a condição é: se o nome do t não igual do task.name, esse index não entrará no próximo Array.
        - A solução acima preza pelo conceito de imutabilidade, é uma ótima prática.

<br>

## - Usando Eventlistener para alterar o estilo de uma classe

````
<template>
    <div>
        <ul>
            <li @dbclick="complete(task)"
            :class:"{'line-through' : task.isDone}"
            >
                {{ task.name }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'component',
        data: () => {
            showList: false,
            tasks: [
                {name: 'Fazer curso', isDone:false}
            ]
        },
        methods: {
            complete(task) {
                this.tasks = this.tasks.map(t => {
                    if(t.name === task.name) {
                         return { ...t, isDone: !t.isDone }    
                    }
                    return {...t}
                });
            },
        },
    }
</script>
<style>
.line-through {
    text-decoration: line-through;
}


</style>
````
- ### 1- Criamos o evento de dbclick no `<li>` que chama a função `complete(task)`.
    <br>
    
    - ### Na função usamos o método map para percorrer o array e usamos o if para verificar se o nome da tarefa é igual ao que está no model.
    - ### Se for ele ira retornar o array de tasks mudando o estado da variável isDone.
    - ### E por fim retorna o array alterado fora do if para usarmos o seu valor. 
- ### 2- Declaramos o estilo no `<style>`, um line-through.
<br>

- ### Bindamos o resultado do isDone na class do html, passando uma sintaxe de JS com um operador ternário que diz: 
    - ### Se o isDone for verdadeiro, aplique a classe.

---