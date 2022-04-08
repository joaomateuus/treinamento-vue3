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
