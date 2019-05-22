export function required(x) {
    if(x.length <= 0){
        return 'Field required'
    }
    else if(x.length > 0){
        return 'true'
    }
}

export function validateName(x){
    let name = x;
    if(name === ''){
        return 'Name required'
    }
    else if(name.length < 3){
        return 'Name is short.'
    }
    else{
        return 'true'
    }
}

export function validateNumber(x){
    let number = x;
    
    if(number.length === 0){
        return 'Number Cannot be empty'
    }
    else if(number.length < 10 || number.length > 10){    
        return 'Number must be of 10 Digits'
    }
    else {
        return 'true'
    }
}

export function validateEmail(x){
    var pattern = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
    let email = x;
    if(email.length == 0){
        return 'Email Required'
    }
    if(!pattern.test(x)){
        return 'Invalid Email'
    }
    else{
        return 'true'
    }
}

export function validatePassword(x){    
    let pass = x;
    
    if(pass.length <= 4){
        return 'Password is weak'
    }
    else{
        return 'true'
    }
}
