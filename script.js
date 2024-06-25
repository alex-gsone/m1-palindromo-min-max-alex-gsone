function isPalindrome(str){

    // transforme str em letras minúsculas:
    str = str.toLowerCase();

    // Elimine os espaços vazios:
    str = str.replace(/\s/g, '')
    for(i=0;i<str.length;i++){
            //
            if(str[i]===str[str.length-1-i]){
                // console.log(`${str[i]} and ${str[str.length-1-i]}`)
                if(i===str.length-1){
                    // console.log(i, str.length-1-i)
                    return true
                }
            }else{
                console.log("nda")
                if(i===str.length-1){
                    return false
                }
            }          
        
    }
}
// isPalindrome('amarela');   

function arrayMaxMin(lista){
    for(i=0; i<lista.length; i++){
        for(j=0; j<lista.length; j++){

            // verifique se lista[j] > lista[i], sendo verdade,
            // permute a posição desses elementos! 
            if(lista[j] > lista[i]){
                [lista[j], lista[i]] = [lista[i], lista[j]]
            }
        }
    }
    // console.log(lista)
    return lista;    
}
