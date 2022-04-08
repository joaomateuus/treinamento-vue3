# Diretivas
### As diretivas são ferramentas que nos permitem usar recursos de uma linguagem de programação (lógica) em um template/markup, e vamos ver mais sobre cada uma delas além das de  data-binding já vistas.

<br>

---

# `<v-for>`
### V-for é a estrutura de repetição for-loop que nos conhcemos de qualquer lang.

<br>

## - Estrutura:

### Html
````
<div v-for="(task, index) in tasks" :key="`${task}-${index}`">
    <h1>Tarefa: {{ task.name }} </h1>
    <p>O que devo fazer: {{ task.steps }}</p>
</div>
````
- Sintaxe: `<Tag>` + `<"parametro" in Dado a ser iterado>` 
- Key: Serve como um idenitficador único para que as iterações não se repitam 
<br>

### JS

- Aqui nosso model com o array de dados.
````
<script>
    export default {
        name: 'component',
        data: () => ({
            tasks: [
                {name: 'nome', steps: 'passo 1: , passo 2:'},
                {name: '', steps: 'passo 1: , passo 2:'},
                {name: '', steps: 'passo 1: , passo 2:'},
            ]
        })
    }

</script>
````
---
# `<v-if> <v-else>` 
### Estruturas condicionais if/else que já conhecemos
<br>

# `<v-if>`
### Básicamente o v-if, serve como uma forma de adicionar ou remover elementos do seu HTML de acordo com o resultado da função ou variável que vc tiver passado no model.
- Se for verdadeiro é renderizado se for falso não 
---
<br>

# Exemplo:
````
<div v-if="showList">
    <ul v-for="(task, index) in tasks" :key="`${task}-${index}`">
        <li>Tarefa: {{ task.name }} </h1>
        <li>O que devo fazer: {{ task.steps }}</p>
    </ul>
<div>

````
- Lembram do exemplo anterior ? <br> Aqui eu adicionei o v-if na div passando a variável "showList" que ta no nosso model.

### JS
````
<script>
    export default {
        data: () => {
            showList: false,
        }
    }
</script>
````
- ### A partir desse momemnto a função não está sendo mais renderizada, porque se o valor de "showList" for falso esse bloco de markup não vai ser apresentado.

````
    <div>
        <h1>Minha lista de tarefas:</h1>
        <button @click="() => showList = !showList">
         Ver lista
        </button>
    </div>
    <div v-if="showList">
        <ul v-for="(task, index) in tasks" :key="`${task}-${index}`">
            <li>Tarefa: {{ task.name }} </h1>
            <li>O que devo fazer: {{ task.steps }}</p>
        </ul>
    <div>

````
- ### Aqui criamos um eventListener de click que recebe uma função que ira alterar o valor do isShowing toda vez que for chamado (botão apertado), assim fazendo com que o bloco de markup volte a ser renderizado.
<br>

# `<v-else>`
### Como na estrutura condicional if/else, o `<v-else>` vai servir para renderizar a condição oposta do v-if.

<br>

## Exemplo:
````
    <div v-if="showList">
        <ul v-for="(task, index) in tasks" :key="`${task}-${index}`">
            <li>Tarefa: {{ task.name }} </h1>
            <li>O que devo fazer: {{ task.steps }}</p>
        </ul>
--------------------------------------------------------------
        <p v-else >A lista de tarefas está escondida</p>
------------------------------------------------------------
    <div>
````
- ### Viu que passamos o v-else na tag p, e não foi preciso nem passar o nome da variável, se a condição do if não for atendida o else vai ser executado como é em uma linguagem de programação.

