//  * EXERCÍCIOS
//  * 
//  * Antes de começar, certifique-se de instalar as 
//  * dependências do projeto utilizando "npm install"
//  * 
//  * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
//  * 
//  * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
//  * nome, profissão, idade e uma lista de assuntos de seu interesse.
//  * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
var person = {
    name: "Marcus",
    occupation: "Junior Developer",
    age: 24,
    interestList: ["Games", "PC", "Hardware"]
};
//  * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
//  * e retorne somente a lista de assuntos do objeto.
//  * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
function getInterestList(person) {
    return person.interestList;
}
//  * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
var SchoolSubjects;
(function (SchoolSubjects) {
    SchoolSubjects["Angular"] = "Angular";
    SchoolSubjects["Typescript"] = "Typescript";
    SchoolSubjects["Git"] = "Git";
})(SchoolSubjects || (SchoolSubjects = {}));
//  * 
//  * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
//  * Nathan = Angular e Git, Alan = Angular, Typescript e Git
var alan = {
    name: "Alan Jhonnes",
    subjectList: [SchoolSubjects.Angular, SchoolSubjects.Git, SchoolSubjects.Typescript]
};
var nathan = {
    name: "Nathan Carlos",
    subjectList: [SchoolSubjects.Angular, SchoolSubjects.Git]
};
//  * 8 - Declare e popule um array com os objetos do exercício 7.
var arrayProfessors = [
    alan, nathan
];
//  * 9 - Faça uma função que receba um argumento de array de Professor 
//  * e retorne um novo array de strings contendo somente os nomes dos professores.
function getProfessorName(arrayProfessors) {
    return arrayProfessors.map(function (arrayProfessors) { return arrayProfessors.name; });
}
console.log(getProfessorName(arrayProfessors));
//  * 
//  * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
//  * 
//  * 11 - Faça uma função que receba um argumento de array de Professores e 
//  * retorne o primeiro Professor encontrado que dê aula de Typescript.
