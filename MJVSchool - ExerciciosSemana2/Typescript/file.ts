
//  * EXERCÍCIOS
//  * 
//  * Antes de começar, certifique-se de instalar as 
//  * dependências do projeto utilizando "npm install"
//  * 
//  * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
//  * 
//  * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
//  * nome, profissão, idade e uma lista de assuntos de seu interesse.

interface PersonInfo {
        name: string;
        occupation:string;
        age: number;
        interestList:string[];
    }

//  * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.

    const person: PersonInfo = {
        name: "Marcus",
        occupation: "Junior Developer",
        age: 24,
        interestList: ["Games","PC","Hardware"]
    };


//  * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
//  * e retorne somente a lista de assuntos do objeto.
//  * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
    
    function getInterestList(person:PersonInfo): string[] {
        return person.interestList
}  

//  * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)

    enum SchoolSubjects {
        Angular = "Angular",
        Typescript = "Typescript",
        Git = "Git"
    }

//  * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.

    interface Professors {
        name:string;
        subjectList:SchoolSubjects[];
    }

//  * 
//  * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
//  * Nathan = Angular e Git, Alan = Angular, Typescript e Git

    const alan: Professors = {
        name: "Alan Jhonnes",
        subjectList: [SchoolSubjects.Angular,SchoolSubjects.Git,SchoolSubjects.Typescript]
    }

    const nathan: Professors ={
        name: "Nathan Carlos",
        subjectList: [SchoolSubjects.Angular, SchoolSubjects.Git]
    }

//  * 8 - Declare e popule um array com os objetos do exercício 7.

    const arrayProfessors: Professors[] = [
        alan,nathan
    ]
//  * 9 - Faça uma função que receba um argumento de array de Professor 
//  * e retorne um novo array de strings contendo somente os nomes dos professores.

    function getProfessorName(arrayProfessors:Professors[]): string[] {
        return arrayProfessors.map((arrayProfessors)=>arrayProfessors.name);
    }
 
//  * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.

    function getSubjects(arrayProfessors:Professors[]): SchoolSubjects[] {
        const courseSubjectWithDuplications = arrayProfessors.map(p =>p.subjectList)
        .reduce<SchoolSubjects[]>((accumulator, subjectList) => {
            return accumulator.concat(subjectList)
        }, [])

        const courseSubjectWithDuplicationsSet = new Set(courseSubjectWithDuplications)
        return Array.from(courseSubjectWithDuplications)
    }
 
//  * 11 - Faça uma função que receba um argumento de array de Professores e 
//  * retorne o primeiro Professor encontrado que dê aula de Typescript.

function findProfessorThatTeachesTypescript(arrayProfessors:Professors[]): Professors| undefined {
    return arrayProfessors.find(arrayProfessors => arrayProfessors.subjectList.includes(SchoolSubjects.Typescript))
}