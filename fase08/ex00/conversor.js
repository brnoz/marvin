

function conversor(temp, de, para) {
    tempC= temp
    
    if (de=="kelvin"){
    tempC= temp-273.15
    }
    else if (de=="fahrenheit"){
    tempC= (temp - 32) * (5/9)
    }
    
    if (para=="kelvin"){
        temp=tempC+273.15
    }
    else if (para == "fahrenheit"){
        temp= (tempC - 32) * (5/9)
    }
    
    return Math.ceil(temp)
    
}