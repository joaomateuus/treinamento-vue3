# Sintaxe Nova x Sintaxe Antiga
### Tudo que vimos anteriormente foi escrito com a sintaxe antes do Vue3 a "OptionsApi". <br>No vue3 temos uma nova sintaxe que na realidade é aditiva pois ainda podemos usar a sintaxe antiga, a nova se chama "CompositionApi", vamos ver agora algumas dessas novidades:
<br>

# Principais Mudanças
### Em uma visão geral a perspectiva das mudanças se deram mais em relação a como organizamos as coisas e não como a fazemos:
- #### // Usando os exemplos da aula passada p ilustrar melhor a comparação do q mudou ou não, por ex p declarar diretivas ainda continua da mesma forma 
<br>

# Setup()
````
</template>
<script>
directives: {
    focus
},
setup() {
    return {
        name: 'João Mateus'
    }
},

<script>
````
- ### A maioria das propiedades que usavamos na tag `</script>` como: data(), methods, objeto observável [...],<br> Vai ser declarado dentro dessa função setup, Mas o data por exemplo não necessariamente vai se reativo.
<br>

# Reatividade
- ### Para criar objetos reativos temos que importar uma lib/função de dentro do vue chamada "reactive".
````
<script>
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive({
                currentTask: '',
                showList: false,
                tasks: [
                    {name: 'Fazer curso', isDone:false}
                ],
        });
    
        return {
            state
        }
    }
}
<script>
````
- ### 1- Importamos o reactive, criamos uma variável chamada state que é igual a um objeto chamado reactive que tem todas as nossas variáveis reativas.
- ### E retornamos o state fazendo com que tenhamos acesso as variáveis em nosso template.
    - ### **OBS**: Consequentemente para interpolar se torna diferente: 
    ````
    <input type="text" v-model="state.currentTask">
    <li v-for="(task, index) in state.tasks">
    ````

# O fim do this e a propiedade methods
### No vue3 não temos mais a propiedade methods e o this
````
<script>
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive({
                currentTask: '',
                showList: false,
                tasks: [
                    {name: 'Fazer curso', isDone:false}
                ],
        });
        function handleShowList() {
            state.showList = !state.showList
        },
    
        return {
            state,
            handleShowlist,
        }
    }
}
<script>
````
- ### Agora a declaramos normal com sintaxe de função, mais parecido com o react agora.
- ### Não é mais necessário o uso do this, no exemplo usamos state porque as variáveis estão dentro do objeto de reatividade, logo devem ser referencidas.
- ### Temos quer retorna-las dentro do return como as variáveis para poder ter acesso no template.
<br>


