const notas = [2, 2, 3, 1];

notas.pop();
notas.push(10);

const media = (notas[0] +notas[1] +notas[2] +notas[3] ) / notas.length;

console.log(media);
