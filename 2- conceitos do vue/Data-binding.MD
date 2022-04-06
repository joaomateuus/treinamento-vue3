# Data-Binding

*Data binding é um mecanismo pelo qual dados são conectados diretamente à interface do usuário e atualizações feitas nos dados são automaticamente refletidas na interface.*

---
## Existem dois tipos de data-binding:

`<v-bind>`

1. one-way: quando temos o objeto js conectado ao que está em nossa view como uma simples interpolação. 
- O `<v-bind>` nada mais é que uma forma de interpolação dinâmica.

<br>

`<v-model>` <br>
2. two-way: quando interligamos a view (interface) com a model (data schema), aqui a interferencia é de mão dupla.

- E quando quisermos que nossa view interfira no nosso model ou vice e versa usamos o `<v-model>`

---
<br>

# Exemplos de usos do data binding:
## `<v-model>`
###  Um dos casos clássicos do uso de v-model são formulários:
````
<template>
    <div>
        <form>
            <label>Nome</label>
            <input v-model="nome" type="text" />
        </form>
    </div>
</template>
<script>
    export default {
        name:  'component',
        data() {
            return {
                nome: '',
            }
        }
    }
</script>
````
- Aqui o que for inscrito no input vai ser armazenado na variável nome.

<br>

## `<v-bind>`
### Para qualquer uso de interpolação dinâmica ou simples é muito útil do v-bind.
