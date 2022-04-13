# Lifecycle Hooks 
### Como já sabemos os hooks são os estados de vida da aplicação. <br>Em cada um deles pode ser chamado uma função para aplicar um comportamento a cada estágio especifico do ciclo de vida do compoenente/aplicação.
---
<br>

# Comparando
![hooks](https://miro.medium.com/max/860/1*ebI7VwCyxFPksX_ZULJ5Rw.png)
- ### Não a muito oq falar aqui, ao longo da nossa caminhada vamos internalizar cada estágio de vida da nossa aplicação, mas algumas das principais diferenças são:
    - ### No vue3 (CompositionApi) temos os "on" na frente porque vamos importar essas funções.
    - ### Não temos mais os hooks `created` e` beforeCreated`, porque se for para implementar um método quando o app for criado é so por no `setup()` <br> E o beforeCreated é so criar fora do `export default {}` dentro da tag `<script>`

# Exemplo:
````
<template>
    <h1>LifecycleHooks</h>
</template>
````
## * Como era (Vue2- OptionsApi) 
````
<script>
    export default {
        mounted() {
            console.log('Foi montado Options pi')
        }
    }
</script>
````
- ### Assim que o app for buildado vai rodar o onmounted/mounted.
<br>

## * Como é (Vue3- CompositionApi)
````
<script>
    export default {
        setup() {
            onMounted() {
                console.log('Foi montado Options api');
            },
        }
    }
</script>
````
- ### É declarado dentro da função `setup()`.