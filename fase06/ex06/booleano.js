
function booleanos (x){
    for(i=0;i<x.length;i++){
        if (x[i]== false || x [i] == true)
            x.splice(i,1)
    }
    return x
}