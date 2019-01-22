

function por42(a,z){
    w=[]
    for(i=a;i<=z;i++){
        if (Number.isInteger(i/42)){
        w.push(i);
    }}
    if (w.length>1)
    return w[1]
    else
    console.log("Não encontrado")
    return false
}