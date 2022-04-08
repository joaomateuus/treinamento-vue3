# Single File Component
### Template, lógica e estilo no mesmo arquivo.

<br>

# O que é ?
## O que é Componente?
>Seria uma peça de nossa interface que se comporta como uma quebra-cabeça, com suas própias características e comportamentos, sendo assim ela traria em seu escopo HTML, CSS e JS correto ?
# Sim

# Logo Single File Componentes São :
>### Nada mais que arquivos com a extensão .vue em que você escreve HTML/CSS e JS no mesmo arquivo 
<br>

# Escopo de um SFC:
```
<template>
    <div>
        <h1>Hello World</h1>
    </div>
</template>
<script>
    export default {
        name: 'First Component',
        data() {
            return {

            }
        },
    }
</script>
<style>
h1 {
color: white;
}
</style>
```

- Se não for necessário usar js ou css n tem a necessidade de usar o `<script>` ou `<style> ` e vice versa, nada disso é obrigatorio

<br>

## Podemos mudar lang de estilo:
```
<style lang="scss">`
    h1{
        color:  white;
    }
</style>
````

<br>

## E a de programação:
```
<script="ts">`
    type Person = {
        name: string
    }
</script>
````
## * Também podemos usar CSS e Js em arquivos separados

<br> 
<br>

# A ideia principal dos Single File Components é ter todas as ferramentas em um só arquivo porém de forma separada, organizada e modular.