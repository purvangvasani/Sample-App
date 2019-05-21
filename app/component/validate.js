export function validateName(x){
    let name = x;
    if(name === ''){
        return false
    }
    else{
        return true
    }
}

export function validateNumber(x){
    let number = x;
    
    if(number.length === 0){
        return 1
    }
    else if(number.length < 10 || number.length > 10){    
        return 2
    }
    else {
        return 0
    }
}

export function validateEmail(x){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    let email = x;
    
    if(!pattern.test(x)){
        return 0
    }
    else{
        return 1
    }
}

export function validatePassword(x){    
    let pass = x;
    
    if(pass.length <= 4){
        return false
    }
    else{
        return true
    }
}
