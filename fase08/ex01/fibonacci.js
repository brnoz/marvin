

function fibonacci(x){
    y=[]
    if (x==0){
        return []
    }
    else if (x==1){
        return [1]
    }
    else if (x>=2){
    y[0]=1
    y[1]=1
    for(i=2;i<=x;i++){
        y[i]=y[i-1]+y[i-2]
    }
    return y
}
}
