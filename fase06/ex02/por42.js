

function ateZero(x){
    w=[]
    if (x>0)
    for (i=0;i<=x;i++){
        w.push(i);
    }
    else
    for (i=x;i<=0;i++)
        w.push(i)
    
    return w
}