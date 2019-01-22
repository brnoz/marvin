
function x (a){
    w=[]
    c=[]
    b=0
    for(i=0;i<a.length;i++){
        w[i]=a.substr(i,1)
    }
    for(y=0;y<w.length;y++){
        if (w[y]=="x")
            c.push(y)}
    return c.length
}
