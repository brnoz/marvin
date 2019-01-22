
function inverter (x){
    z= ""
    if (typeof(x)=="string"){
    for (i=0;i<x.length;i++)
        z+=x[x.length-i-1]
        return z}
    else 
        return x.reverse()
}