const np1 = 3.5;

const np2 = 5.5;

const notaExame = 5;

function calcularNP1 (np1) {
     mediaNp1 = np1;
     if (mediaNp1 >= 7){
          return `Aprovado na NP1`
     } else if (mediaNp1 < 7) {
          return `Reprovado na NP1`
     }
}

const resultadoNp1 = calcularNP1(np1);

console.log(resultadoNp1);

function calcularNP2 (np2) {
     mediaNp2 = np2;
     if (mediaNp2 >= 7){
          return `Aprovado na NP2`
     } else if (mediaNp2 < 7) {
          return `Reprovado na NP2`
     }
}

const resultadoNp2 = calcularNP2(np2);

console.log(resultadoNp2);

function calcularNp1eNp2 (np1, np2) {
   const media = np1 + np2;
   if (media >= 14) {
        return `Aprovado. Média geral ${media} pontos`
   } else if (media < 14) {
        return `Você foi reprovado na média, vai ser preciso fazer exame. Média geral ${media} pontos`
   }
}

const mediaNp1Np2 = calcularNp1eNp2(np1, np2);

console.log(mediaNp1Np2);

function calcularParaExame (np1, np2) { 
     const mediaExame = ((np1 + np2)/2);
     const ex = mediaExame - 10;
     if (mediaExame >= 7) {
          return `Aluno Aprovado Exame`
     } else if (mediaExame < 7) {
          return `Reprovado Exame. Necessário tirar ${ex} pontos para passar no exame.`
     }
}

const resultadoGeral = calcularParaExame(np1, np2)

console.log(resultadoGeral);

function calcularDp (notaExame, np1, np2) {
     const notalGeral = ((np1 + np2)/2);
     const notaParaDp = notaExame
     if (notaExame >= 5) {
          return `Aluno aprovado`
     } else if (notaExame < 5) {
          return `Aluno pegou DP`
     }
}

