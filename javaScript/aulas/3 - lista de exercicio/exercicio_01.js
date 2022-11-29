/*
    1) Faça um algoritimo que é dado as 3 notas tirados por um aluno em um semestre na faculdade,
    calcule e imprima a sua média e sua classificação conforme a tabela abaixo.

    Média = (nota1 + nota2 + nota3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
const nota1 = 9;
const nota2 = 9;
const nota3 = 9;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovação');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação')
} else {
    console.log('Passou de semestre')
}