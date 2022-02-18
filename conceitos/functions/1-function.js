function fn() {
    return 'Code Here';
}

const arrowFn = () => 'Code here';
const arrowFn = () => {
    //mais de uma expressão
    return 'Code here';
}

// funções também são objetos. 
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funcções.
const controlFnExec => fnParam => allowed => {
    if (allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

// controlfnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if (allowed){
            fnParam();
        }
    }
}