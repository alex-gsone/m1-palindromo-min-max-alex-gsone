function isPalindrome(str){
    str = str.toLowerCase();
    str = str.replace(/\s/g, '')
    let array_true_false = new Array(str.length);
    array_true_false[str.length-1] = false

    for(let i=0; i < str.length; i++){

        if(str[i] === str[str.length-1-i]){
            array_true_false[i] = true  
            if(array_true_false.every(element => element === true)){
                return true
            }
        }else{
            return false 
        }              
    }     
}

function arrayMaxMin(lista){
    let aux1 = 0;
    let aux2 = lista[0];

    for(let i=0; i<lista.length; i++){

        if(aux1 < lista[i]){
           aux1 = lista[i]
        }
        if(aux2 > lista[i]){
            aux2 = lista[i]
        }     
    }
    let array = [aux2, aux1]
    return array;    
}