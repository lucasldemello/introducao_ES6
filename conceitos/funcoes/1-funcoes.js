function getName(){
    return 'Lucas Luan de Melo Pereira'
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName());