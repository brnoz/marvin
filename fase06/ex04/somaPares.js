
function somaPares(a,z){
    x=0
    i=0
    w=[]
    if (a<0)
        a= Math.ceil(a)
    else
        a= Math.floor(a)
    z=Math.floor(z)
    for(i=a;i<=z;i++){
        if (Number.isInteger(i/2)){
        w.push(i);
    }}
    for(y=0;y<w.length;y++){
        x+= w[y]}
        return x
}

console.log(somaPares(10,16))