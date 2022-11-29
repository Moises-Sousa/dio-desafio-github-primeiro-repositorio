
(function (){
    escrevaMeuNome('Moises Silva');
    console.log(verificarIdade(21));

})();

function escrevaMeuNome(name) {
    console.log('Meu nome é ' + name);
}


function verificarIdade(idade){
    if(idade >= 18){
        return 'Maior de idade'
    }else{
        return 'Menor de idade'
    }
}
