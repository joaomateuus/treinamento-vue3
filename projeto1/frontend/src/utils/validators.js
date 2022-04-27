export function validateEmptyAndLength3(value) {
    if(!value) {
        return '*Este campo é obrigatório'
    }
    
    if(value.length < 3){
        return '*Este campo precisa no minimo de 3 caracteres'
    }

    return true;


}

