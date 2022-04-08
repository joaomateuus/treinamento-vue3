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

## Alguns Exemplos de eventos:
- ### @Click: Clique
- ### @dbClick: Double clique
- ### @Keyup: Enter
---

