
function somaPares(a,z){
    x=0
    i=0
    w=[]
    a= Math.round(a)
    z=Math.round(z)
    for(i=a;i<=z;i++){
        if (Number.isInteger(i/2)){
        w.push(i);
    }}
    for(y=0;y<w.length;y++){
        x+= w[y]}
        return x
}