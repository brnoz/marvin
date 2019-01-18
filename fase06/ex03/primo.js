

function primo(x){
    w=[]
    for(i=0;i<x;i++){
        if (Number.isInteger(x/i)){
        w.push(i);
    }}
    if (w.length>2)
    return "Não"
    else
    return "Sim"
}