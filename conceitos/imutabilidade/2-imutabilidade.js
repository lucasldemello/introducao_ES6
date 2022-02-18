const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jane',
        grade: 10
    },
    {
        name: 'Peter',
        grade: 3
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);