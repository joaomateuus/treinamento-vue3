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
### Para qualquer necessidade de interligar nosso model a view em uma ligação de mão única como uma interpolação dinâmica ou simples, é muito útil o uso do v-bind.
## Alguns Exemplos:
<br>

### - Bind de classe/propiedade para estilo:

````
<template>
    <div>
        <h1 :style="{textDecoration: decoration}">Hello { name }}</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'João',
                decoration: 'underline',

//Aqui está a variável que demos bind, dentro dela tem uma propiedade css que vai ser passsada dinamicamente pelo v-bind
            }
        }
    }
</script>
````
- usamos o bind com essa sintaxe ":", colocando o nome da variável que vai passar a propiedade css pro cssInline. 

- Ele vai interpretar como um js e oq for css vai sere visto como css e oq for valor vai ser visto como valor (tendo em vista que está no model), inclusive se o nome da variavel fosse textDecoration podia deixar só a propiedade, ex: :style="{textDecoration}"

<br>

### - Bind para rota

````
<template>
    <a :href="link">Link pro cursi</a>
</template>
<script>
    export default {
        name: 'component',
        data(){
            return {
                link: 'https://treinamento.vuejsbrasil.org',
            }
        },
    }
</script>

````
- Bem simples, colocamos o nome da variável do "model", no bind e o valor dela vai ser passado ao href.
 
